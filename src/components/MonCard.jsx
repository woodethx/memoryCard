
export default function MonCard({src, name}){

    return(
        <div className="monCard">
            <img src={src} alt="" />
            <h4>{name}Hello</h4>
        </div>
    )
}