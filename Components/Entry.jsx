export default function Entry(props){
    return (
        <article>
            <div className="image-div">
                <img src ={props.img.src} alt = {props.img.alt} />
            </div>
            <div>
                <div className="place-info">
                    <img className= 'pin' src="pin.svg" />
                    <span className="country">{props.country}</span>
                    <a href= {props.googleMapsLink}> View on google Maps</a>
                </div>
                <h2 className="place">{props.title}</h2>
                <p className="date">{props.dates}</p>
                <p className="text">{props.text}</p>
            </div>

        </article>
    )
}