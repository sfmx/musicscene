"use client";

import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getScaleData, ScaleData } from '@/lib/scaleData';
import ScaleInfoSection from './ScaleInfoSection';
import ScaleTheorySection from './ScaleTheorySection';
import ScaleFretboardSection from './ScaleFretboardSection';
import ScaleHarmonicSection from './ScaleHarmonicSection';
import ScaleGenreSection from './ScaleGenreSection';
import ScaleSongsSection from './ScaleSongsSection';
import ScalePracticeSection from './ScalePracticeSection';
import ScaleRelatedSection from './ScaleRelatedSection';
import ScaleLearningPathSection from './ScaleLearningPathSection';
import Link from 'next/link';

interface ScaleAnalysisPageTemplateProps {
  scaleSlug: string;
  displayName?: string;
}

export default function ScaleAnalysisPageTemplate({ 
  scaleSlug, 
  displayName 
}: ScaleAnalysisPageTemplateProps) {
  const [scaleData, setScaleData] = useState<ScaleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadScaleData() {
      try {
        setLoading(true);
        setError(null);
        const data = await getScaleData(scaleSlug);
        if (!data) {
          setError(`Could not find scale data for "${scaleSlug}"`);
        } else {
          setScaleData(data);
        }
      } catch (err) {
        setError(`Error loading scale data: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    }

    loadScaleData();
  }, [scaleSlug]);

  if (loading) {
    return (
      <Layout>
        <Header
          title="Loading Scale..."
          subtitle="Please wait while we load the scale data"
        />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading Scale Data</h1>
            <p className="text-gray-600">
              Loading {displayName || scaleSlug} scale information...
            </p>
          </div>
        </main>
        <Footer />
      </Layout>
    );
  }

  if (error || !scaleData) {
    return (
      <Layout>
        <Header
          title="Scale Not Found"
          subtitle={error || `Could not find scale data for "${scaleSlug}"`}
        />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Scale Not Found</h1>
            <p className="text-gray-600 mb-8">
              {error || `The scale "${scaleSlug}" could not be found in our database.`}
            </p>
            <Link 
              href="/lessons/theory/scales" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span className="mr-2">←</span>
              Back to Scale Theory
            </Link>
          </div>
        </main>
        <Footer />
      </Layout>
    );
  }

  const title = displayName || scaleData.scaleInfo.name;
  const subtitle = `${scaleData.scaleInfo.character} - ${scaleData.scaleInfo.intervalPattern} pattern`;

  return (
    <Layout>
      <Header
        title={title}
        subtitle={subtitle}
      />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href="/lessons/theory/scales" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-2">←</span>
            Back to Scale Theory
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-xl p-8 mb-12">
          <h1 className="text-3xl font-bold mb-4">{scaleData.scaleInfo.name}</h1>
          <p className="text-xl opacity-90 mb-4">
            {scaleData.scaleInfo.character} scale with {scaleData.scaleInfo.noteCount} notes. 
            This scale creates {scaleData.scaleInfo.mood.join(', ')} musical expressions.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded">{scaleData.scaleInfo.intervalPattern}</span>
            <span className="bg-white/20 px-3 py-1 rounded">{scaleData.scaleInfo.noteCount} Notes</span>
            <span className="bg-white/20 px-3 py-1 rounded">{scaleData.scaleInfo.character}</span>
            <span className="bg-white/20 px-3 py-1 rounded">{scaleData.theory.mode}</span>
          </div>
        </div>

        {/* Scale Information */}
        <ScaleInfoSection scaleData={scaleData} />

        {/* Theory Fundamentals */}
        <ScaleTheorySection scaleData={scaleData} />

        {/* Guitar Fretboard */}
        <ScaleFretboardSection scaleData={scaleData} />

        {/* Harmonic Applications */}
        <ScaleHarmonicSection scaleData={scaleData} />

        {/* Genre Applications */}
        <ScaleGenreSection scaleData={scaleData} />

        {/* Famous Songs */}
        <ScaleSongsSection scaleData={scaleData} />

        {/* Practice Exercises */}
        <ScalePracticeSection scaleData={scaleData} />

        {/* Related Scales */}
        <ScaleRelatedSection scaleData={scaleData} />

        {/* Learning Path */}
        <ScaleLearningPathSection scaleData={scaleData} />
      </main>
      
      <Footer />
    </Layout>
  );
}