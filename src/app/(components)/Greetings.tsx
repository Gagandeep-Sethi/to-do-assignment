import Image from "next/image";
import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const Greetings = () => {
  return (
    <div className="w-full bg-red-20 px-4 py-5 ">
      <div className="flex justify-between items-center">
        <p className="text-5xl">Good morning, Gagan!</p>
        <p className="flex text-xl items-center gap-3 ">
          Help & feedback <AiOutlineQuestionCircle className="h-10 w-7" />
        </p>
      </div>
      <div className="flex gap-6 my-6">
        <div className="w-[364px] h-[123px] bg-white flex p-2 items-center gap-4 rounded-xl">
          <Image
            src="/intro.png"
            alt=""
            width={77}
            height={61}
            className="w-[77px] h-[61px]"
          />
          <div className=" ">
            <p className="text-lg font-semibold text-zinc-500">
              Introducing tags
            </p>
            <p className="text-zinc-400 text-sm">
              Easily categorize and find your notes by adding tags. Keep your
              workspace clutter-free and efficient.
            </p>
          </div>
        </div>
        <div className="w-[364px] h-[123px] bg-white flex p-2 items-center gap-4 rounded-xl">
          <Image
            src="/share.png"
            alt=""
            width={77}
            height={61}
            className="w-[77px] h-[61px]"
          />
          <div className=" ">
            <p className="text-lg font-semibold text-zinc-500">
              Share Notes Instantly{" "}
            </p>
            <p className="text-zinc-400 text-sm">
              Effortlessly share your notes with others via email or link.
              Enhance collaboration with quick sharing options.
            </p>
          </div>
        </div>
        <div className="w-[364px] h-[123px] bg-white flex p-2 items-center gap-4 rounded-xl">
          <Image
            src="/access.png"
            alt=""
            width={77}
            height={61}
            className="w-[77px] h-[61px]"
          />
          <div className=" ">
            <p className="text-lg font-semibold text-zinc-500">
              Access Anywhere
            </p>
            <p className="text-zinc-400 text-sm">
              Sync your notes across all devices. Stay productive whether
              you&aposre on your phone, tablet, or computer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greetings;
