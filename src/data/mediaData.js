// ─── Audio Tracks ───────────────────────────────────────────────
import track1 from '../assets/music/Late-at-Night.mp3';
import track2 from '../assets/music/Magical-Moments.mp3';
import track3 from '../assets/music/Missing-You.mp3';
import track4 from '../assets/music/Sonder.mp3';
import track5 from '../assets/music/Tokyo-Music-Walker-Brunch-For-Two.mp3';
import track6 from '../assets/music/adriftamonginfinitestars.mp3';

export const tracks = [
  { id: 1, title: 'Late at Night',               category: 'Relaxation',   src: track1 },
  { id: 2, title: 'Magical Moments',             category: 'Meditation',   src: track2 },
  { id: 3, title: 'Missing You',                 category: 'Mindfulness',  src: track3 },
  { id: 4, title: 'Sonder',                      category: 'Deep Focus',   src: track4 },
  { id: 5, title: 'Brunch For Two',              category: 'Morning Yoga', src: track5 },
  { id: 6, title: 'Adrift Among Infinite Stars', category: 'Relaxation',   src: track6 },
];

// ─── Videos ─────────────────────────────────────────────────────
export const videos = [
  { id: 1, youtubeId: 'v7AYKMP6rOE', title: '20 Min Morning Yoga',              instructor: 'Yoga With Adriene', level: 'Beginner',     duration: '20 min', category: 'Morning Yoga', desc: 'A gentle morning flow to wake up your body and set a positive tone for the day.' },
  { id: 2, youtubeId: 'COp7BR_Dvps', title: 'Full Body Yoga for Flexibility',    instructor: 'Yoga With Adriene', level: 'All Levels',   duration: '30 min', category: 'Flexibility',  desc: 'Improve your flexibility and release tension with this full body yoga session.' },
  { id: 3, youtubeId: 'hJbRpHZr_d0', title: 'Yoga for Stress & Anxiety',         instructor: 'Yoga With Adriene', level: 'Beginner',     duration: '25 min', category: 'Relaxation',  desc: 'Calm your mind and release stress with this soothing yoga practice.' },
  { id: 4, youtubeId: 'oBu-pQG6sTY', title: '10 Min Meditation for Beginners',   instructor: 'Great Meditation',  level: 'Beginner',     duration: '10 min', category: 'Meditation',  desc: 'A simple guided meditation to help you find calm and clarity.' },
  { id: 5, youtubeId: 'j0uCrA7ePno', title: 'Yoga for Deep Sleep',               instructor: 'Yoga With Adriene', level: 'All Levels',   duration: '20 min', category: 'Sleep',       desc: 'Wind down before bed with this relaxing yoga sequence for better sleep.' },
  { id: 6, youtubeId: 'b1H3xO3x_Js', title: 'Power Yoga Full Body Workout',      instructor: 'Yoga With Bird',    level: 'Intermediate', duration: '35 min', category: 'Strength',    desc: 'Build strength and endurance with this energizing power yoga flow.' },
  { id: 7, youtubeId: 'inpok4MKVLM', title: 'Yin Yoga Full Class',               instructor: 'Yoga With Adriene', level: 'All Levels',   duration: '40 min', category: 'Relaxation',  desc: 'A slow-paced yin yoga class to release deep tension and restore the body.' },
  { id: 8, youtubeId: 'U9YKY7fdwyg', title: 'Guided Meditation for Inner Peace',  instructor: 'Sadhguru',          level: 'All Levels',   duration: '15 min', category: 'Meditation',  desc: 'A powerful guided meditation by Sadhguru to find stillness and inner clarity.' },
  { id: 9, youtubeId: 'ZToicYcHIOU', title: 'Surya Namaskar - Sun Salutation',   instructor: 'Yoga With Amit',    level: 'Beginner',     duration: '20 min', category: 'Morning Yoga',desc: 'Learn the traditional 12-step Surya Namaskar sequence step by step.' },
];

export const videoCategories = ['All', 'Morning Yoga', 'Flexibility', 'Relaxation', 'Meditation', 'Sleep', 'Strength'];

