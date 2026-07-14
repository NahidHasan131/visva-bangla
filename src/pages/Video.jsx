import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import VideoGrid from '../components/Media/VideoGrid';
import { useGetVideosQuery } from '../store/videoApi';
import { t } from 'i18next';

const Video = () => {
  const { data, isLoading } = useGetVideosQuery();
  const videos = data?.data || [];

  return (
    <div>
      <Breadcrumb />
      <div className="max-w-340 mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col gap-3 mb-10">
          <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">{t("video_classes")}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B]">{t("watch_practice")}</h2>
          <p className="text-gray-500 max-w-md">{t("video_classes_description")}</p>
        </div>
        {isLoading && <p className="text-center py-12 text-gray-400">{t("loading")}</p>}
        {!isLoading && videos.length === 0 && <p className="text-center py-12 text-gray-400">{t("no_videos_available")}</p>}
        {videos.length > 0 && <VideoGrid videos={videos} />}
      </div>
    </div>
  );
};

export default Video;
