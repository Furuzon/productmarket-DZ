import React from 'react'
import Products from './components/Products'
import Title from './components/Title'


export default function App() {

const productListMarket = [
       {name: "Приглядитесь к этим предложениям" },
    {urlImg: 'https://avatars.mds.yandex.net/get-mpic/1750349/img_id3510294698949519266.jpeg/x166_trim', price: 250, name: "L'Oreal Paris Excellence"},
    {urlImg: 'https://avatars.mds.yandex.net/get-mpic/1861069/img_id2811433203166761085.jpeg/x166_trim', price: 332, name: "Гель для тела Holika"},
    {urlImg: 'https://avatars.mds.yandex.net/get-mpic/1749547/img_id5627767316814030995.jpeg/x166_trim', price: 532, name: "Kондиционер"},
    {urlImg: "https://avatars.mds.yandex.net/get-mpic/1865278/img_id9172435783597449327.jpeg/x166_trim", price: 452, name: "Londa Professional "},
    {urlImg: "https://avatars.mds.yandex.net/get-mpic/331398/img_id8606275073732889790.jpeg/x166_trim", price: 452 , name: "Bref туалетный блок"},
    {urlImg: "https://avatars.mds.yandex.net/get-mpic/372220/img_id2752250570412045771.jpeg/x166_trim", price: 482, name: "Стиральный порошок"}


]    
   
    return (
        <div>
            <Title name={productListMarket[0].name} />
            <Products urlImg={productListMarket[1].urlImg} price={productListMarket[1].price} name={productListMarket[1].name}/>
            <Products urlImg={productListMarket[2].urlImg} price={productListMarket[2].price} name={productListMarket[2].name}/>
            <Products urlImg={productListMarket[3].urlImg} price={productListMarket[3].price} name={productListMarket[3].name}/>
            <Products urlImg={productListMarket[4].urlImg} price={productListMarket[4].price} name={productListMarket[4].name}/>
            <Products urlImg={productListMarket[5].urlImg} price={productListMarket[5].price} name={productListMarket[5].name}/>
            <Products urlImg={productListMarket[6].urlImg} price={productListMarket[6].price} name={productListMarket[6].name}/>
        </div>
    )
}
