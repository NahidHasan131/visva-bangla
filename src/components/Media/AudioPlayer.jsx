import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { MdSkipNext, MdSkipPrevious, MdMusicNote } from 'react-icons/md';
import { IoVolumeHighOutline, IoVolumeMuteOutline } from 'react-icons/io5';
import Pagination from './Pagination';
import { useSearchParams } from 'react-router-dom';

const TRACKS_PER_PAGE = 5;

const formatTime = (sec) => {
  if (!sec || isNaN(sec)) return '0:00';
  return `${Math.floor(sec / 60)}:${Math.floor(sec % 60).toString().padStart(2, '0')}`;
};

// normalize both local (src) and API (audioUrl) tracks
const normalize = (t) => ({
  id:        t.id || t._id,
  title:     t.title,
  category:  t.category || t.description || '',
  src:       t.src || t.audioUrl,
  thumbnail: t.thumbnail || null,
});

const AudioPlayer = ({ tracks: rawTracks }) => {
  const [searchParams] = useSearchParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const audioRef = useRef(null);

  const tracks = rawTracks.map(normalize);
  const totalPages = Math.ceil(tracks.length / TRACKS_PER_PAGE);
  const pagedTracks = tracks.slice((page - 1) * TRACKS_PER_PAGE, page * TRACKS_PER_PAGE);
  const current = tracks[currentIndex] || tracks[0];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) audioRef.current.play();
    }
  }, [currentIndex]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); }
    else { audioRef.current.play(); setIsPlaying(true); }
  };

  const playTrack = (index) => { setCurrentIndex(index); setIsPlaying(true); setProgress(0); };
  const prev = () => playTrack((currentIndex - 1 + tracks.length) % tracks.length);
  const next = () => playTrack((currentIndex + 1) % tracks.length);

  if (!current) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-8">

      {/* Track list */}
      <div className="flex-1 flex flex-col gap-3">
        {pagedTracks.map((track) => {
          const i = tracks.findIndex(t => t.id === track.id);
          const isActive = currentIndex === i;
          return (
            <div key={track.id} onClick={() => playTrack(i)}
              className={`flex items-center gap-4 p-3 rounded-2xl cursor-pointer transition-all duration-200 ${
                isActive ? 'bg-[#62826B]' : 'bg-[#F0F7F2] hover:bg-[#e6f2ea]'
              }`}>

              {/* Thumbnail or play icon */}
              <div className={`w-12 h-12 rounded-xl overflow-hidden shrink-0 flex items-center justify-center ${isActive ? 'ring-2 ring-white/30' : ''}`}>
                {track.thumbnail ? (
                  <img src={track.thumbnail} alt={track.title} className="w-full h-full object-cover" />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${isActive ? 'bg-white/20' : 'bg-white'}`}>
                    {isActive && isPlaying
                      ? <FaPause size={14} className="text-[#62826B]" />
                      : <FaPlay size={14} className={isActive ? 'text-white' : 'text-[#62826B]'} />}
                  </div>
                )}
              </div>

              {/* Play/pause overlay on thumbnail */}
              {track.thumbnail && (
                <div className="hidden" />
              )}

              <div className="flex-1 min-w-0">
                <p className={`font-semibold truncate ${isActive ? 'text-white' : 'text-[#11141B]'}`}>{track.title}</p>
                <p className={`text-xs mt-0.5 truncate ${isActive ? 'text-white/70' : 'text-gray-400'}`}>{track.category}</p>
              </div>

              <span className={`text-xs shrink-0 ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
                {isActive ? formatTime(duration) : '–'}
              </span>
            </div>
          );
        })}

        <Pagination page={page} totalPages={totalPages} total={tracks.length}
          label="tracks" limit={TRACKS_PER_PAGE} onPageChange={setPage} />
      </div>

      {/* Player */}
      <div className="lg:w-80 shrink-0">
        <div className="bg-[#11141B] rounded-3xl p-8 flex flex-col gap-6 sticky top-24">

          {/* Album art */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-[#62826B]/20 flex items-center justify-center">
              {current.thumbnail
                ? <img src={current.thumbnail} alt={current.title} className="w-full h-full object-cover" />
                : <MdMusicNote size={36} className="text-[#62826B]" />}
            </div>
            <h3 className="text-white font-bold text-base leading-snug">{current.title}</h3>
            {current.category && (
              <span className="text-xs text-gray-400 px-3 py-1 rounded-full bg-white/10">{current.category}</span>
            )}
          </div>

          {/* Progress */}
          <div className="flex flex-col gap-2">
            <input type="range" min={0} max={duration || 0} value={progress}
              onChange={e => { audioRef.current.currentTime = Number(e.target.value); setProgress(Number(e.target.value)); }}
              className="w-full accent-[#62826B] cursor-pointer" />
            <div className="flex justify-between text-xs text-gray-400">
              <span>{formatTime(progress)}</span><span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button onClick={prev} className="text-gray-400 hover:text-white transition-colors"><MdSkipPrevious size={28} /></button>
            <button onClick={togglePlay} className="w-14 h-14 rounded-full bg-[#62826B] flex items-center justify-center hover:bg-[#62826B]/80 transition-colors">
              {isPlaying ? <FaPause size={18} className="text-white" /> : <FaPlay size={18} className="text-white ml-1" />}
            </button>
            <button onClick={next} className="text-gray-400 hover:text-white transition-colors"><MdSkipNext size={28} /></button>
          </div>

          {/* Volume */}
          <div className="flex items-center gap-3">
            <button onClick={() => { const n = !muted; setMuted(n); audioRef.current.muted = n; }} className="text-gray-400 hover:text-white transition-colors shrink-0">
              {muted ? <IoVolumeMuteOutline size={20} /> : <IoVolumeHighOutline size={20} />}
            </button>
            <input type="range" min={0} max={1} step={0.05} value={muted ? 0 : volume}
              onChange={e => { setVolume(Number(e.target.value)); audioRef.current.volume = Number(e.target.value); setMuted(Number(e.target.value) === 0); }}
              className="flex-1 accent-[#62826B] cursor-pointer" />
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={current.src}
        onTimeUpdate={() => setProgress(audioRef.current?.currentTime || 0)}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
        onEnded={next} />
    </div>
  );
};

export default AudioPlayer;
