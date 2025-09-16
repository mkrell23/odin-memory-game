import Card from "./card";
import '../styles/gameboard.css'
import { useEffect, useState } from "react";


export default function Gameboard(){

    const [ pictures, setPictures ] = useState([])
    const [ clicked, setClicked ] = useState([])

    function onClick(e){
        const cardClicked = e.target.getAttribute('cardKey')
        if (clicked.indexOf(cardClicked) < 0 ){
            setClicked([...clicked, cardClicked])
            console.log("NEW!")
            shuffle(cards)
        }
        else{
            console.log("LOST")
        }
    }

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random/6")
            .then( response => response.json() )
            .then( response => setPictures(response.message))
    }, [])

    function createCards(pictures){
        let cardsArray = []
        for (let i = 0; i < pictures.length; i++) {
            const picture = pictures[i];
            const card = <Card onClick={onClick} key={i} cardKey={i} imgSrc={picture}/>
            cardsArray.push(card)
        }
        
        return cardsArray
    }

    function shuffle(array){
        for (let i = array.length -1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const cards = createCards(pictures)
    shuffle(cards)

    if (clicked.length == 6 ){
        console.log("YOU WON!!")
    }
    
    return(
        <>
        <div className="board">
          {cards}
        </div>
        </>
    )
}