import React, { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  RotateCcw,
} from "lucide-react";

const formatTime = (milliseconds) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const VideoPlayer = ({
  source,
  title,
  autoPlay = false,
  showControls = true,
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showUI, setShowUI] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    const updateProgress = () => {
      if (video) {
        setProgress(video.currentTime * 1000);
        setDuration(video.duration * 1000);
      }
    };

    const handleLoaded = () => {
      setDuration(video.duration * 1000);
      setIsLoading(false);
    };

    const handleError = () => {
      setError("Failed to load video.");
      setIsLoading(false);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("error", handleError);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!document.fullscreenElement) {
      video.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const retryLoad = () => {
    setError(null);
    setIsLoading(true);
    videoRef.current.load();
    if (autoPlay) videoRef.current.play();
  };

  const handleClick = () => {
    setShowUI(true);
    setTimeout(() => setShowUI(false), 3000);
  };

  return (
    <div
      className="relative bg-black w-full aspect-video"
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        className="w-full h-full"
        src={source}
        autoPlay={autoPlay}
        muted={isMuted}
        controls={false}
      />

      {isLoading && (
        <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center px-4">
          <p className="text-white text-center mb-4">Error: {error}</p>
          <button
            onClick={retryLoad}
            className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-md text-white"
          >
            <RotateCcw size={20} />
            Retry
          </button>
        </div>
      )}

      {showControls && showUI && !error && (
        <div className="absolute inset-0 bg-black/30 p-4 flex flex-col justify-between">
          {title && (
            <div className="text-white text-lg font-semibold drop-shadow-sm">
              {title}
            </div>
          )}

          <div className="flex justify-center items-center">
            <button onClick={togglePlay} className="p-2">
              {isPlaying ? (
                <Pause size={32} color="#FFFFFF" />
              ) : (
                <Play size={32} color="#FFFFFF" />
              )}
            </button>
          </div>

          <div className="flex justify-between items-center space-x-4">
            <div className="flex-1">
              <div className="w-full h-1 bg-white/30 rounded">
                <div
                  className="h-full bg-blue-600 rounded"
                  style={{
                    width: `${duration ? (progress / duration) * 100 : 0}%`,
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-white mt-1">
                <span>{formatTime(progress)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button onClick={toggleMute} className="p-2">
                {isMuted ? (
                  <VolumeX size={24} color="#FFFFFF" />
                ) : (
                  <Volume2 size={24} color="#FFFFFF" />
                )}
              </button>
              <button onClick={toggleFullscreen} className="p-2">
                {isFullscreen ? (
                  <Minimize2 size={24} color="#FFFFFF" />
                ) : (
                  <Maximize2 size={24} color="#FFFFFF" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
