
# 🚀 Next.js + MDX Project Setup (Reusable Steps)

_Last updated: 2025-04-18_

---

## ✅ Step 1: Clone Repository Locally

```bash
git clone git@github.com:<your-org>/<your-repo>.git
cd <your-repo>
```

Replace `<your-org>` and `<your-repo>` with your GitHub organization and repository names.

---

## ✅ Step 2: Initialize Next.js Project

Use `create-next-app`:

```bash
npx create-next-app@latest . --use-npm
```

Follow prompts:

- **Typescript**: Yes
- **ESLint**: Yes
- **Tailwind CSS**: Yes
- **`src/` directory**: Yes
- **App Router**: Yes
- **Would you like to use Turbopack for next dev?: No 
- **Customize imports**: No (default)
- **Alias (`@/*`)**: Yes

---

## ✅ Step 3: Install MDX Support

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react remark-gfm rehype-slug
```

Modify `next.config.ts` to include MDX:

```javascript
// next.config.ts

import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

const nextConfig: NextConfig = {
  // include MDX file types
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)


```

---

## ✅ Step 4: Create MDX Wrapper

```javascript
// src/app/lessons/page.tsx
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

// (Optional) any React components you want to expose to MDX:
const components = {
  // You can add `<MyChart />` or `<Fretboard />` here later
};

export default async function LessonsPage() {
  // 1. Read the MDX file from disk
  const mdxPath = path.join(process.cwd(), 'src/app/lessons/test.mdx');
  const source = fs.readFileSync(mdxPath, 'utf8');

  // 2. Render it with MDXRemote (server-safe)
  return (
    <main className="prose mx-auto px-4">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug],
          },
        }}
        components={components}
      />
    </main>
  );
}
```
---

## ✅ Step 4: Create Initial MDX Page

Inside `/src/app/lessons/test.mdx` create a test MDX file: `test.mdx`

```mdx
# MDX Test Page

This page confirms MDX is working.

```

Run the project locally to verify:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## ✅ Step 5: Initial Commit and Push

```bash
git add .
git commit -m "Initial Next.js + MDX setup"
git push origin HEAD
```

---

## ✅ Step 6: Setup GitHub Actions CI/CD (Optional for now)

Create a file `.github/workflows/deploy.yml` (basic example):

```yaml
name: Deploy Next.js to AWS

on:
  push:
    branches:
      - main

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
      - name: Deploy to AWS S3
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: ap-southeast-2
          AWS_BUCKET_NAME: your-bucket-name
        run: |
          npm install -g aws-cli
          aws s3 sync ./out s3://${AWS_BUCKET_NAME}/ --delete
```

Make sure to:

- Replace placeholders with your own details.
- Configure AWS credentials as GitHub secrets.

---

## 🚧 Next Steps:

- Start creating content in MDX.
- Customize the Next.js project to suit your site's design.
- Add further automation scripts as needed.

