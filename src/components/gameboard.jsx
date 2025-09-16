import Card from "./card";
import '../styles/gameboard.css'


export default function Gameboard(){

    function onClick(e){
        console.log(e.target.attributes)
        console.log(e.target.getAttribute('cardkey'))
    }

    return(
        <>
        <div className="board">
            <Card onClick={onClick} cardKey="1" imgSrc="https://images.dog.ceo/breeds/groenendael/n02105056_3107.jpg"/>
            <Card onClick={onClick} cardKey="2" imgSrc="https://images.dog.ceo/breeds/hound-afghan/n02088094_392.jpg"/>
            <Card onClick={onClick} cardKey="3" imgSrc="https://images.dog.ceo/breeds/pinscher-miniature/n02107312_5665.jpg"/>
            <Card onClick={onClick} cardKey="4" imgSrc="https://images.dog.ceo/breeds/rottweiler/n02106550_10481.jpg"/>
            <Card onClick={onClick} cardKey="5" imgSrc="https://images.dog.ceo/breeds/sharpei/noel.jpg"/>
        </div>
        </>
    )
}