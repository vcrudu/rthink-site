"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import squares_circles from "@/app/images/squares_circles.jpg";
import dots from "@/app/images/dots.jpg";
import rectangles from "@/app/images/rectangles.jpg";
import { useArticles } from "@/lib/useArticles";

function getImage(iconName: string) {
  switch (iconName) {
    case "squares_circles":
      return squares_circles;
    case "dots":
      return dots;
    case "rectangles":
      return rectangles;
    default:
      return squares_circles;
  }
}

export default function BlogContent({ params }: { params: { id: number } }) {
  let { articles }: { articles: any[] } = useArticles();
  const article = articles[params.id - 1];

  return (
    <div className="flex flex-col mt-32">
      <div className="text-[60px] ml-10">Blog</div>
      <div className="p-5">
        <Separator className="bg-black mt-10"></Separator>
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        {article && (
          <>
            <div className="md:w-6/12 font-bold text-3xl text-center">
              {article.title}
            </div>
            <Image
              className="mt-8 mb-5"
              src={getImage(article.iconName)}
              width={100}
              alt={article.title}
            />
            <div
              className="mt-8 m-5 w-screen md:w-7/12 text-lg"
              dangerouslySetInnerHTML={{ __html: article.text }}
            ></div>
          </>
        )}
      </div>
    </div>
  );
}
