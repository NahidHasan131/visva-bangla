import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import AudioPlayer from '../components/Media/AudioPlayer';
import { useGetAudiosQuery } from '../store/audioApi';
import { useTranslation } from 'react-i18next';

const Audio = () => {
  const { data, isLoading } = useGetAudiosQuery();
  const tracks = data?.data || [];
  const {t} = useTranslation();

  return (
    <div>
      <Breadcrumb />
      <div className="max-w-340 mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col gap-3 mb-12">
          <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">{t("audio_classes")}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B]">{t("guided_meditation_sessions")}</h2>
          <p className="text-gray-500 max-w-md">{t("audio_classes_description")}</p>
        </div>
        {isLoading && <p className="text-center py-12 text-gray-400">{t("loading")}</p>}
        {!isLoading && tracks.length === 0 && <p className="text-center py-12 text-gray-400">{t("no_audio_available")}</p>}
        {tracks.length > 0 && <AudioPlayer tracks={tracks} />}
      </div>
    </div>
  );
};

export default Audio;
