// Category root page data loader (theory, practice landing pages)

import theoryRootData from '@/data/category-roots/theory-root.json';
import practiceRootData from '@/data/category-roots/practice-root.json';

export interface CategoryRootData {
  pageTitle: string;
  subtitle: string;
  heroIcon: string;
  heroDescription: string;
  heroGradient: string;
  backLink: { href: string; label: string };
  philosophySection: {
    title: string;
    items: { title: string; description: string; icon: string; color: string }[];
  };
  learningPath?: {
    title: string;
    steps: { title: string; description: string; color?: string }[];
  };
  practiceStructure?: {
    title: string;
    phases: { phase: string; duration: string; description: string; color: string }[];
    tip?: string;
  };
  topicCards: {
    sectionTitle: string;
    items: {
      title: string;
      href: string;
      icon: string;
      description: string;
      color: string;
      iconColor: string;
      concepts: string[];
      step?: number;
    }[];
  };
  additionalSections?: {
    title: string;
    columns: {
      title: string;
      text?: string;
      items?: string[];
      cards?: { title: string; text: string; bgColor: string; borderColor: string; titleColor: string; textColor: string }[];
    }[];
  }[];
  practiceTools?: {
    title: string;
    items: { title: string; description: string; icon: string; tips: string[] }[];
  };
  gettingStarted: {
    title: string;
    description: string;
    links: { href: string; label: string; subtitle?: string; icon?: string; color: string; hoverColor?: string; textColor?: string }[];
  };
}

const dataMap: Record<string, unknown> = {
  'theory': theoryRootData,
  'practice': practiceRootData,
};

export function getCategoryRootData(category: string): CategoryRootData {
  const data = dataMap[category];
  if (!data) throw new Error(`Category root data not found: ${category}`);
  return data as unknown as CategoryRootData;
}
