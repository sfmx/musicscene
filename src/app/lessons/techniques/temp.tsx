"use client";

import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

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
            
            <VexTabScriptLoader>
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
            </VexTabScriptLoader>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}