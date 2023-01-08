import '../App.css'

export default function Card(props) {
    return (
       <div className='container'>
        <img className='card--image' src={require(`../images/${props.image}`)} alt="" />
        <div className='card--text'>
        <div className='card--locationInfo'>
            <img className='card--icon' src={require("../images/location-mark.png")} alt="" />
            <span className='card--location '>{props.location}</span>
            <a href={props.googleMapsUrl} className='card--link'>View on Google Maps</a>
        </div>
        <h1 className='card--title'>{props.title}</h1>
        <h5 className='card--date'>{props.startDate} - {props.endDate}</h5>
        <span className='card--description'>{props.description}</span>
        
        </div>
        
       </div>
       
    )
}