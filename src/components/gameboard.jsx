import Card from "./card";
import '../styles/gameboard.css'


export default function Gameboard(){

    return(
        <>
        <div className="board">
            <Card imgSrc="https://images.dog.ceo/breeds/groenendael/n02105056_3107.jpg"/>
            <Card imgSrc="https://images.dog.ceo/breeds/hound-afghan/n02088094_392.jpg"/>
            <Card imgSrc="https://images.dog.ceo/breeds/pinscher-miniature/n02107312_5665.jpg"/>
            <Card imgSrc="https://images.dog.ceo/breeds/rottweiler/n02106550_10481.jpg"/>
            <Card imgSrc="https://images.dog.ceo/breeds/sharpei/noel.jpg"/>
        </div>
        </>
    )
}