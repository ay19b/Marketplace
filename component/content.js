import React, { useEffect, useState } from 'react'
import style from '../styles/content.module.css'
import Profil from '../public/profile.jpg'
import Image from 'next/image'
import Link from 'next/link';


export default function Store() {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    const storedProd = localStorage.getItem('prod');
    if (storedProd) {
      setProd(JSON.parse(storedProd));
    }
  }, []);

console.log(prod);

  return (
    <div className={style.store}>
      <h3>Today's picks</h3>
      <div className={style.products}>
      {prod.map((p,index) => {
          return (
            <div className={style.product} key={p.id}>
              <Link href={`/product/${p.id}`}>
              <Image
               src={p.images[0].url}
               alt=""
               width='40'
               height='40'
             />
              <h4 className={style.price}>DA{p.price}</h4>
              <h4 className={style.title}>{p.title}</h4>
              <h5 className={style.location}>{p.location}</h5>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
