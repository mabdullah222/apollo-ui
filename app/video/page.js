import React from "react";
import VideoPlayer from "@/components/videoplayer";
import SlidesGenerator from "@/components/slides-generator";
import AskQuestion from "@/components/ask-question";

const VideoPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col p-6 mb-5">
      <h1 className="text-black text-2xl font-bold mb-6">Topic Name</h1>

      {/* Slides and Video Frames */}
      <div className="flex flex-col bg-white p-4 rounded-lg w-full min-h-3/4 border border-gray-300 flex-1">
        <h2 className="text-black text-xl font-bold mb-4">Slides</h2>
        <div className="flex gap-4 justify-center items-center w-full flex-1 min-h-0">
          <SlidesGenerator />
          <VideoPlayer src="/sample-video.mp4" />
        </div>
      </div>

      {/* Ask Question Section */}
      <AskQuestion />
    </div>
  );
};

export default VideoPage;
