import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import VideoGrid from '../components/Media/VideoGrid';
import { useGetVideosQuery } from '../store/videoApi';

const Video = () => {
  const { data, isLoading } = useGetVideosQuery();
  const videos = data?.data || [];

  return (
    <div>
      <Breadcrumb />
      <div className="max-w-340 mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col gap-3 mb-10">
          <span className="self-start px-4 py-1.5 rounded-full border border-gray-300 text-gray-800 text-sm">Video Classes</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B]">Watch & Practice</h2>
          <p className="text-gray-500 max-w-md">Follow along with our expert-led video sessions for all levels and goals.</p>
        </div>
        {isLoading && <p className="text-center py-12 text-gray-400">Loading...</p>}
        {!isLoading && videos.length === 0 && <p className="text-center py-12 text-gray-400">No videos available.</p>}
        {videos.length > 0 && <VideoGrid videos={videos} />}
      </div>
    </div>
  );
};

export default Video;
