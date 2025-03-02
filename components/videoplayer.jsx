import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const VideoPlayer = ({ src }) => {
  return (
    <Card className="w-full max-w-md overflow-hidden">
      <CardContent className="p-2 flex justify-center">
        <video controls className="w-full rounded-lg">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </CardContent>
    </Card>
  );
};

export default VideoPlayer;