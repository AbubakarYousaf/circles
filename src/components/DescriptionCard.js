import React from 'react';



export default function Card(props) {
    return(
        <div className="col-4  custom-card my-3 mb-5 align-self-center " >
            <img src={props.img} style={{width:'95%',height: "100%"}} />
            <h4 class="img-title" >{props.title}</h4><br/>
            <span class="img-date" >{props.date}</span>
            <p>{props.desc}</p>
        </div>
    )
}