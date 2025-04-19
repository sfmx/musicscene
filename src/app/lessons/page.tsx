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
