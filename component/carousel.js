import React from 'react'
import Link from 'next/link'
import style from "../styles/carousel.module.css"
import Profil from '../public/profile.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Slider({image,location}) {

  console.log(image);
  return (
      <div className={style.slider}>
          <Carousel showThumbs={image?.length>1? true:false} showIndicators={false}>
                {image?.map((p, i) => (
                  <div className={style.item} key={i}>
                   <div className={style.BackImg} key={i} style={{backgroundImage:`url(${p.url})`}}></div>
                   <img src={p.url} alt={`slide ${i}`} className={style.img}/>
                 </div>
               ))}
          </Carousel> 
      </div>
  )
}
