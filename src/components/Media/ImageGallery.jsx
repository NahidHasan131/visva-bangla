import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { MdLocationOn, MdCalendarToday, MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import Pagination from './Pagination';

const PER_PAGE = 12;

const normalize = (img) => ({
  id:       img.id || img._id,
  src:      img.src || img.imageUrl,
  title:    img.title,
  location: img.location || null,
  date:     img.date || (img.createdAt ? new Date(img.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : null),
  tag:      img.tag || null,
});

const ImageGallery = ({ images: rawImages = [], tags }) => {
  const [activeTag, setActiveTag] = useState('All');
  const [page, setPage] = useState(1);
  const [lightbox, setLightbox] = useState(null);

  const images = rawImages.map(normalize);
  const filtered = (!tags || activeTag === 'All') ? images : images.filter(img => img.tag === activeTag);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleTagChange = (tag) => { setActiveTag(tag); setPage(1); };
  const closeLightbox = () => setLightbox(null);
  const prevImg = () => setLightbox(i => (i - 1 + filtered.length) % filtered.length);
  const nextImg = () => setLightbox(i => (i + 1) % filtered.length);

  React.useEffect(() => {
    const handler = (e) => {
      if (lightbox === null) return;
      if (e.key === 'ArrowLeft') prevImg();
      if (e.key === 'ArrowRight') nextImg();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox]);

  const activeImg = lightbox !== null ? filtered[lightbox] : null;

  return (
    <div>
      {/* Tag filter — only show if tags provided */}
      {tags && tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-10">
        {tags.map(tag => (
          <button key={tag} onClick={() => handleTagChange(tag)}
            className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: activeTag === tag ? '#62826B' : 'white',
              color: activeTag === tag ? '#FFEFC5' : '#11141B',
              borderColor: activeTag === tag ? '#62826B' : '#e5e7eb',
            }}>
            {tag}
          </button>
        ))}
      </div>
      )}

      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {paged.map((img) => {
          const globalIndex = filtered.indexOf(img);
          return (
            <div key={img.id} onClick={() => setLightbox(globalIndex)}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer">
              <img src={img.src} alt={img.title} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#11141B]/0 group-hover:bg-[#11141B]/50 transition-all duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
                <span className="self-start px-2 py-0.5 rounded-full bg-[#62826B] text-[#FFEFC5] text-xs font-medium mb-2">{img.tag}</span>
                <p className="text-white font-semibold text-sm leading-snug">{img.title}</p>
                <p className="text-gray-300 text-xs mt-1 flex items-center gap-1"><MdLocationOn size={12} /> {img.location}</p>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && <div className="text-center py-20 text-gray-400">No images found.</div>}

      <Pagination page={page} totalPages={totalPages} total={filtered.length} label="photos" onPageChange={setPage} />

      {/* Lightbox */}
      {activeImg && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}>
          <button onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <IoClose size={20} />
          </button>
          <button onClick={prevImg}
            className="absolute left-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <MdArrowBackIos size={16} />
          </button>
          <div className="flex flex-col lg:flex-row gap-6 max-w-5xl w-full max-h-[90vh]">
            <img src={activeImg.src} alt={activeImg.title} className="lg:flex-1 max-h-[70vh] lg:max-h-[85vh] object-contain rounded-2xl" />
            <div className="lg:w-64 flex flex-col gap-4 text-white shrink-0 justify-center">
              <span className="self-start px-3 py-1 rounded-full bg-[#62826B] text-[#FFEFC5] text-xs font-medium">{activeImg.tag}</span>
              <h3 className="text-xl font-bold">{activeImg.title}</h3>
              <div className="flex flex-col gap-3 text-sm text-gray-300">
                <div className="flex items-center gap-2"><MdLocationOn size={16} className="text-[#62826B] shrink-0" />{activeImg.location}</div>
                <div className="flex items-center gap-2"><MdCalendarToday size={16} className="text-[#62826B] shrink-0" />{activeImg.date}</div>
              </div>
              <p className="text-xs text-gray-400 mt-2">{lightbox + 1} / {filtered.length}</p>
            </div>
          </div>
          <button onClick={nextImg}
            className="absolute right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <MdArrowForwardIos size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
