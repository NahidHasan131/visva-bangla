import React, { useState } from 'react';
import { MdImage, MdLink } from 'react-icons/md';

const ImageInput = ({ value, onChange, error }) => {
  const [mode, setMode] = useState('url'); // 'url' | 'file'

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) onChange(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-col gap-2">
      {/* Toggle */}
      <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-xl self-start">
        <button type="button" onClick={() => setMode('url')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${mode === 'url' ? 'bg-white text-[#62826B] shadow-sm' : 'text-gray-500'}`}>
          <MdLink size={14} /> URL
        </button>
        <button type="button" onClick={() => setMode('file')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${mode === 'file' ? 'bg-white text-[#62826B] shadow-sm' : 'text-gray-500'}`}>
          <MdImage size={14} /> Upload
        </button>
      </div>

      {/* URL input */}
      {mode === 'url' && (
        <input
          type="url"
          value={value || ''}
          onChange={e => onChange(e.target.value)}
          placeholder="https://example.com/image.jpg"
          className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm outline-none focus:border-[#62826B] transition-colors"
        />
      )}

      {/* File upload */}
      {mode === 'file' && (
        <label className="cursor-pointer">
          <div className={`w-full h-36 rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-2 transition-colors ${value ? 'border-[#62826B]' : 'border-gray-200 hover:border-[#62826B]'}`}>
            {value ? (
              <img src={value} alt="preview" className="w-full h-full object-cover rounded-xl" />
            ) : (
              <>
                <MdImage size={26} className="text-gray-300" />
                <p className="text-sm text-gray-400">Click to upload</p>
                <p className="text-xs text-gray-300">PNG, JPG up to 5MB</p>
              </>
            )}
          </div>
          <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
        </label>
      )}

      {/* Preview for URL mode */}
      {mode === 'url' && value && (
        <img src={value} alt="preview" className="w-full h-36 object-cover rounded-xl border border-gray-100" />
      )}

      {value && (
        <button type="button" onClick={() => onChange('')}
          className="self-start text-xs text-red-400 hover:text-red-600 transition-colors">
          Remove image
        </button>
      )}

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default ImageInput;
