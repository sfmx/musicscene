import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({ region: 'ap-southeast-2' });
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'jason24172@outlook.com';
const PRIMARY_SENDER = 'MusicScene <leads@musicscene.com.au>';
const FALLBACK_SENDER_1 = 'MusicScene <admin@musicscene.com.au>';
const FALLBACK_SENDER_2 = 'MusicScene <leads@mytradequotes.com>';

const SOURCE_LABELS = {
  footer_newsletter: 'Footer Newsletter Signup',
  inline_newsletter: 'Inline Lesson Newsletter Signup',
  inline_lead_magnet_banner: 'Free Fretboard PDF Lead Magnet',
};

export const handler = async (event) => {
  // Handle preflight OPTIONS if not handled by Function URL CORS
  if (event.requestContext?.http?.method === 'OPTIONS') {
    return { statusCode: 204, body: '' };
  }

  try {
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body || {};
    const {
      email,
      source = 'footer_newsletter',
      page = 'Not specified',
    } = body;

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ error: 'Valid email is required' }),
      };
    }

    const cleanEmail = email.trim().toLowerCase();
    const sourceLabel = SOURCE_LABELS[source] || source || 'Website Newsletter Form';
    const timestamp = new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' });

    // Log structured subscriber event to CloudWatch for permanent backup
    console.log('NEW_SUBSCRIBER_CAPTURED', JSON.stringify({
      email: cleanEmail,
      source,
      sourceLabel,
      page,
      timestamp,
    }));

    // Clean, emoji-free subject line to maximize Outlook SmartScreen deliverability
    const subject = `[MusicScene] New Newsletter Subscriber: ${sourceLabel} (${cleanEmail})`;

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #f8fafc; border-radius: 12px; overflow: hidden; border: 1px solid #334155;">
        <div style="background: #f59e0b; color: #0f172a; padding: 16px 24px; font-weight: bold; font-size: 18px;">
          MusicScene &mdash; New Email List Subscriber
        </div>
        <div style="padding: 24px;">
          <p style="margin-top: 0; color: #cbd5e1;">A visitor just subscribed to the mailing list on <strong>musicscene.com.au</strong>:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; width: 140px;">Subscriber Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; font-weight: bold; color: #fbbf24;">
                <a href="mailto:${cleanEmail}" style="color: #fbbf24; text-decoration: none;">${cleanEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8;">Signup Source</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #f8fafc; font-weight: 600;">${sourceLabel}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8;">Page Path</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #cbd5e1;">${page}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8;">Subscribed At</td>
              <td style="padding: 10px 0; color: #cbd5e1;">${timestamp} (AEST)</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #64748b;">
            Tip: You can reply directly to this email to contact ${cleanEmail}.
          </p>
        </div>
      </div>
    `;

    const textBody = [
      `New MusicScene Email List Subscriber`,
      `------------------------------------`,
      `Subscriber Email: ${cleanEmail}`,
      `Signup Source: ${sourceLabel}`,
      `Page Path: ${page}`,
      `Time: ${timestamp} (AEST)`,
    ].join('\n');

    const sendWithSender = async (sender) => {
      return ses.send(
        new SendEmailCommand({
          Source: sender,
          Destination: { ToAddresses: [RECIPIENT_EMAIL] },
          ReplyToAddresses: [cleanEmail],
          Message: {
            Subject: { Data: subject, Charset: 'UTF-8' },
            Body: {
              Html: { Data: htmlBody, Charset: 'UTF-8' },
              Text: { Data: textBody, Charset: 'UTF-8' },
            },
          },
        })
      );
    };

    try {
      await sendWithSender(PRIMARY_SENDER);
    } catch (err1) {
      console.warn('Primary domain sender not yet active, trying verified admin@musicscene.com.au:', err1.message);
      try {
        await sendWithSender(FALLBACK_SENDER_1);
      } catch (err2) {
        console.warn('Fallback 1 failed, using verified leads@mytradequotes.com:', err2.message);
        await sendWithSender(FALLBACK_SENDER_2);
      }
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error('Newsletter capture error:', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Failed to process subscription' }),
    };
  }
};

