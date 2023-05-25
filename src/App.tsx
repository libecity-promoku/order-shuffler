import React, { useEffect, useState } from 'react'

interface SpeakerList {
  id: number;
  speakerName: string;
  title: string;
}

const ltList: SpeakerList[] = [
  {
    id: 1,
    speakerName: "oratake",
    title: "LTどうでしょう",
  },
  {
    id: 2,
    speakerName: "よしはる",
    title: "タイトル",
  },
];

function App() {
  const [speakerList, setSpeakerList] = useState(ltList as SpeakerList[]);
  const [isShuffle, setIsShuffle] = useState(false);

  useEffect(() => {
    if (isShuffle) {
      setInterval(() => {
        const randomIndex = Math.floor(Math.random() * speakerList.length);
        const temp = speakerList[randomIndex];
        speakerList[randomIndex] = speakerList[0];
        speakerList[0] = temp;
      }, 100);
    }
  }, [isShuffle]);

  return (
    <>
      <button onClick={() => setIsShuffle(!isShuffle)}>
        {isShuffle ? "Stop" : "Start"}
      </button>
      {speakerList.map((element, index) => (
        <div key={index}>{element.speakerName}{element.speakerName !== "oratake" ? "さん" : ""}: {element.title}</div>
      ))}
    </>
  );
}

export default App;
