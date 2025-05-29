"use client";

import { Button } from "@/components/ui/button";

function DownloadButton() {
  const handleDownload = () => {
    const files = ["/file1.pdf", "/file2.pdf", "/file3.pdf"];

    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file;
      link.download = file.split("/").pop() ?? "exam-manual";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <Button onClick={handleDownload} className="mt-4">
      Download
    </Button>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center px-4">
      <h1 className="text-3xl font-bold mb-4">🎓 Oh look who we caught!</h1>
      <p className="text-lg max-w-xl mb-6">
        Trying to sneak a peek at the answers, huh? Nice try. Since youre so
        eager, heres the <em>manual</em> for the exam. Maybe study it next time
        instead of trying to be sneaky. 😏
      </p>
      <DownloadButton />
    </div>
  );
}
