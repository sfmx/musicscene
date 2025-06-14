"use client";

import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function VexTabSimpleTest() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  
  useEffect(() => {
    // Load VexTab script
    if (typeof window === 'undefined') return;
    
    console.log('Simple test page initialized');
    
    // Flag for SVG use
    window.VEXTAB_USE_SVG = true;
    
    // Load script
    const script = document.createElement('script');
    script.src = '/vextab-div.js';
    script.async = true;
    
    script.onload = () => {
      console.log('VexTab script loaded in simple test');
      setScriptLoaded(true);
      
      // Give it a moment to initialize
      setTimeout(() => {
        console.log('Running autoRender in simple test');
        if (window.VexTabDiv && window.VexTabDiv.autoRender) {
          window.VexTabDiv.autoRender();
        } else {
          console.error('VexTabDiv.autoRender not available');
        }
      }, 100);
    };
    
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  
  useEffect(() => {
    if (scriptLoaded) {
      setTimeout(() => {
        console.log('Trigger autoRender after state update');
        if (window.VexTabDiv && window.VexTabDiv.autoRender) {
          window.VexTabDiv.autoRender();
        }
      }, 100);
    }
  }, [scriptLoaded]);
  
  return (
    <Layout>
      <Header
        title="Simple VexTab Test"
        subtitle="Basic tablature rendering test"
      />
      <main className="prose mx-auto px-4 py-8 max-w-4xl">
        <h1>Simple VexTab Test</h1>
        
        <p>
          This page tests a very basic VexTab implementation with minimal VexTab syntax.
        </p>
        
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2>Basic Tab Example</h2>
          
          <div 
            className="vextab-container"
            dangerouslySetInnerHTML={{
              __html: `<div class="vex-tabdiv" width="500" scale="1.0">
options space=20

tabstave
notes 4/5 5/5 6/5 7/5
</div>`
            }}
          />
        </div>
        
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <h2>Another Example</h2>
          
          <div 
            className="vextab-container"
            dangerouslySetInnerHTML={{
              __html: `<div class="vex-tabdiv" width="500" scale="1.0">
options space=20

tabstave
notes 0/6 0/5 0/4 0/3 0/2 0/1
</div>`
            }}
          />
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
