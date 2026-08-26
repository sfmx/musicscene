import { getPracticeMetadata } from '@/lib/seo';
import PracticeDetailPageTemplate from '@/components/PracticeAnalysis/PracticeDetailPageTemplate';

export const metadata = getPracticeMetadata('modal-improvisation');

export default function ModalImprovisationPage() {
  return <PracticeDetailPageTemplate practiceSlug="modal-improvisation" displayName="Modal Improvisation" />;
}