// ─── Gallery Images ──────────────────────────────────────────────
import img1  from '../assets/hero-big.jpg';
import img2  from '../assets/hero-medium.jpg';
import img3  from '../assets/hero-small.jpg';
import img4  from '../assets/morningYoga.jpg';
import img5  from '../assets/meditation.jpg';
import img6  from '../assets/powerYoga.jpg';
import img7  from '../assets/about-img.jpg';
import img8  from '../assets/why-choose-us.jpg';
import img9  from '../assets/why-choose-small.jpg';
import img10 from '../assets/testimonial-left-image.jpg';
import img11 from '../assets/event-left.jpg';
import img12 from '../assets/event-right.jpg';
import img13 from '../assets/blog-img-1.jpg';
import img14 from '../assets/blog-img-2.jpg';
import img15 from '../assets/blog-img-3.jpg';
import img16 from '../assets/trainer-1.jpg';
import img17 from '../assets/trainer-2.jpg';
import img18 from '../assets/trainer-3.jpg';

export const galleryImages = [
  { id: 1,  src: img1,  title: 'Morning Flow Session',        location: 'Dhaka Studio',         date: '12 Jan 2024', tag: 'Class' },
  { id: 2,  src: img2,  title: 'Group Meditation',            location: 'Gulshan Wellness Hub',  date: '18 Jan 2024', tag: 'Meditation' },
  { id: 3,  src: img3,  title: 'Beginner Yoga Workshop',      location: 'Banani Studio',         date: '25 Jan 2024', tag: 'Workshop' },
  { id: 4,  src: img4,  title: 'Sunrise Yoga Retreat',        location: "Cox's Bazar Beach",     date: '3 Feb 2024',  tag: 'Retreat' },
  { id: 5,  src: img5,  title: 'Mindfulness Meditation',      location: 'Dhaka Studio',          date: '10 Feb 2024', tag: 'Meditation' },
  { id: 6,  src: img6,  title: 'Power Yoga Challenge',        location: 'Uttara Fitness Center', date: '17 Feb 2024', tag: 'Class' },
  { id: 7,  src: img7,  title: 'Community Yoga Day',          location: 'Ramna Park, Dhaka',     date: '24 Feb 2024', tag: 'Event' },
  { id: 8,  src: img8,  title: 'Advanced Asana Practice',     location: 'Dhanmondi Studio',      date: '2 Mar 2024',  tag: 'Class' },
  { id: 9,  src: img9,  title: 'Flexibility Training',        location: 'Gulshan Wellness Hub',  date: '9 Mar 2024',  tag: 'Workshop' },
  { id: 10, src: img10, title: 'Yoga for Stress Relief',      location: 'Banani Studio',         date: '16 Mar 2024', tag: 'Class' },
  { id: 11, src: img11, title: 'Full Moon Yoga Retreat',      location: 'Sylhet Tea Garden',     date: '23 Mar 2024', tag: 'Retreat' },
  { id: 12, src: img12, title: 'Beginners Workshop',          location: 'Dhaka Studio',          date: '30 Mar 2024', tag: 'Workshop' },
  { id: 13, src: img13, title: 'Yoga Poses & Techniques',     location: 'Uttara Fitness Center', date: '6 Apr 2024',  tag: 'Class' },
  { id: 14, src: img14, title: 'Nutrition & Yoga Seminar',    location: 'Gulshan Wellness Hub',  date: '13 Apr 2024', tag: 'Event' },
  { id: 15, src: img15, title: 'Mindfulness Workshop',        location: 'Dhanmondi Studio',      date: '20 Apr 2024', tag: 'Workshop' },
  { id: 16, src: img16, title: "Emily's Hatha Yoga Class",    location: 'Dhaka Studio',          date: '27 Apr 2024', tag: 'Class' },
  { id: 17, src: img17, title: "Michael's Power Yoga",        location: 'Banani Studio',         date: '4 May 2024',  tag: 'Class' },
  { id: 18, src: img18, title: "Sarah's Meditation Session",  location: 'Gulshan Wellness Hub',  date: '11 May 2024', tag: 'Meditation' },
];

export const galleryTags = ['All', 'Class', 'Meditation', 'Workshop', 'Retreat', 'Event'];
