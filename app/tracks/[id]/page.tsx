import { Track } from '../../../components/track/Track';

export default function Page(params: any) {


  return <Track id={params.params.id} />;
}