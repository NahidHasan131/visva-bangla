import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { NavLink } from 'react-router-dom';
import { IoTimeOutline } from 'react-icons/io5';
import { PiStackLight } from 'react-icons/pi';
import AudioPlayer from '../components/Media/AudioPlayer';
import VideoGrid from '../components/Media/VideoGrid';
import ImageGallery from '../components/Media/ImageGallery';
import { useGetAudiosQuery } from '../store/audioApi';
import { useGetVideosQuery } from '../store/videoApi';
import { useGetGalleryQuery } from '../store/galleryApi';

import morningYoga from '../assets/morningYoga.jpg';
import meditation from '../assets/meditation.jpg';
import powerYoga from '../assets/powerYoga.jpg';

const classes = [
  { img: morningYoga, level: 'Beginner',     duration: '30 min', title: 'Morning Yoga Flow',       desc: 'Consectetur eu ultrices viverra est aliquet pellentesque potenti.', path: '/media/video' },
  { img: meditation,  level: 'Intermediate', duration: '20 min', title: 'Meditation Stress Relief', desc: 'Consectetur eu ultrices viverra est aliquet pellentesque potenti.', path: '/media/video' },
  { img: powerYoga,   level: 'Advanced',     duration: '45 min', title: 'Power Yoga for Strength',  desc: 'Consectetur eu ultrices viverra est aliquet pellentesque potenti.', path: '/media/audio' },
];

const tabs = ['Classes', 'Videos', 'Audio', 'Gallery'];

const Media = () => {
  const [activeTab, setActiveTab] = useState('Classes');

  const { data: audioData, isLoading: audioLoading } = useGetAudiosQuery();
  const { data: videoData, isLoading: videoLoading } = useGetVideosQuery();
  const { data: galleryData, isLoading: galleryLoading } = useGetGalleryQuery();

  const tracks  = audioData?.data   || [];
  const videos  = videoData?.data   || [];
  const galleryImages = galleryData?.data || [];

  return (
    <div>
      <Breadcrumb />

      <div className="max-w-340 mx-auto px-6 lg:px-12 py-16 lg:py-24">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="flex flex-col gap-3">
            <span className="self-start px-4 py-1.5 rounded-full border border-gray-300 text-gray-800 text-sm">Media</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B]">Explore All Content</h2>
            <p className="text-gray-500 max-w-md">Classes, videos, audio and gallery — everything in one place.</p>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 bg-[#F0F7F2] p-1.5 rounded-full">
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: activeTab === tab ? '#62826B' : 'transparent',
                  color: activeTab === tab ? '#FFEFC5' : '#11141B',
                }}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Classes tab */}
        {activeTab === 'Classes' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classes.map(cls => (
              <div key={cls.title} className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
                <img src={cls.img} alt={cls.title} className="w-full h-52 object-cover" />
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-center gap-4 text-sm font-semibold text-[#62826B]/70">
                    <span className="flex items-center gap-1"><PiStackLight size={16} /> {cls.level}</span>
                    <span className="flex items-center gap-1"><IoTimeOutline size={16} /> {cls.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#11141B]">{cls.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{cls.desc}</p>
                  <NavLink to={cls.path} className="text-center py-2.5 rounded-full border border-gray-200 text-sm font-medium text-[#62826B] hover:bg-[#62826B] hover:text-[#FFEFC5] transition-all duration-300">
                    Start Class
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Videos'  && (
          videoLoading
            ? <p className="text-center py-12 text-gray-400">Loading...</p>
            : <VideoGrid videos={videos} />
        )}
        {activeTab === 'Audio'   && (
          audioLoading
            ? <p className="text-center py-12 text-gray-400">Loading...</p>
            : tracks.length > 0 ? <AudioPlayer tracks={tracks} /> : <p className="text-center py-12 text-gray-400">No audio available.</p>
        )}
        {activeTab === 'Gallery' && (
          galleryLoading
            ? <p className="text-center py-12 text-gray-400">Loading...</p>
            : <ImageGallery images={galleryImages} />
        )}

      </div>
    </div>
  );
};

export default Media;
