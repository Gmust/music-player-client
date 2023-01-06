import { MdLibraryMusic, MdMusicNote } from 'react-icons/md';
import { IRoutes } from './models';


export const routes: IRoutes[] = [
  {
    href: '/tracks',
    label: 'Tracks',
    icon: <MdLibraryMusic size={20} />
  },
  {
    href: '/albums',
    label: 'Albums',
    icon: <MdMusicNote size={20} />
  }
];