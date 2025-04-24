```
aws cloudformation deploy --stack-name musicscene-hosted-zone --template-file infrastructure/hosted-zone.yaml --parameter-overrides DomainName=musicscene.com.au --capabilities CAPABILITY_NAMED_IAM
```

```
<!-- aws cloudformation deploy --stack-name musicscene-certificate --template-file infrastructure/certificate.yaml --capabilities CAPABILITY_NAMED_IAM -->
```

```
aws cloudformation deploy --stack-name musicscene-certificate --template-file infrastructure/certificate.yaml --parameter-overrides HostedZoneId=Z09411253U4EYQQ9WX43Z --capabilities CAPABILITY_NAMED_IAM --region us-east-1

```

```
aws cloudformation deploy --stack-name musicscene-bucket --template-file infrastructure/bucket.yaml --capabilities CAPABILITY_NAMED_IAM
```

```
aws cloudformation list-exports --query "Exports[?Name=='MusicSceneS3BucketDomainName']" --output table

```

```
<!-- aws cloudformation deploy --stack-name musicscene-cloudfront --template-file infrastructure/cloudfront.yaml --capabilities CAPABILITY_NAMED_IAM -->
```

```
aws cloudformation deploy --stack-name musicscene-cloudfront --template-file infrastructure/cloudfront.yaml --parameter-overrides DomainName=musicscene.com.au HostedZoneId=Z09411253U4EYQQ9WX43Z CertificateArn=arn:aws:acm:us-east-1:093473372869:certificate/68e67f52-f6ac-44fe-9b50-17707f8ca8ae S3OriginDomain=musicscene.com.au.s3.amazonaws.com --capabilities CAPABILITY_NAMED_IAM --region ap-southeast-2
```



```
aws cloudformation list-exports --query "Exports[?starts_with(Name,'MusicScene')]" --output table
```