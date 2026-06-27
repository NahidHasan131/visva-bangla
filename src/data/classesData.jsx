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
    participants: '150+ Participants',
    title: 'Morning Yoga Flow',
    desc: 'Start your day with a gentle yet energizing yoga sequence designed to awaken the body, improve flexibility, and cultivate mindful awareness.',
    path: '/media/video',
    type: 'Yoga',
  },
  {
    img: meditation,
    badgeColor: 'bg-primary',
    icon: <GiMeditation size={16} />,
    participants: '200+ Participants',
    title: 'Guided Meditation',
    desc: 'A structured meditation session rooted in universal humanitarian philosophy helping you release stress, find stillness, and reconnect with your inner self.',
    path: '/media/audio',
    type: 'Meditation',
  },
  {
    img: powerYoga,
    badgeColor: 'bg-secondary',
    icon: <MdSelfImprovement size={16} />,
    participants: '120+ Participants',
    title: 'Power Yoga & Strength',
    desc: 'Build physical strength and mental resilience through dynamic power yoga sequences guided by certified instructors for intermediate practitioners.',
    path: '/media/video',
    type: 'Yoga',
  },
  {
    img: meditationImg,
    badgeColor: 'bg-violet-500',
    icon: <PiHandsPrayingLight size={16} />,
    participants: '180+ Participants',
    title: 'Sufi Spiritual Meditation',
    desc: 'Inspired by centuries of Sufi wisdom, this free meditation program guides seekers toward self-purification, spiritual awareness, and inner liberation.',
    path: '/media/audio',
    type: 'Spiritual',
  },
];
