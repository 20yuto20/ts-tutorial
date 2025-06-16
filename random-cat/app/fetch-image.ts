"use server";

type Image = {
    url: string;
}


// APIから画像を取得する関数
export async function fetchImage(): Promise<Image> {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await res.json();
    console.log("fetchImage関数で画像を取得しました", images);
    return images[0];
}