import { GiLotus, GiMeditation } from 'react-icons/gi';
import { MdSelfImprovement } from 'react-icons/md';
import { PiHandsPrayingLight } from 'react-icons/pi';
import morningYoga   from '../assets/feature-classes/meditation.jpg';
import meditation    from '../assets/feature-classes/yoga.jpg';
import powerYoga     from '../assets/feature-classes/yoga2.jpg';
import meditationImg from '../assets/feature-classes/meditation2.jpg';

export const classesData = [
  {
    img: morningYoga,
    badgeColor: 'bg-emerald-500',
    icon: <GiLotus size={16} />,
    participants: `150`,
    title: 'morning_yoga_flow',
    desc: 'morning_yoga_flow_description',
    path: '/media/video',
    type: 'yoga',
  },
  {
    img: meditation,
    badgeColor: 'bg-primary',
    icon: <GiMeditation size={16} />,
    participants: '200',
    title: 'guided_meditation',
    desc: 'guided_meditation_description',
    path: '/media/audio',
    type: 'meditation',
  },
  {
    img: powerYoga,
    badgeColor: 'bg-secondary',
    icon: <MdSelfImprovement size={16} />,
    participants: '120',
    title: 'power_yoga_strength',
    desc: 'power_yoga_strength_description',
    path: '/media/video',
    type: 'yoga',
  },
  {
    img: meditationImg,
    badgeColor: 'bg-violet-500',
    icon: <PiHandsPrayingLight size={16} />,
    participants: '180',
    title: 'sufi_spiritual_meditation',
    desc: 'sufi_spiritual_meditation_description',
    path: '/media/audio',
    type: 'spiritual',
  },
];
