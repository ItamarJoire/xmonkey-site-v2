
export function VideoPlay(){
  return(
    <video className="w-full h-36 absolute inset-0 z-50 rounded-xl" autoPlay>
      <source src="/video.mp4" />
    </video>
  )
}