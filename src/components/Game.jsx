import { useState, useRef, useEffect } from 'react';
import './Game.css';
import Die from './die/Die';
import Confetti from 'react-confetti';

const Game = () => {

  // generate 10 new dice
  const generateAllNewDice = () => {
    return new Array(10)
               .fill()
               .map(() => ({
                value: 5, //Math.ceil(Math.random() * 6),
                isHeld: false,
                id: crypto.randomUUID()
               }))
  }
  
  const [dice, setDice] = useState(() => generateAllNewDice());
  const newGameFocusRef = useRef(null);

  // 
  const gameWon = dice.every(die => die.isHeld) &&
                  dice.every(die => die.value === dice[0].value);

  // function to hold a button
  const holdButton = (id) => {
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld}
                           : die
    }))
  }

  // to roll the dice
  const rollTheDice = () => {
    setDice(prevDice => prevDice.map(die => {
      return die.isHeld ? die
                        : {...die, value: Math.ceil(Math.random() * 6)}
    }))
  }

  // new game
  const getNewGame = () => {
    setDice(generateAllNewDice);
  }

  // create dice elements
  const diceElements = dice.map(dieObj => {
    return (<Die
              key={dieObj.id}
              value={dieObj.value}
              isHeld={dieObj.isHeld}
              hold={holdButton}
              id={dieObj.id}
              ref={newGameFocusRef}
            />)
  })

  useEffect(() => {
    if (gameWon) {
      newGameFocusRef.current.focus();
    }

  }, [gameWon]);

  return (
    <main className='game__container'>
        {gameWon ? <Confetti /> :null}
        <div aria-live='polite' className='sr-only'>
          {gameWon ? <p>Congratulations! You Won! press New Game to start again.</p> : null}
        </div>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice__container">
           {diceElements}
        </div>
        <button 
          className='roll__button'
          onClick={gameWon ?getNewGame  :rollTheDice}
        >{gameWon ? 'New Game' : 'Roll'}</button>
    </main>
  )
}

export default Game
