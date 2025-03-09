import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const GenerateTopicModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Card className="w-[400px] bg-white shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle>Generate a New Topic</CardTitle>
          <CardDescription>Provide details for the new topic.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="topic-name">Topic Name</Label>
              <Input id="topic-name" placeholder="Enter topic name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="topic-description">Description</Label>
              <Textarea id="topic-description" placeholder="Enter topic description" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="destructive" onClick={onClose} className="cursor-pointer">
            Cancel
          </Button>
          <Button className="cursor-pointer">Generate</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GenerateTopicModal;
