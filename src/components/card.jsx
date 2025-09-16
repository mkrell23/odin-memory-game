import '../styles/card.css'

export default function Card({imgSrc}){


    return(
        <>
        <div className="cardBorder">
            <img src={imgSrc}/>
        </div>
        </>
    )
}