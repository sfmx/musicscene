# Setting Up Email for musicscene.com.au with AWS and Thunderbird

This guide will walk you through setting up email handling for the musicscene.com.au domain using AWS services and configuring Thunderbird to access your mailbox.

## Prerequisites

- AWS account with administrative access
- Domain name (musicscene.com.au) with access to DNS settings
- Mozilla Thunderbird email client installed

## Option A: SES + Email Forwarding (No WorkMail)

If you want to avoid the $4/month per user cost of AWS WorkMail, you can use this simpler approach:

1. **Set Up AWS SES for Receiving**
   
   - Follow Step 1 from Option B below to verify your domain with SES
   - Configure email receiving in SES using Receipt Rules
   
2. **Create SES Receipt Rules to Forward Email**

   - In the SES console, go to "Email Receiving" → "Rule Sets"
   - Create or use the default rule set
   - Add a rule for your domain (e.g., @musicscene.com.au)
   - Add an action to forward emails to your personal email address
   - Save the rule

3. **Set Up Email Client for Sending**

   - You can send emails "from" your domain using SES SMTP
   - Configure Thunderbird with SES SMTP credentials:
     - Server: email-smtp.[your-region].amazonaws.com
     - Port: 587 (TLS) or 465 (SSL)
     - Username/Password: Create SES SMTP credentials in the AWS Console
   
4. **Local Storage with Thunderbird**

   - Configure your personal email in Thunderbird
   - Create filters to organize musicscene.com.au emails into local folders
   - Set up message rules to organize by sender/recipient

This approach costs significantly less:
- SES receiving: Free for the first 1,000 emails per month, then $0.10 per 1,000 emails
- SES sending: Free for the first 62,000 emails per month (if sent from an EC2 instance)

## Option B: Full AWS WorkMail Setup

### Step 1: Set Up AWS SES (Simple Email Service)

1. **Verify Your Domain in SES**

   - Log in to the AWS Management Console
   - Navigate to the SES (Simple Email Service) dashboard
   - Click on "Verified identities" in the left sidebar
   - Click "Create identity"
   - Select "Domain" and enter "musicscene.com.au"
   - Keep "DKIM" and "Custom MAIL FROM domain" checked
   - Click "Create identity"

2. **Add DNS Records**

   After verification request, AWS will provide you with a set of DNS records:
   - DKIM records (usually 3 CNAME records)
   - MX record
   - TXT record for SPF verification
   
   Add these records to your domain's DNS settings through your domain registrar.

3. **Move Out of SES Sandbox (if needed)**

   By default, new SES accounts are in "sandbox mode" which limits email sending.
   - In the SES dashboard, click "Request production access"
   - Fill out the request form explaining your email use case
   - Wait for AWS approval (typically 24-48 hours)

### Step 2: Set Up AWS WorkMail (for Mailbox Management)

1. **Create a WorkMail Organization**

   - Navigate to the AWS WorkMail console
   - Click "Create organization"
   - Select "Create a new organization"
   - Enter a name (e.g., "MusicScene")
   - Choose a directory type ("Simple AD" is sufficient for basic use)
   - Select your desired AWS region (choose one close to Australia)
   - Click "Create"

2. **Add Your Domain**

   - In the WorkMail console, go to "Domains"
   - Click "Add domain"
   - Enter "musicscene.com.au"
   - Choose "Use this domain as default"
   - Follow the instructions to add the provided DNS records

3. **Create Email Users**

   - Go to "Users" in the WorkMail console
   - Click "Create user"
   - Fill in the user details:
     - Username (e.g., info, admin, support)
     - First and last name
     - Display name
     - Email address (e.g., info@musicscene.com.au)
   - Set a temporary password
   - Click "Create"

### Step 3: Configure Thunderbird

1. **Add Your WorkMail Account to Thunderbird**

   - Open Thunderbird
   - Click the menu button and select "Account Settings" or "New → Email Account"
   - Enter:
     - Your name
     - Email address (e.g., info@musicscene.com.au)
     - Password (the one you set in WorkMail)
   
2. **Manual Configuration**

   If auto-discovery doesn't work, manually configure:

   **Incoming Server:**
   - Server: outlook.office365.com (WorkMail uses Exchange protocol)
   - Port: 993
   - Protocol: IMAP
   - SSL: SSL/TLS
   - Authentication: Normal password

   **Outgoing Server:**
   - Server: smtp.office365.com (WorkMail uses Exchange protocol)
   - Port: 587
   - Protocol: SMTP
   - SSL: STARTTLS
   - Authentication: Normal password

