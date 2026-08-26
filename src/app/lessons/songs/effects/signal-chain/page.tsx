import { getSongLessonMetadata } from '@/lib/seo';
import SongLessonDetailPageTemplate from '@/components/SongLessons/SongLessonDetailPageTemplate';

export const metadata = getSongLessonMetadata('effects-signal-chain');

export default function SignalChainEffectsPage() {
  return <SongLessonDetailPageTemplate dataKey="effects-signal-chain" />;
}
