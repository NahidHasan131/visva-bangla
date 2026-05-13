import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { NavLink } from 'react-router-dom';
import AudioPlayer from '../components/Media/AudioPlayer';
import VideoGrid from '../components/Media/VideoGrid';
import ImageGallery from '../components/Media/ImageGallery';
import ClassCard from '../components/FeaturedClasses/ClassCard';
import { classesData } from '../data/classesData';
import { useGetAudiosQuery } from '../store/audioApi';
import { useGetVideosQuery } from '../store/videoApi';
import { useGetGalleryQuery } from '../store/galleryApi';

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {classesData.map((cls, i) => (
              <ClassCard key={i} cls={cls} variant="light" />
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
