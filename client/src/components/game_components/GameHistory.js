import { Link } from "react-router-dom";
import GameItem from "../game_components/GameItem"
import React from "react";


const GameHistory = ({ gameHistory }) => {


   // console.log(gameHistory);
  
   const gameList = gameHistory.slice(0).reverse().map((game, index) => {
       return <GameItem
                   game={game}
                   key={index}
               />
   })


   return(
           <div className="game-history-page">
                <div className="game-history-container">
                    <p className="game-history-header">RECENTLY PLAYED</p>
                    <div className="winner-loser-div">
                        <p className="winner-text">WINNER</p>
                        <p className="loser-text">LOSER</p>
                    </div>
                        <ul>
                            {gameList}
                        </ul>
                </div>
           </div>
   )
}


export default GameHistory;
