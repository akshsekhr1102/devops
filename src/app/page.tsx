"use client";
function DownloadButton() {
  const handleDownload = () => {
    const files = ["/file1.pdf", "/file2.pdf"];

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
    <button
      onClick={handleDownload}
      className="p-2 bg-blue-500 text-white rounded"
    >
      Download Files
    </button>
  );
}

// pages/index.js

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <DownloadButton />
    </div>
  );
}
