import React from 'react'

const VideoPage = () => {
  return (
    <div className="w-[calc(100vw)] bg-pink-200 flex flex-col justify-center items-center">
        <h1 className="text-black text-2xl font-bold mb-4">Topic Name</h1>

        {/* Slides and Video Frames */}

        <div className='flex justify-center items-center gap-2'>
            <video controls width="600">
                <source src="/sample-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <video controls width="600">
                <source src="/sample-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>


    </div>
  )
}

export default VideoPage

