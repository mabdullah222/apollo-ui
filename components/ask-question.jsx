"use client"

import React from 'react'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const AskQuestion = () => {
  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-md w-full">
        <h2 className="text-black text-xl font-bold mb-2">Ask a Question</h2>
        <div className="flex items-center gap-2">
        <Input
            type="text"
            placeholder="Enter your question..."
            className="flex-1 p-2 border rounded-lg text-black"
        />
        <Button variant="outline" size="icon">
            <Search className="w-5 h-5 text-black" />
        </Button>
        </div>
    </div>
  )
}

export default AskQuestion