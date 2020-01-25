import React from 'react'

export default function Products(props) {
    return (
         <div className="product-card">
            <img src={props.urlImg} alt="" />
            <p>{props.price} руб</p>
            <a href="#">{props.name}</a>
         </div>
    )
}

