import { useState, useEffect } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Go to top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-secondary text-white flex items-center justify-center shadow-[0_4px_20px_rgba(6,164,167,0.4)] hover:bg-secondary/90 hover:-translate-y-1 transition-all duration-300"
    >
      <MdKeyboardArrowUp size={22} />
    </button>
  );
};

export default GoToTop;
