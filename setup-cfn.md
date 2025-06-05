# 1) Delete CloudFront stack
```
aws cloudformation delete-stack --stack-name musicscene-cloudfront --region ap-southeast-2
aws cloudformation wait stack-delete-complete --stack-name musicscene-cloudfront --region ap-southeast-2
```

# 2) Delete Certificate stack
```
aws cloudformation delete-stack --stack-name musicscene-certificate --region us-east-1
aws cloudformation wait stack-delete-complete --stack-name musicscene-certificate --region us-east-1
```

# 3) Delete the Hosted Zone stack
aws cloudformation delete-stack --stack-name musicscene-hosted-zone --region ap-southeast-2
aws cloudformation wait stack-delete-complete --stack-name musicscene-hosted-zone --region ap-southeast-2
```



```
aws cloudformation deploy --stack-name musicscene-hosted-zone --template-file infrastructure/hosted-zone.yaml --parameter-overrides DomainName=musicscene.com.au --capabilities CAPABILITY_NAMED_IAM --region ap-southeast-2
```

```
aws cloudformation deploy --stack-name musicscene-certificate --template-file infrastructure/certificate.yaml --parameter-overrides HostedZoneId=Z063245519AA0LLLO2C25 --capabilities CAPABILITY_NAMED_IAM --region us-east-1
```

```
aws cloudformation deploy --stack-name musicscene-bucket --template-file infrastructure/bucket.yaml --capabilities CAPABILITY_NAMED_IAM --region ap-southeast-2
```

```
aws cloudformation list-exports --query "Exports[?Name=='MusicSceneS3BucketDomainName']" --output table
```

```
<!-- aws cloudformation deploy --stack-name musicscene-cloudfront --template-file infrastructure/cloudfront.yaml --capabilities CAPABILITY_NAMED_IAM -->
```

```
aws cloudformation deploy --stack-name musicscene-cloudfront --template-file infrastructure/cloudfront.yaml --parameter-overrides DomainName=musicscene.com.au HostedZoneId=Z063245519AA0LLLO2C25 CertificateArn=arn:aws:acm:us-east-1:093473372869:certificate/445a48b6-73d6-44fb-86ab-c7e3bfc445fe S3OriginDomain=musicscene.com.au.s3.amazonaws.com --capabilities CAPABILITY_NAMED_IAM --region ap-southeast-2
```



```
aws cloudformation list-exports --query "Exports[?starts_with(Name,'MusicScene')]" --output table
```

```
npm run build
s3 sync ./out s3://musicscene --delete
aws cloudfront create-invalidation --distribution-id EMEO566RGP4JE --paths "/*"
```