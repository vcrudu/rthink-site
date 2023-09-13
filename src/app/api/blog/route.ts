import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  let jsonDirectory = path.join(process.cwd(), "/assets");
  console.log(jsonDirectory);
  const articles = await fs.readFile(jsonDirectory + "/articles.json", "utf8");
  return NextResponse.json(articles);
}
