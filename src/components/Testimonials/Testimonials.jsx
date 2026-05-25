import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import { MdOutlineRateReview } from 'react-icons/md';
import { GiLotus } from 'react-icons/gi';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { fadeIn, fadeUp, fadeLeft, fadeRight, viewport } from '../../lib/motion';
import 'swiper/css';
import 'swiper/css/pagination';

// ── seed reviews shown before any user submits ──
const SEED_REVIEWS = [
  {
    id: 'seed-1',
    name: 'Md. Rafiul Islam',
    role: 'Spiritual Seeker',
    text: 'The free meditation sessions have completely transformed my daily routine. I feel more at peace and focused than ever before. Truly grateful for this initiative.',
    stars: 5,
    date: '2025-03-12',
  },
  {
    id: 'seed-2',
    name: 'Sumaiya Akter',
    role: 'Student',
    text: 'I never thought I could access such deep spiritual knowledge for free. The weekly classes are enlightening and the teachers are incredibly knowledgeable and compassionate.',
    stars: 5,
    date: '2025-04-05',
  },
  {
    id: 'seed-3',
    name: 'Karim Hossain',
    role: 'Community Member',
    text: 'VisvaBangla Foundation is doing something truly unique. The non-communal approach to spiritual education is exactly what our society needs right now.',
    stars: 5,
    date: '2025-05-18',
  },
  {
    id: 'seed-4',
    name: 'Naznin  khanom',
    role: 'Homemaker',
    text: 'The Sufi philosophy programs have given me a new perspective on life. I attend every week and always leave feeling inspired and spiritually uplifted.',
    stars: 4,
    date: '2025-06-02',
  },
];

const STORAGE_KEY = 'vb_reviews';

const getReviews = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : SEED_REVIEWS;
  } catch {
    return SEED_REVIEWS;
  }
};

const saveReviews = (reviews) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
};

// ── Star picker ───
const StarPicker = ({ value, onChange }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((s) => (
      <button
        key={s}
        type="button"
        onClick={() => onChange(s)}
        className="transition-transform hover:scale-110"
        aria-label={`${s} star`}
      >
        <FaStar
          size={22}
          className={s <= value ? 'text-yellow-400' : 'text-gray-200'}
        />
      </button>
    ))}
  </div>
);

