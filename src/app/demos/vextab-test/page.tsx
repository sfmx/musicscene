"use client";

import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Internal VexTab loader component just for this page
function VexTabLoader({ children }: { children: React.ReactNode }) {  useEffect(() => {
    // Function to load the VexTab script
    const loadVexTabScript = () => {
      // Add debug logging
      console.log('VexTabLoader initialized');
      console.log('VexTabDiv available?', typeof window !== 'undefined' && !!window.VexTabDiv);
      
      // Check if already loaded
      if (typeof window !== 'undefined' && window.VexTabDiv) {
        console.log('VexTabDiv already available');
        setTimeout(() => {
          if (window.VexTabDiv.autoRender) {
            console.log('Running autoRender on already loaded VexTabDiv');
            window.VexTabDiv.autoRender();
          }
        }, 0);
        return;
      }

      // Add VEXTAB_USE_SVG flag first
      const svgConfig = document.createElement('script');
      svgConfig.textContent = 'VEXTAB_USE_SVG = true;';
      document.head.appendChild(svgConfig);
      
      // Load the actual script
      const script = document.createElement('script');
      script.src = '/vextab-div.js';
      script.async = true;      script.onload = () => {
        console.log('VexTab script loaded successfully');
        // Try multiple auto-renders with increasing delays
        setTimeout(() => {
          if (window.VexTabDiv && window.VexTabDiv.autoRender) {
            console.log('First autoRender attempt');
            window.VexTabDiv.autoRender();
          }
        }, 0);
        
        setTimeout(() => {
          if (window.VexTabDiv && window.VexTabDiv.autoRender) {
            console.log('Second autoRender attempt');
            window.VexTabDiv.autoRender();
          }
        }, 100);
        
        setTimeout(() => {
          if (window.VexTabDiv && window.VexTabDiv.autoRender) {
            console.log('Third autoRender attempt');
            window.VexTabDiv.autoRender();
          }
        }, 500);
      };
      document.head.appendChild(script);
    };
    
    loadVexTabScript();
  }, []);

  return children;
}

export default function VexTabTestPage() {
  return (
    <Layout>
      <Header
        title="VexTab Test Page"
        subtitle="Testing the self-contained VexTab approach"
      />
      <main className="prose mx-auto px-4 py-8 max-w-4xl">
        <h1>VexTab Test Examples</h1>
        
        <p>
          This page demonstrates a self-contained approach to VexTab notation rendering,
          where the script loading logic is contained within the page itself.
        </p>
        
        <section className="mt-8">
          <h2>Basic Scale Example</h2>
          
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">C Major Scale</h3>
            <p className="mt-2 text-sm text-gray-600">
              Basic C major scale notation and tablature.
            </p>            <VexTabLoader>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<div class='vex-tabdiv' width='600' scale='1.0'>
options space=20 font-size=14

tabstave notation=true
notes :q 5/3 7/3 5/2 7/2 | 5/3 7/3 5/2 7/2 |
</div>`
                }}
              />
            </VexTabLoader>
          </div>
        </section>

        <section className="mt-12">
          <h2>Chord Progression Example</h2>
          
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Common Chord Progression</h3>
            <p className="mt-2 text-sm text-gray-600">
              A simple I-IV-V-I chord progression in the key of G.
            </p>            <VexTabLoader>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<div class='vex-tabdiv' width='600' scale='1.0'>
options space=20 font-size=14

tabstave notation=true
notes :q (3/3.2/2.0/1) | (0/2.2/1.0/0) |
</div>`
                }}
              />
            </VexTabLoader>
          </div>
        </section>

        <section className="mt-12">
          <h2>Guitar Techniques Example</h2>
          
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Bends and Pull-offs</h3>
            <p className="mt-2 text-sm text-gray-600">
              Example showing bending and pull-off techniques.
            </p>            <VexTabLoader>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<div class='vex-tabdiv' width='600' scale='1.0'>
options space=20 font-size=14

tabstave notation=true
notes :q 7/4 9/4 7/3 9/3 |
</div>`
                }}
              />
            </VexTabLoader>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
