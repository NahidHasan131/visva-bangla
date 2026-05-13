import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import ImageGallery from '../components/Media/ImageGallery';
import { useGetGalleryQuery } from '../store/galleryApi';

const Gallery = () => {
  const { data, isLoading } = useGetGalleryQuery();
  const images = data?.data || [];

  return (
    <div>
      <Breadcrumb />
      <div className="max-w-340 mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="flex flex-col gap-3 mb-10">
          <span className="self-start px-4 py-1.5 rounded-full border border-gray-300 text-gray-800 text-sm">Gallery</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B]">Our Moments</h2>
          <p className="text-gray-500 max-w-md">A visual journey through our classes, retreats, workshops and community events.</p>
        </div>
        {isLoading && <p className="text-center py-12 text-gray-400">Loading...</p>}
        {!isLoading && images.length === 0 && <p className="text-center py-12 text-gray-400">No images available.</p>}
        {images.length > 0 && <ImageGallery images={images} />}
      </div>
    </div>
  );
};

export default Gallery;
