import Image from "next/image";
import React from "react";

const AvatarStack = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Avatar stack */}
      <div className="flex -space-x-3">
        <Image
          src="/assets/img/me.jpg"
          alt="User 1"
          width={2848}
          height={2848}
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <Image
          src="/assets/img/me.jpg"
          alt="User 2"
          width={2848}
          height={2848}
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <Image
          src="/assets/img/me.jpg"
          alt="User 3"
          width={2848}
          height={2848}
          className="w-10 h-10 rounded-full border-2 border-white"
        />

        {/* Badge */}
        <div className="w-10 h-10 rounded-full bg-[#FFAE00] flex items-center justify-center text-xs font-semibold border-2 border-white">
          2K+
        </div>
      </div>

      {/* Text */}
      <div>
        <p className="text-sm font-medium">2k+ reviews</p>
        <p className="text-xs text-gray-400">(4.90 of 5)</p>
      </div>
    </div>
  );
};

export default AvatarStack;
