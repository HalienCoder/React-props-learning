export default function Entry(props){
    return (
        <article>
            <div className="image-div">
                <img src ={props.entry.img.src} alt = {props.entry.img.alt} />
            </div>
            <div>
                <div className="place-info">
                    <img className= 'pin' src="pin.svg" />
                    <span className="country">{props.entry.country}</span>
                    <a href= {props.entry.googleMapsLink}> View on google Maps</a>
                </div>
                <h2 className="place">{props.entry.title}</h2>
                <p className="date">{props.entry.dates}</p>
                <p className="text">{props.entry.text}</p>
            </div>

        </article>
    )
}