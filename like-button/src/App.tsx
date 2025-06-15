import "./App.css";
import { useState} from "react"

function App() { // これはコンポーネント関数
  return(
    <>
      <LikeButton />
    </>
  );
}

function LikeButton() { // これはコンポーネント関数
  const [count, setCount] = useState(999);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <span className="likeButton" onClick={handleClick}>
      ❤︎ {count}
    </span>
  ); // これはspanタグが戻り値だからJSX内で呼び出すことが可能
}

export default App;