import React from 'react'

const VideoPage = () => {
  return (
    <div className="w-[calc(100vw)] bg-pink-200 flex flex-col p-3">
        <h1 className="text-black text-2xl font-bold mb-4">Topic Name</h1>

        {/* Slides and Video Frames */}

        <div className='flex flex-col bg-yellow-200 p-2 rounded-sm w-max'>
            <h1 className="text-black text-2xl font-bold mb-4">Slides</h1>

            <div className='flex gap-2'>

                <video controls width="600">
                    <source src="/sample-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <video controls width="ascpect-square" >
                    <source src="/sample-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>

        </div>


    </div>
  )
}

export default VideoPage

