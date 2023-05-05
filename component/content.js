import React, { useEffect, useState } from 'react'
import style from '../styles/content.module.css'
import Profil from '../public/profile.jpg'
import Image from 'next/image'
import Link from 'next/link';
import CircularProgress from '@mui/material/CircularProgress';
import LZString from 'lz-string';
import Skeleton from '@mui/material/Skeleton';


export default function Store() {
  const [prod, setProd] = useState([]);
  const [loading,setLoading]= useState(true)
  const skeletonProducts = [];

  useEffect(() => {
    const storedData = localStorage.getItem('prod');
    if (storedData) {
      const decompressedData = LZString.decompress(storedData);
      const parsedData = JSON.parse(decompressedData);
      setProd(parsedData);
    }
    setTimeout(()=>{
      setLoading(false)
    },1800)
  }, []);

  // skelton loading before get a products from api 
  for (let i = 0; i < 6; i++) {
    skeletonProducts.push(
      <div key={i} className={style.product}>
        <Skeleton variant="rectangular" className={style.skeleton} height={300} />
        <Skeleton animation="wave" className={style.skeleton}/>
        <Skeleton animation={false} className={style.skeleton}/>
      </div>
    );
  }

  return (
    <div className={style.store}>
      <h3>Today's picks</h3>
      <div className={style.products}> 
      {loading?<>{skeletonProducts}</>:
      // <div className={style.spinner}><CircularProgress /></div>:
      prod.length<1?
      <div className={style.empty}>
         <h1 className={style.headEmpty}>The MarketPlace is Empty</h1>
         <Link href="/create">
              <button className={style.btn}>+ Create new listing</button>
           </Link>
      </div>
        :    
        prod?.map((p,index) => {
          return (
            <div className={style.product} key={p.id}>
              <Link href={`/product/${p.id}`}>
              <Image
               src={p.images[0]?.url}
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
        })
      }
      </div>
    </div>
  )
}
