import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import teamPicture from "@/app/images/office.jpg";

export default function Home() {
  return (
    <div className="flex flex-col">
      <video className="brightness-50" src="/rthink.mp4" muted autoPlay loop playsInline></video>
      <div className="relative">
        <div className="absolute bottom-5 left-10 md:bottom-36 md:left-20 text-white w-4/6 md:w-8/12 text-[26px] md:text-[40px]">
          We Elevate Intelligence for Your System.
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-center mt-16 mb-10">
        <div className="text-center mb-8 font-bold text-[50px] w-80 px-8">
          About us
        </div>
        <div className="w-10/12 md:w-6/12">
          At R-Think, we are obsessed with the fusion of traditional IT
          solutions and avant-garde AI technologies. Our aim? To position your
          business at the cutting edge of technological evolution.
        </div>
      </div>
      <Separator className="bg-black"></Separator>
      <div className="flex flex-col lg:flex-row mt-10 justify-center">
        <div className="flex flex-col lg:w-4/12 ml-5 mt-5">
          <div className="font-bold">Our Team at R-Think Software</div>
          <div className="mt-5 mb-5">
            We&apos;re a nimble group of software engineers and data scientists.
            Our forte? Infusing AI into traditional software, especially when
            faced with:
          </div>
          <div className="ml-4 mb-2">
            <b>Big Challenges:</b> Those that demand deep dives and effort.
          </div>
          <div className="ml-4 mb-2">
            <b>Evolving Issues:</b> Problems that change as days go by.
          </div>
          <div className="ml-4 mb-2">
            <b>Time-Shifted Puzzles:</b> Where the right answers aren&apos;t
            always the same.
          </div>
          <div className="ml-4 mb-5">
            <b>Boundary-Pushers:</b> Tasks that make us rethink the possible.
          </div>
          <div>
            Give us a challenge, and we&apos;ll engineer a smart solution for
            you.
          </div>
        </div>
        <div className="w-full lg:w-8/12 mt-5 pl-5 pr-5">
          <Image alt="Out team" src={teamPicture} />
        </div>
      </div>
    </div>
  );
}
