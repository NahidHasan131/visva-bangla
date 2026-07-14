import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ImageGallery from '../components/Media/ImageGallery';
import { useGetGalleryQuery } from '../store/galleryApi';
import { useTranslation } from 'react-i18next';


const Gallery = () => {
  const { data, isLoading } = useGetGalleryQuery();
  const images = data?.data || [];
  const {t} = useTranslation();

  return (
    <div>
      <Breadcrumb />
      <div className="max-w-340 mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col gap-3 mb-10">
          <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest">{t("gallery")}</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B]">{t("our_moments")}</h2>
          <p className="text-gray-500 max-w-md">{t("gallery_description")}</p>
        </div>
        {isLoading && <p className="text-center py-12 text-gray-400">{t("loading")}</p>}
        {!isLoading && images.length === 0 && <p className="text-center py-12 text-gray-400">{t("no_images_found")}</p>}
        {images.length > 0 && <ImageGallery images={images} />}
      </div>
    </div>
  );
};

export default Gallery;
