import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const VideoPlayer = ({ src }) => {
  return (
    <Card className="w-full max-w-md h-fit self-start border border-gray-300">
      <CardContent className="p-2">
        <video 
          controls 
          className="w-full aspect-video rounded-lg"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </CardContent>
    </Card>
  );
};

export default VideoPlayer;
