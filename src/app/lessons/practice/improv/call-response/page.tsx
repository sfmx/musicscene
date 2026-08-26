import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('call-response');

export default function CallResponsePage() {
  return <PracticeDetailPageTemplate practiceSlug="call-response" displayName="Call & Response" />;
}
