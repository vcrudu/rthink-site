export default function Home() {
  return (
    <div className="flex flex-col justify-start">
      <video src="/rthink.mp4" muted autoPlay loop playsInline></video>
      <div className="relative bottom-48 left-10 md:bottom-80 md:left-20">
        <div className="absolute text-white w-4/6 md:w-8/12 text-[40px] md:text-[60px]"> 
          We Elevate Intelligence for Your System.
        </div>
      </div>
      <div className="flex flex-row justify-evenly items-center mt-16">
        <div className="md:text-[40px] w-2/6 px-8">
          About us
        </div>
        <div className="w-6/12">
        At R-Think, we are obsessed with the fusion of traditional IT solutions and avant-garde AI technologies. Our aim? To position your business at the cutting edge of technological evolution.
        </div>
      </div>
    </div>
  );
}