// ── Single review card ───
const ReviewCard = ({ review }) => (
  <div className="flex flex-col gap-4 bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] h-full">
    {/* Stars */}
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          size={14}
          className={i < review.stars ? 'text-yellow-400' : 'text-gray-200'}
        />
      ))}
    </div>

    {/* Text */}
    <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">
      "{review.text}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
      <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary font-bold text-sm shrink-0">
        {review.name.charAt(0).toUpperCase()}
      </div>
      <div>
        <p className="text-sm font-bold text-[#11141B] leading-none">{review.name}</p>
        <p className="text-xs text-gray-400 mt-0.5">{review.role}</p>
      </div>
      <span className="ml-auto text-xs text-gray-300">
        {new Date(review.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
      </span>
    </div>
  </div>
);

// ── Main component ───
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: '', role: '', text: '', stars: 5 });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setReviews(getReviews());
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim())        e.name = 'Name is required';
    if (!form.text.trim())        e.text = 'Review is required';
    if (form.text.trim().length < 20) e.text = 'Please write at least 20 characters';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSubmitting(true);
    setTimeout(() => {
      const newReview = {
        id: Date.now().toString(),
        name: form.name.trim(),
        role: form.role.trim() || 'Community Member',
        text: form.text.trim(),
        stars: form.stars,
        date: new Date().toISOString().split('T')[0],
      };
      const updated = [newReview, ...reviews];
      setReviews(updated);
      saveReviews(updated);
      setForm({ name: '', role: '', text: '', stars: 5 });
      setErrors({});
      setSubmitting(false);
      toast.success('Thank you for your review!');
    }, 600);
  };

  const avgRating = reviews.length
    ? (reviews.reduce((s, r) => s + r.stars, 0) / reviews.length).toFixed(1)
    : '5.0';

  return (
    <motion.section
      className="py-16 lg:py-24 bg-[#f7f8fa]"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <div className="max-w-340 mx-auto px-6 lg:px-12">

        {/* ── Header ── */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Community Reviews
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B]">
            What Our <span className="text-primary">Community Says</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md leading-relaxed">
            Real experiences from participants of our free meditation sessions, spiritual education programs, and weekly classes.
          </p>

          {/* Avg rating pill */}
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} size={13} className={i < Math.round(avgRating) ? 'text-yellow-400' : 'text-gray-200'} />
              ))}
            </div>
            <span className="text-sm font-bold text-[#11141B]">{avgRating}</span>
            <span className="text-xs text-gray-400">({reviews.length} reviews)</span>
          </div>
        </motion.div>

        {/* ── Slider ── */}
        <motion.div
          className="mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <style>{`
            .review-swiper .swiper-pagination-bullet { background: #06a4a7; opacity: 0.3; }
            .review-swiper .swiper-pagination-bullet-active { opacity: 1; width: 20px; border-radius: 4px; }
          `}</style>
          <Swiper
            className="review-swiper pb-10!"
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            loop={reviews.length > 3}
            speed={700}
            spaceBetween={20}
            breakpoints={{
              0:   { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024:{ slidesPerView: 3 },
            }}
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.id} className="h-auto">
                <ReviewCard review={r} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* ── Submit form ── */}
        <motion.div
          className="bg-white rounded-3xl border border-gray-100 shadow-[0_2px_24px_rgba(0,0,0,0.06)] overflow-hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          <div className="flex flex-col lg:flex-row">

            {/* Left — info panel */}
            <motion.div
              className="lg:w-2/5 bg-secondary p-8 lg:p-10 flex flex-col gap-6 justify-center"
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <MdOutlineRateReview size={24} className="text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-white">Share Your Experience</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Have you attended our free meditation sessions or spiritual education programs? We'd love to hear your thoughts.
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {['Free & open to all', 'Non-communal approach', 'Rooted in Sufi wisdom'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/80">
                    <GiLotus size={14} className="text-white/60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right — form */}
            <motion.div
              className="lg:w-3/5 p-8 lg:p-10"
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={viewport}
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#11141B] uppercase tracking-wide">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="e.g. Md. Rafiqul Islam"
                      className={`px-4 py-3 rounded-xl border text-sm outline-none transition-colors
                        ${errors.name ? 'border-primary bg-primary/5' : 'border-gray-200 focus:border-secondary'}`}
                    />
                    {errors.name && <p className="text-xs text-primary">{errors.name}</p>}
                  </div>

                  {/* Role */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#11141B] uppercase tracking-wide">
                      Your Role <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={form.role}
                      onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                      placeholder="e.g. Student, Seeker..."
                      className="px-4 py-3 rounded-xl border border-gray-200 focus:border-secondary text-sm outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#11141B] uppercase tracking-wide">
                    Your Rating <span className="text-primary">*</span>
                  </label>
                  <StarPicker value={form.stars} onChange={v => setForm(f => ({ ...f, stars: v }))} />
                </div>

                {/* Review text */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#11141B] uppercase tracking-wide">
                    Your Review <span className="text-primary">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={form.text}
                    onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
                    placeholder="Share your experience with our programs..."
                    className={`px-4 py-3 rounded-xl border text-sm outline-none transition-colors resize-none
                      ${errors.text ? 'border-primary bg-primary/5' : 'border-gray-200 focus:border-secondary'}`}
                  />
                  <div className="flex items-center justify-between">
                    {errors.text
                      ? <p className="text-xs text-primary">{errors.text}</p>
                      : <span />
                    }
                    <span className="text-xs text-gray-400">{form.text.length} chars</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="self-start px-8 py-3 rounded-full bg-secondary text-white text-sm font-semibold hover:bg-secondary/90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting...' : 'Submit Review'}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Testimonials;
