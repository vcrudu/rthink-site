"use client";

import { Separator } from "@/components/ui/separator";

export default function BlogContent({ params }: { params: { id: number } }) {
  return (
    <div className="flex flex-col mt-32">
      <div className="text-[60px] ml-10">Blog</div>
      <div className="p-5">
        <Separator className="bg-black mt-10"></Separator>
      </div>
    </div>
  );
}
