"use client";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer>
      <div className="p-5">
        <Separator className="bg-black mt-10"></Separator>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-around mt-4 mb-40 md:ml-10">
        <div className="text-center">R-Think Software© 2023</div>
        <div>
          <ul className="w-full flex flex-col justify-center text-base">
            <li className="h-10 flex items-center justify-center hover:bg-sky-300">
              <a href="mailto:info@rthink.ai">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
