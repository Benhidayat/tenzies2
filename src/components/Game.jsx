import './Game.css';

const Game = () => {
  return (
    <main className='game__container'>
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice__container">
            <div className="die__item">1</div>
            <div className="die__item">1</div>
            <div className="die__item">1</div>
            <div className="die__item">1</div>
            <div className="die__item">1</div>
            <div className="die__item">1</div>
            <div className="die__item">1</div>
            <div className="die__item">1</div>
            <div className="die__item">1</div>
            <div className="die__item">1</div>
        </div>
        <button className='roll__button'>Roll</button>
    </main>
  )
}

export default Game
