"use client";

import { Button } from "@/components/ui/button";

function DownloadButton() {
  const handleDownload = () => {
    const files = ["/file1.pdf", "/file2.pdf", "/file3.pdf"];

    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file;
      link.download = file.split("/").pop() ?? "downloaded-file";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <Button onClick={handleDownload} className="">
      Download Files
    </Button>
  );
}

// pages/index.js

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1>He He boii Caught you nigga!!!!</h1>
      <DownloadButton />
    </div>
  );
}
