import React from 'react'
import {FaBell} from 'react-icons/fa'
import {CgMenuGridO} from 'react-icons/cg'
import {RiMessengerFill} from "react-icons/ri"
import Profil from '../public/profile.jpg'
import Image from 'next/image'
import style from '../styles/view.module.css'
import Divider from '@mui/material/Divider';

export default function ViewCars() {
  return (
    <div className={style.view}>
      <div className={style.container}>
       <div className={style.icons}>
            <CgMenuGridO />
            <FaBell />
            <Image
              src={Profil}
              alt="Picture of the author"
              width={35}
              height={35}
            />
       </div>
       <div className={style.viewContent}>
         <h4 className={style.title}>Preview</h4>
         <div className={style.infoView}>
           <div className={style.leftInfoView}>
              <h2>Your listing preview</h2>
              <h4>As you create your listing, you can preview how it will appear to others on Marketplace.</h4>
           </div>
           <div className={style.rightInfoView}>
            <div className={style.container}>
             <div className={style.infoContainer}>
              <h2>title</h2>
              <h3>price</h3>
              <span>Listed a few seconds ago in algeria</span>
              <Divider />
              <div className={style.map}>
                <h3>Seller's discription</h3>
                <span>Discription will appear here</span>
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe width="370" height="150" id="gmap_canvas" src="https://maps.google.com/maps?q=oran&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                  </div>
                </div>
                 <br></br>
                <span>algeria</span>
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