3. **Alternatively, Use WorkMail IMAP/SMTP Settings**

   For direct WorkMail configuration:
   
   **Incoming Server:**
   - Server: imap.mail.[YOUR-AWS-REGION].awsapps.com
   - Port: 993
   - Protocol: IMAP
   - SSL: SSL/TLS
   - Authentication: Normal password

   **Outgoing Server:**
   - Server: smtp.mail.[YOUR-AWS-REGION].awsapps.com
   - Port: 465
   - Protocol: SMTP
   - SSL: SSL/TLS
   - Authentication: Normal password

### Step 4: Set Up Mail Forwarding (Optional)

If you want to forward emails to an existing email account:

1. **Create an SES Receipt Rule**
   - In the SES console, go to "Email Receiving" → "Rule Sets"
   - Create a new rule set or use the default
   - Add a rule:
     - Define recipient conditions (e.g., @musicscene.com.au)
     - Add actions:
       - "Deliver to WorkMail" (select your organization)
       - "Forward as email" (enter your forwarding email address)
   - Save the rule

### Step 5: Create Local Mail Storage in Thunderbird

To store emails locally for offline access:

1. **Create Local Folders**
   - In Thunderbird, right-click on "Local Folders"
   - Select "New Folder"
   - Name it (e.g., "MusicScene Emails")
   - Click "Create Folder"

2. **Set Up Message Filters**
   - Right-click on your WorkMail inbox
   - Select "Message Filters"
   - Click "New"
   - Set conditions (e.g., "From" contains "@musicscene.com.au")
   - Set actions to "Copy to" your local folder
   - Check "Run now" and "Run periodically" options

## Option C: SES with S3 Storage (Lowest Cost)

If you want even lower costs and are comfortable with more technical setup:

1. **Set Up AWS SES as in Option A**

   - Verify your domain with SES
   - Set up email receiving

2. **Create an S3 Bucket for Email Storage**

   - Create a new S3 bucket to store your emails
   - Set appropriate lifecycle rules if needed (e.g., moving older emails to cheaper storage classes)
   - Configure bucket permissions to allow SES to write to it

3. **Configure SES Receipt Rules for S3 Storage**

   - In the SES console, create a receipt rule
   - Add an action to save messages to your S3 bucket
   - Define recipient conditions for your domain
   - Save the rule

4. **Set Up Email Access**

   - Option 1: Use a third-party tool like "S3 Browser" to access your emails
   - Option 2: Create a simple web application to browse and view emails from S3
   - Option 3: Use AWS Lambda to process incoming emails and forward them elsewhere

5. **For Sending Emails**

   - Use SES SMTP endpoints as described in Option A
   - Configure Thunderbird with SES SMTP credentials

This approach has the lowest cost:
- SES receiving: Free for the first 1,000 emails per month, then $0.10 per 1,000 emails
- SES sending: Free tier available
- S3 storage: Approximately $0.023 per GB per month, which is very economical
- No monthly fee per mailbox like with WorkMail

The tradeoff is more technical complexity and potentially less user-friendly access to your emails.

## Comparison of Options

| Feature | Option A (SES+Forwarding) | Option B (WorkMail) | Option C (SES+S3) |
|---------|---------------------------|---------------------|-------------------|
| Cost | Low | Moderate ($4/user/mo) | Lowest |
| Ease of Setup | Moderate | Easiest | Most Complex |
| UI Experience | Use existing email | Full email client | Basic/custom |
| Storage | Your existing email | 50GB per user | Pay per use |
| Features | Basic | Full Exchange | Minimal |

## Cost Considerations

- **AWS SES**: Receiving emails is free. Sending has costs after the free tier.
- **AWS WorkMail**: Approximately $4 USD per user per month.
- **AWS Route 53** (if used for DNS): $0.50 USD per hosted zone per month + query costs.

## Security Best Practices

1. Enable Multi-Factor Authentication (MFA) for your AWS account
2. Use strong passwords for your email accounts
3. Regularly rotate credentials
4. Monitor your AWS CloudTrail logs for unusual activity
5. Consider setting up alerts for failed login attempts

## Troubleshooting

- **Email not being received**: Verify DNS records are properly configured
- **Cannot send email**: Check if your SES account is still in the sandbox
- **Connection issues in Thunderbird**: Verify server names and ports
- **Authentication failures**: Make sure your password is correct and that you're using the right username format

---

This setup will provide you with a professional email solution for musicscene.com.au that you can access through Thunderbird with local mail storage capabilities.
