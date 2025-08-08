import Image from "next/image";
import { useState } from "react";
import { FaYoutube } from 'react-icons/fa'
const LazyYouTubeEmbed = ({ videoId, videoThumbnail }: { videoId: string, videoThumbnail: string }) => {
  const [isIframeLoaded, setIframeLoaded] = useState(false);

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
  
  return (
    <div className="aspect-video relative cursor-pointer rounded-xl shadow-lg overflow-hidden">
      {!isIframeLoaded ? (
        <div onClick={() => setIframeLoaded(true)} className="w-full h-full">
          <Image width={350} height={196} src={videoThumbnail} loading="lazy" alt="YouTube thumbnail" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-red-500 text-7xl"><FaYoutube /></span>
          </div>
        </div>
      ) : (
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyYouTubeEmbed;
