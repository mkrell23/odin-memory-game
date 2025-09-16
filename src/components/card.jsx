import '../styles/card.css'

export default function Card({imgSrc, onClick, cardKey}){


    return(
        <>
        <div onClick={onClick} className="cardBorder" cardkey={cardKey}>
            <img src={imgSrc} cardkey={cardKey}/>
        </div>
        </>
    )
}