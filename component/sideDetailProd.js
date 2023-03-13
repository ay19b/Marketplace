import React, { useState, useEffect,useContext } from "react";
import style from '../styles/sideDetailProd.module.css'
import { useRouter } from "next/router";
import Head from 'next/head'
import Divider from '@mui/material/Divider';
import Slider from "@/component/carousel";
import {BsThreeDots,BsBookmarkFill} from 'react-icons/bs'
import {RiMessengerFill} from "react-icons/ri"
import Profil from '../public/profile.jpg'
import Image from 'next/image'
import {FaGamepad,FaBell,FaFacebookMessenger} from 'react-icons/fa'
import {TiArrowForward} from 'react-icons/ti'
import TextField from '@mui/material/TextField';


export default function SideDetailProd({title,location,price,condition,disc}) {
  const mapSrc = `https://maps.google.com/maps?q=${location}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  const mapStand = `https://maps.google.com/maps?q=algeria&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  const [msg, setMsg] = useState('Bonjour, cet article est-il toujours disponible ?');
  return (
    <div className={style.sideDetailProd}>
         <div className={style.side}>        
          <div className={style.prodInformation}>
             <div className={style.Prod}>
                 <h2>{title}</h2>
                 <h3>DA {price}</h3>
                 <span>Listed a few seconds ago in {location}</span>
             </div>
             <div className={style.listIcons}>
               <div className={style.icon}>
                 <FaFacebookMessenger />
                 <h5>Message</h5>
               </div>
               <div className={style.icon}>
                  <TiArrowForward />
               </div>
               <div className={style.icon}>
                 <BsBookmarkFill />
               </div>
               <div className={style.icon}>
                 <BsThreeDots />
               </div>               
             </div>
             <p className={style.disc}>{disc}</p>
             <div className={style.map}>
                   <div className={style.mapouter}>
                     <div className={style.gmap_canvas}>
                       <iframe width="370" height="150" id="gmap_canvas" src={location?mapSrc:mapStand} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                     </div>
                   </div>
                    <br></br>
                   <span>{location}</span>
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
          <div className={style.messanger}>
            <div className={style.Iconmsg}>
              <img src="https://img.icons8.com/fluency/48/null/facebook-messenger--v2.png"/>
              <h4>Send seller a message</h4>
            </div>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={1}
              value={msg}
              sx={{ '& .MuiTextField-root': {  margin: '8px 0px' } }}
              onChange={(event) => setMsg(event.target.value)}
              fullWidth
             />
             <div className={style.btn}>
              <button>Send</button>
             </div>
          </div>

    </div>
    </div>
  )
}