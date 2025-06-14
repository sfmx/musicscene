"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { ExerciseData } from '@/components/ExerciseRendererWithVexTabSyntax';
import VexTabScriptLoader from '@/components/VexTabScriptLoader';

// Dynamically import the new direct VexTab renderer
const ExerciseRenderer = dynamic(
  () => import('@/components/ExerciseRendererVexTabDirect'),
  { ssr: false }
);

interface ClientExerciseRendererProps {
  exercise: ExerciseData;
}

// This is a client component wrapper that will be used in the server component
export default function ClientExerciseRenderer({ exercise }: ClientExerciseRendererProps) {
  return (
    <VexTabScriptLoader>
      <ExerciseRenderer exercise={exercise} />
    </VexTabScriptLoader>
  );
}
