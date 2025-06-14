"use client";

import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Internal VexTab loader component just for this page
function VexTabLoader({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Function to load the VexTab script
    const loadVexTabScript = () => {
      // Check if already loaded
      if (typeof window !== 'undefined' && window.VexTabDiv) {
        setTimeout(() => {
          if (window.VexTabDiv.autoRender) {
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
      script.async = true;
      script.onload = () => {
        console.log('VexTab script loaded successfully');
        setTimeout(() => {
          if (window.VexTabDiv && window.VexTabDiv.autoRender) {
            window.VexTabDiv.autoRender();
          }
        }, 0);
      };
      document.head.appendChild(script);
    };
    
    loadVexTabScript();
  }, []);

  return children;
}

export default function GuitarTechniquesPage() {
  return (
    <Layout>
      <Header
        title="Guitar Techniques"
        subtitle="Learn various guitar techniques with interactive notation"
      />
      <main className="prose mx-auto px-4 py-8 max-w-4xl">
        <h1>Guitar Techniques</h1>
        
        <p>
          This page demonstrates various guitar techniques with interactive VexTab notation.
          You can see both the notation and learn the finger positioning for each technique.
        </p>
        
        <section className="mt-8">
          <h2>Hammer-ons and Pull-offs</h2>
          
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">Basic Hammer-on Exercise</h3>
            <p className="mt-2 text-sm text-gray-600">
              Practice hammer-ons using your index and ring fingers. Focus on clean articulation.
            </p>
              <VexTabLoader>
              <div
                dangerouslySetInnerHTML={{
                  __html: `<div class='vex-tabdiv' width='600' scale='1.0'>
options space=20 font-size=14

tabstave notation=true time=4/4 key=C
notes :q 5/3h7/3 5/3h7/3 | :q 5/3h7/3 5/3h7/3 |
notes :q 5/2h7/2 5/2h7/2 | :q 5/2h7/2 5/2h7/2
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