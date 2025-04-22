This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


aws acm resend-validation-email --certificate-arn arn:aws:acm:ap-southeast-2:093473372869:certificate/a5fa3ee0-58b0-4ec8-96be-9cd2f80ba940 --domain musicscene.com.au --validation-domain musicscene.com.au

aws acm describe-certificate --certificate-arn arn:aws:acm:ap-southeast-2:093473372869:certificate/a5fa3ee0-58b0-4ec8-96be-9cd2f80ba940 --region ap-southeast-2 --query "Certificate.DomainValidationOptions[?DomainName=='musicscene.com.au'].ResourceRecord" --output json


aws route53 change-resource-record-sets --hosted-zone-id ZONEID_OF_YOUR_HOSTED_ZONE --change-batch '{ "Comment": "ACM DNS validation record", "Changes": [   {     Action": "UPSERT",  "ResourceRecordSet": {   "Name": "_54eed078e6308d993dcc0f06d00e9664.musicscene.com.au.",     "Type": "CNAME",      "TTL": 300, "ResourceRecords": [{ "Value": "_56afffdd7545773b078333c341a0c428.xlfgrmvvlj.acm-validations.aws." }]     }    }   ]  }'


# Define the JSON change‑batch in a here‑string
$changeBatch = @'
{
  "Comment": "ACM DNS validation record",
  "Changes": [
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "_54eed078e6308d993dcc0f06d00e9664.musicscene.com.au.",
        "Type": "CNAME",
        "TTL": 300,
        "ResourceRecords": [
          { "Value": "_56afffdd7545773b078333c341a0c428.xlfgrmvvlj.acm-validations.aws." }
        ]
      }
    }
  ]
}
'@

# Run the Route 53 change
aws route53 change-resource-record-sets `
  --hosted-zone-id ZONEID_OF_YOUR_HOSTED_ZONE `
  --change-batch $changeBatch
