"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import squares_circles from "@/app/images/squares_circles.jpg";
import dots from "@/app/images/dots.jpg";
import rectangles from "@/app/images/rectangles.jpg";
import Link from "next/link";
import { json } from "stream/consumers";
import { useArticles, ArticleType } from "@/lib/utils";

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

export default function Blog() {
  let { articles } = useArticles();

  return (
    <div className="flex flex-col mt-32">
      <div className="text-[60px] ml-10">Blog</div>
      <Separator className="bg-black mt-10"></Separator>
      <div className="flex flex-col justify-center md:flex-row md:justify-evenly mt-10">
        {articles &&
          articles.map((article:ArticleType) => (
            <Link key={article.id} href={`/blog/${article.id}`}>
              <div className="flex flex-col justify-center items-center mb-16 md:mb-0">
                <Image
                  className="mb-2"
                  src={getImage(article.iconName)}
                  width={300}
                  alt={article.title}
                />
                <div className="w-72 mb-5">{article.title}</div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
