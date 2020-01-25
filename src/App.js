import React from 'react'
import Products from './components/Products'
import Title from './components/Title'

export default function App() {
    return (
        <div>
            <Title name="Приглядитесь к этим предложениям"/>
            <Products urlImg="https://avatars.mds.yandex.net/get-mpic/1750349/img_id3510294698949519266.jpeg/x166_trim" price="250" name="L'Oreal Paris Excellence "/>
            <Products urlImg="https://avatars.mds.yandex.net/get-mpic/1861069/img_id2811433203166761085.jpeg/x166_trim" price="332" name="Гель для тела Holika"/>
            <Products urlImg="https://avatars.mds.yandex.net/get-mpic/1749547/img_id5627767316814030995.jpeg/x166_trim" price="332" name="Kондиционер"/>
            <Products urlImg="https://avatars.mds.yandex.net/get-mpic/1865278/img_id9172435783597449327.jpeg/x166_trim" price="452" name="Londa Professional "/>
            <Products urlImg="https://avatars.mds.yandex.net/get-mpic/331398/img_id8606275073732889790.jpeg/x166_trim" price="452" name="Bref туалетный блок"/>
            <Products urlImg="https://avatars.mds.yandex.net/get-mpic/372220/img_id2752250570412045771.jpeg/x166_trim" price="482" name="Стиральный порошок "/>
        </div>
    )
}
