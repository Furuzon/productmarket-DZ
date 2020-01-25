import React from 'react'

export default function Products(props) {
    return (
         <div className="product-card">
             <div className="productimg">
             <img src={props.urlImg} alt="" />
             </div>
            <p>{props.price} руб</p>
            <a href="http://google.com">{props.name}</a>
         </div>
    )
}

