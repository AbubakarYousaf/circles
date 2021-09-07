import React from 'react';



export default function Card(props) {
    return(
        <div className="col-4  custom-card my-3 mb-5 align-self-center " >
            <img src={props.img} className="custom-card-image" />
            <h4 className="img-title" >{props.title}</h4><br/>
            <span className="img-date" >{props.date}</span>
            <p>{props.desc}</p>
        </div>
    )
}