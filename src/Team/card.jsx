import react from "react"
import './card.css'
import Icon from "@ant-design/icons"

function Card(props){
    return(<div className="bg11">
        <img src={"https://tedxhitam.com/public/"+props.img} alt=""/>
        <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
            
                <h2 style={{margin:'0'}}>{props.Name}</h2>
                <p style={{margin:'0',textAlign:'center'}}>{props.Des}</p>
            
        </div>

        <a href={props.url}><button className="probtn"><b>Explore Profile</b></button></a>
        
    </div>)
}

export default Card;