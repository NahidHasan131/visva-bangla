import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import Pagination from './Pagination';
import { useSearchParams } from 'react-router-dom';

const PER_PAGE = 6;

// extract YouTube ID from various URL formats
const getYoutubeId = (url) => {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&\s]+)/);
  return match ? match[1] : null;
};

// normalize both local and API video shapes
const normalize = (v) => ({
  id:          v.id || v._id,
  title:       v.title,
  desc:        v.desc || v.description || '',
  youtubeId:   v.youtubeId || getYoutubeId(v.videoUrl),
  videoUrl:    v.videoUrl || null,
  thumbnail:   v.thumbnail || null,
  instructor:  v.instructor || null,
});

const VideoGrid = ({ videos: rawVideos }) => {
  const [searchParams] = useSearchParams();
  const [activeVideo, setActiveVideo] = useState(null);
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);

  const videos = rawVideos.map(normalize);
  const totalPages = Math.ceil(videos.length / PER_PAGE);
  const paged = videos.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const getThumbnail = (v) => {
    if (v.thumbnail) return v.thumbnail;
    if (v.youtubeId) return `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`;
    return null;
  };

  const getEmbedUrl = (v) => {
    if (v.youtubeId) return `https://www.youtube.com/embed/${v.youtubeId}?autoplay=1`;
    if (v.videoUrl)  return v.videoUrl;
    return null;
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paged.map(video => {
          const thumb = getThumbnail(video);
          const embedUrl = getEmbedUrl(video);
          return (
            <div key={video.id} className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="relative aspect-video bg-black">
                {activeVideo === video.id && embedUrl ? (
                  <iframe src={embedUrl} title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen className="w-full h-full" />
                ) : (
                  <>
                    {thumb
                      ? <img src={thumb} alt={video.title} className="w-full h-full object-cover" />
                      : <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500 text-sm">No preview</div>
                    }
                    <button onClick={() => setActiveVideo(video.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-200">
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                        <FaPlay size={18} className="text-[#62826B] ml-1" />
                      </div>
                    </button>
                  </>
                )}
              </div>
              <div className="flex flex-col gap-2 p-5 flex-1">
                <h3 className="font-bold text-[#11141B] leading-snug">{video.title}</h3>
                {video.desc && <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{video.desc}</p>}
                {video.instructor && (
                  <p className="text-xs text-gray-400 mt-auto pt-3 border-t border-gray-100">{video.instructor}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <Pagination page={page} totalPages={totalPages} total={videos.length} label="videos" limit={PER_PAGE} onPageChange={setPage} />
    </div>
  );
};

export default VideoGrid;
