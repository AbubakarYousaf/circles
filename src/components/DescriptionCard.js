import React from 'react';



export default function Card(props) {
    return(
        <div className="col-lg-3 col-sm-8 custom-card  " >
            <img src={props.img} style={{width:'100%',height: "80%"}} />
            <span class="img-title" >{props.title}</span><br/>
            <span class="img-date" >{props.date}</span>
            <p>{props.desc}</p>
        </div>
    )
}