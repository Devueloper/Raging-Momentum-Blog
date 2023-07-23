import React from 'react';
import Link from 'next/link';

const JoinDiscord = () => {
  return (
    <div className="mb-4">
      <Link href="https://discord.gg/SxG4Txxje5">
        <button className="bg-pink-500 transition duration-300 hover:bg-pink-600 text-white font-semibold text-xl shadow-lg rounded-full px-8 py-3 text-center w-full">
          Join the Discord
        </button>
      </Link>
    </div>
  );
};

export default JoinDiscord;
