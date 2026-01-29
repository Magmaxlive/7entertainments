"use client";

import InstagramFeed from "./InstagramFeed";

export default function InstagramGrid() {
  const posts = [
    "https://www.instagram.com/p/DUBm1H1iNap/",
    'https://www.instagram.com/p/DT7UwNKkz4y/',
    'https://www.instagram.com/p/DTyKCtUDz2w/',
    'https://www.instagram.com/p/DT2Ijr7Eu05/'

    
  ];

  return (
        <div className="flex flex-col gap-20 lg:gap-15 max-w-[1440px] mx-auto justify-center items-center">

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {posts.map((url, index) => (
        <div key={index} className="overflow-hidden rounded-lg bg-black">
          <InstagramFeed url={url} />
        </div>
      ))}
    </div>
    </div>
  );
}
