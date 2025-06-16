import { connection } from "next/server";
import { fetchImage } from "./fetch-image";
import { CatImage } from "./cat-image";

export default async function Home() {
  // ビルド時にfetchImageの結果が固定されないようにする
  await connection();
  const image:any = await fetchImage(); // 画像を取得

  console.log("Homeコンポーネントで画像を取得しました：", image);
  return <CatImage url={image.url} />;
}