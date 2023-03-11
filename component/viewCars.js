import React, { useEffect, useState } from 'react'
import {FaBell} from 'react-icons/fa'
import {CgMenuGridO} from 'react-icons/cg'
import {RiMessengerFill} from "react-icons/ri"
import Profil from '../public/profile.jpg'
import Image from 'next/image'
import style from '../styles/view.module.css'
import Divider from '@mui/material/Divider'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ViewCars({title,photo,price,location,disc,selected,setSelected}) {
  const mapSrc = `https://maps.google.com/maps?q=${location}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  const mapStand = `https://maps.google.com/maps?q=algeria&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  const [image, setImage] = useState([]);


  useEffect(() => {
    setImage(photo);
  }, [photo]);

  return (
    <div className={style.view}>
      <div className={style.container}>
       <div className={style.viewContent}>
         <h4 className={style.title}>Preview</h4>
         <div className={style.infoView}>
          
            <div className={style.leftInfoView}>
             {photo.length>0?
                
              <Carousel 
                showThumbs={image.length>1? true:false}
                selectedItem={selected}
                onChange={setSelected}
                className={style.carousel}>
                {image.map((p, i) => (
                 <div key={i} autoFocus className={style.item}>
                   <img src={p.url} alt={`slide ${i}`} />
                 </div>
               ))}
              </Carousel>            
             :<>
              <h2>Your listing preview</h2>
              <h4>As you create your listing, you can preview how it will appear to others on Marketplace.</h4>
             </>
             }
            </div>
           <div className={style.rightInfoView}>
            <div className={style.container}>
             <div className={style.infoContainer}>
              <h2>{ title ? `${title}`:'title'}</h2>
              <h3>{price?price+' '+'DA':'price'}</h3>
              <span>Listed a few seconds ago in {location?location:'algeria'}</span>
              <Divider />
              <div className={style.map}>
                <h3>Seller's discription</h3>
                <span>{disc?disc:'Discription will appear here'}</span>
                <div className={style.mapouter}>
                  <div className={style.gmap_canvas}>
                    <iframe width="370" height="150" id="gmap_canvas" src={location?mapSrc:mapStand} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                  </div>
                </div>
                 <br></br>
                <span>{location?location:'algeria'}</span>
                <br></br>
                <h5>Location is approximate</h5>
              </div>
              <Divider />
              <div className={style.sellerInfo}>
                <div className={style.titleSeller}>
                  <h2>Seller information</h2>
                  <span>Seller details</span>
                </div>
                <div className={style.userSeller}>
                  <Image
                    src={Profil}
                    alt="Picture of the author"
                    width={35}
                    height={35}
                   />
                   <h4>John</h4>
                 </div>
              </div>
             </div>
             <div className={style.btnMsg}>
                <button disabled>Message</button>
            </div>
            </div>
           </div>
         </div>
       </div>
     </div>
    </div>
  )
}
