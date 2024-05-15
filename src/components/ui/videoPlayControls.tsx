import PlayButton from "../../../public/play.svg"
import PauseButton from "../../../public/pause.svg"
import Image from "next/image";

interface VideoPlayerControlsProps{
  progress: number;
  isPaused: boolean;
  onPlayPause: () => void;
  size?: number | undefined;
  width?: number | undefined;
}

const VideoPlayerControls: React.FC<VideoPlayerControlsProps> = ({
  progress,
  isPaused,
  onPlayPause,
  size = 48,
  width = 3,
}) => {
  const center = size / 2
  const radius = center - width
  const dashArray = 2 * Math.PI * radius
  const dashOffset = dashArray * (1 - progress)

  return(
    <div className="relative flex justify-center items-center">
      <svg width={size} height={size} style={{transform: "rotate(-90deg)"}}>
        <circle 
          cx={center} 
          cy={center} 
          r={radius} 
          fill="transparent" 
          stroke="#FF7205" 
          strokeWidth={width}
        />
        <circle 
          cx={center} 
          cy={center} 
          r={radius} 
          fill="transparent" 
          stroke="#FFA122" 
          strokeWidth={width} 
          strokeDasharray={dashArray} 
          strokeDashoffset={dashOffset} 
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute">
        <button 
          className="group cursor-pointer flex justify-center items-center" 
          onClick={onPlayPause}
          >
          <div className="fill-white group-hover:fill-[#aaa] transition-colors duration-200 ease-in-out">
            {isPaused ? <Image src={PauseButton} alt=""/> : <Image src={PlayButton} alt=""/>}
          </div>
        </button>
      </div>
    </div>
  )
}

export default VideoPlayerControls