import { useRef, useState, useCallback, useMemo, memo } from "react";

import PlayCircleIcon from "../assets/playCircle.svg?react";
import PauseCircleIcon from "../assets/pauseCircle.svg?react";

interface Props {
  scr: string;
}

export const AudioPlayer = memo(({ scr }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = useCallback(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prevState) => !prevState);
  }, [isPlaying]);

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  }, []);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  }, []);

  const handleVolumeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = parseFloat(e.target.value);
      setVolume(newVolume);
      if (audioRef.current) {
        audioRef.current.volume = newVolume;
      }
    },
    [],
  );

  const handleSeekChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newTime = parseFloat(e.target.value);
      if (audioRef.current) {
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    },
    [],
  );

  const formattedCurrentTime = useMemo(() => {
    return new Date(currentTime * 1000).toISOString().slice(14, 19);
  }, [currentTime]);

  const formattedDuration = useMemo(() => {
    return new Date(duration * 1000).toISOString().slice(14, 19);
  }, [duration]);

  return (
    <div>
      <div onClick={togglePlayPause}>
        {isPlaying ? <PlayCircleIcon /> : <PauseCircleIcon />}
      </div>
      <span>{formattedCurrentTime}</span>
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeekChange}
      />
      <span>{formattedDuration}</span>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
      <audio
        ref={audioRef}
        src={scr}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </div>
  );
});

AudioPlayer.displayName = "AudioPlayer";
