import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import teamPicture from "@/app/images/office.jpg";

export default function Home() {
  return (
    <div className="flex flex-col">
      <video
        className="brightness-50"
        src="/rthink.mp4"
        muted
        autoPlay
        loop
        playsInline
      ></video>
      <div className="relative">
        <div className="absolute bottom-5 left-10 md:bottom-36 md:left-20 text-white w-4/6 md:w-8/12 text-[26px] md:text-[40px]">
          We Elevate Intelligence for Your System.
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-center mt-16 mb-10">
        <div className="text-center mb-8 font-bold text-[50px] w-80 px-8">
          About us
        </div>
        <div className="w-10/12 md:w-6/12 text-lg">
          At R-Think, we are obsessed with the fusion of traditional IT
          solutions and avant-garde AI technologies. Our aim? To position your
          business at the cutting edge of technological evolution.
        </div>
      </div>
      <div className="p-5">
        <Separator className="bg-black"></Separator>
      </div>
      <div className="flex flex-col lg:flex-row mt-5 justify-center">
        <div className="flex flex-col lg:w-4/12 ml-5 mt-5 text-lg">
          <div className="font-bold">The AI Revolution Begins Here!</div>
          <div className="mt-5 ml-4 mb-2">
            <b>Unlock</b> the Future of Automation with Us! Dive into a world
            where state-of-the-art text-generative AI transforms your business.
          </div>
          <div className="mt-5 ml-4 mb-2">
            <b>Dive</b> into a world where state-of-the-art text-generative AI
            transforms your business.
          </div>

          <div className="mt-5 ml-4 mb-2">
            <b>Next wave</b> of AI-driven solutions is here: from intelligent 
            { } <b>chatbots</b> to predictive insights, we&apos;re pioneering the future of
            automation.
          </div>

          {/* <div className="ml-4 mb-2">
            <b>Stay ahead,</b> innovate, and let our cutting-edge methods power
            your success.
          </div>

          <div className="ml-4 mb-2">
            <b>Choose</b> the best in AI outsourcing.
          </div>

          <div className="ml-4 mb-2 text-lg">
            <b>Experience</b> unparalleled efficiency with every solution.
          </div>

          <div className="ml-4 mb-5">
            <b>Elevate</b> your business today!
          </div> */}
        </div>
        <div className="w-full lg:w-8/12 mt-5 pl-5 pr-5">
          <Image alt="Out team" src={teamPicture} />
        </div>
      </div>
    </div>
  );
}
