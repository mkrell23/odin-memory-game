import Card from "./card";
import '../styles/gameboard.css'
import { useEffect, useState } from "react";


export default function Gameboard(){

    const [ pictures, setPictures ] = useState([])
    const [ clicked, setClicked ] = useState([])
    const [ hiScore, setHiScore ] = useState(0)

    function onClick(e){
        const cardClicked = e.target.getAttribute('cardKey')
        if (clicked.indexOf(cardClicked) < 0 ){
            setClicked([...clicked, cardClicked])
            console.log("NEW!")
            clicked.length >= hiScore ? setHiScore(clicked.length + 1) : null
            if (clicked.length >= 5 ){
                console.log("YOU WON!!")
                alert("You won!")
                setClicked([])
                newGame()
            }
            else{
                shuffle(cards)
            }        
        }
        else{
            console.log("LOST")
             alert("You lost!")
             setClicked([])
             newGame()
        }
    }

    useEffect(() => {
        getPictures()
    }, [])

    function createCards(pictures){
        let cardsArray = []
        for (let i = 0; i < pictures.length; i++) {
            const picture = pictures[i];
            const card = <Card onClick={onClick} key={i} cardKey={i} imgSrc={picture}/>
            cardsArray.push(card)
        }
        shuffle(cardsArray)
        return cardsArray
    }

    async function getPictures(){
        const rawPictures = await fetch("https://dog.ceo/api/breeds/image/random/6")
        const pictures = await rawPictures.json()
        setPictures(pictures.message)
    }

    function shuffle(array){
        for (let i = array.length -1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function newGame(){
        getPictures()
    }

    let cards = createCards(pictures)
    
    return(
        <>
        <div className="score">
            <h5>Score: {clicked.length}</h5>
            <h5>High Score: {hiScore}</h5>
        </div>
        <div className="board">
          {cards}
        </div>
        </>
    )
}