export default function Home() {
  return (
    <div className="flex flex-col justify-start h-[132rem]">
      <video src="/rthink.mp4" muted autoPlay loop playsInline></video>
      <div className="relative bottom-48 left-10 md:bottom-80 md:left-20">
        <div className="text-white w-4/6 md:w-8/12 text-[40px] md:text-[60px]"> 
          We Elevate Intelligence for Your System.
        </div>
      </div>
    </div>
  );
}
