"use client";

import { useState } from "react";
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css";

// コンポーネントの引数の定義
type CatImageProps = {
    url: string;
};

// 画像を表示するコンポーネント
export function CatImage({ url }: CatImageProps) {
    // useStateを使って状態を管理
    const [imageUrl, setImageUrl] = useState(url);

    // 猫を取得する関数を定義
    const refreshImage = async () => {
        setImageUrl(""); // 画像を空にする（初期化）
        const image = await fetchImage();
        setImageUrl(image.url);
    }

    return (
        <div className={styles.page}>
            {/* ボタンを表示 */}
            <button onClick={refreshImage} className={styles.button}>
                他のニャンコも見る
            </button>
            {/* 画像を表示 */}
            <div className={styles.frame}>
                {imageUrl && <img src={imageUrl} className={styles.img} />}
            </div>
        </div>
    );
}