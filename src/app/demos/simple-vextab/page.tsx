"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VexTabRenderer from '@/components/VexTabRenderer';

export default function SimpleDemoPage() {
  return (
    <Layout>
      <Header
        title="Simple VexTab Demo"
        subtitle="Clean API for Guitar Notation"
      />
      <main className="prose mx-auto px-4 py-8 max-w-4xl">
        <h1>Simple VexTab Renderer</h1>
        
        <p>
          This page demonstrates a simpler approach to using VexTab for guitar notation.
          Instead of creating complex data structures, you can directly use VexTab syntax.
        </p>
        
        <section className="mt-8">
          <h2>Basic Examples</h2>
          
          <h3>Chromatic Exercise</h3>
          <VexTabRenderer 
            vextab={`
options space=20 font-size=14
              
tabstave notation=true time=4/4 key=C
notes :8 1/1^1^-2/1^2^-3/1^3^-4/1^4^ | :8 1/2^1^-2/2^2^-3/2^3^-4/2^4^ |
notes :8 1/3^1^-2/3^2^-3/3^3^-4/3^4^ | :8 1/4^1^-2/4^2^-3/4^3^-4/4^4^
            `}
            width={600}
          />
          
          <h3>Finger Independence Exercise</h3>
          <VexTabRenderer 
            vextab={`
options space=20 font-size=14
              
tabstave notation=true time=4/4 key=C
notes :8 1/1^1^-3/1^3^-2/1^2^-4/1^4^ | :8 1/2^1^-3/2^3^-2/2^2^-4/2^4^ |
notes :8 1/3^1^-3/3^3^-2/3^2^-4/3^4^ | :8 1/4^1^-3/4^3^-2/4^2^-4/4^4^
            `}
            width={600}
          />
        </section>
        
        <section className="mt-8">
          <h2>Advanced Example with Techniques</h2>
          
          <p>VexTab supports various guitar techniques like bends, hammer-ons, pull-offs, and more:</p>
          
          <VexTabRenderer 
            vextab={`
options space=20 font-size=14

tabstave notation=true key=A time=4/4
notes :q (5/2.5/3.7/4) :8 10/4-12/4 | :h 5/5 :q 7/5 :8 8/5-7/5 |
notes :8 5/5-7/5-8/5-7/5-5/5-7/5-8/5-7/5 | :h 15/1 :8 15/1-14/1-12/1-14/1

tabstave notation=true
notes :q 5/1 7h9p7/1 10/1 12b14b12b10/1 | :h 5/5 :q 4/5 5/5 |
text :h, 9, 1, Bendy Time!

tabstave notation=true
notes :q 5/1 7s9/1 10/1 12/1 | :h 5/5 :q 4/5 5/5 |
text :h, 9, 1, With slide
            `}
            width={600}
          />
        </section>
        
        <section className="mt-8">
          <h2>Chords and Arpeggios</h2>
          
          <VexTabRenderer 
            vextab={`
options space=20 font-size=14

tabstave notation=true key=A time=4/4
notes :q (0/6.2/5.2/4.1/3.0/2.0/1) $Am$ :8 0/1-0/2 0/3-1/3 2/4-2/5 3/6-0/6 |
notes :q (3/6.2/5.0/4.0/3.0/2.0/1) $C$ :8 0/1-0/2 0/3-0/4 0/5-2/5 3/6-0/6 |
notes :q (0/6.0/5.2/4.2/3.3/2.1/1) $G$ :8 1/1-3/2 2/3-2/4 0/5-0/6
            `}
            width={600}
          />
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
