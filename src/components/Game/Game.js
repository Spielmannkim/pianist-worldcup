import React, { useState, useEffect } from "react";
import { FlexBox } from "./style";

const items = [
  {
    name: "임동혁",
    src: require("../../img/dhlim.jpg")
  },
  {
    name: "손열음",
    src: require("../../img/yeson.jpg")
  },
  {
    name: "선우예권",
    src: require("../../img/yksunwoo.jpg")
  },
  {
    name: "조성진",
    src: require("../../img/sjcho.jpg")
  },
  {
    name: "김선욱",
    src: require("../../img/swkim.jpg")
  },
  {
    name: "임동민",
    src: require("../../img/dmlim.jpg")
  },
  {
    name: "윤아인",
    src: require("../../img/aiyoon.jpg")
  },
  {
    name: "안종도",
    src: require("../../img/jdan.jpg")
  }
  // {
  //   name: "백건우",
  //   src: require("../../img/kwpaik.jpg")
  // },
  // {
  //   name: "원재연",
  //   src: require("../../img/jywon.jpg")
  // },
];

const Game = () => {
  const [foods, setFoods] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setFoods(items);
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = food => () => {
    if (foods.length <= 2) {
      if (winners.length === 0) {
        setDisplays([food]);
      } else {
        let updatedFood = [...winners, food];
        setFoods(updatedFood);
        setDisplays([updatedFood[0], updatedFood[1]]);
        setWinners([]);
      }
    } else if (foods.length > 2) {
      setWinners([...winners, food]);
      setDisplays([foods[2], foods[3]]);
      setFoods(foods.slice(2));
    }
  };
  return (
    <FlexBox>
      <h1 className="title">Favorite Worldcup</h1>
      {displays.map(d => {
        return (
          <div className="flex-1" key={d.name} onClick={clickHandler(d)}>
            <img className="food-img" src={d.src} alt=""/>
            <div className="name">{d.name}</div>
          </div>
        );
      })}
    </FlexBox>
  );
};

export default Game;
