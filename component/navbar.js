import React from 'react'
import style from '../styles/navbar.module.css'
import {BsFacebook} from "react-icons/bs"
import {BiSearchAlt2,BiMenu} from "react-icons/bi"
import {AiOutlineHome,AiOutlineYoutube} from 'react-icons/ai'
import {FaGamepad,FaBell} from 'react-icons/fa'
import {MdGroups,MdStorefront,MdOutlineAdd} from 'react-icons/md'
import {CgMenuGridO} from 'react-icons/cg'
import {RiMessengerFill} from "react-icons/ri"
import {IoLogoGameControllerA} from "react-icons/io"
import Profil from '../public/profile.jpg'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link'

export default function Navbar({show,bgColor,iconCancel,iconSearch}) {
  const matches = useMediaQuery('(max-width:900px)');
  const menu = useMediaQuery('(max-width:720px)');
  return (
    <div className={style.navbar} style={{backgroundColor:!bgColor?'var(--bg-color)':"transparent"}}>
      <div className={style.container}>
        <div className={style.first}>
             {!iconCancel?
             <Link href="/" className={style.cancel}>
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 16 16">
                 <path d="M 2.75 2.042969 L 2.042969 2.75 L 2.398438 3.101563 L 7.292969 8 L 2.042969 13.25 L 2.75 13.957031 L 8 8.707031 L 12.894531 13.605469 L 13.25 13.957031 L 13.957031 13.25 L 13.605469 12.894531 L 8.707031 8 L 13.957031 2.75 L 13.25 2.042969 L 8 7.292969 L 3.101563 2.398438 Z"></path>
               </svg>
             </Link>:null
             }
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" className={style.fc}>
                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient>
                <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
                <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
             </svg>
            {!iconSearch?<BiSearchAlt2 className={style.search}/>:null}
            {menu?<BiMenu className={style.menu}/>:null}
        </div>
        {!show?
        <div className={style.second}>
        {menu?null:
            <>
            <AiOutlineHome />
            <AiOutlineYoutube />
            <MdStorefront className={style.active}/>
            <MdGroups />
            <IoLogoGameControllerA />
            </>
          }
        </div>:null}
        <div className={style.third}>
            {matches?
             <Link href="/create">
              <MdOutlineAdd/>
             </Link>
             :<CgMenuGridO />
            }
            <RiMessengerFill />
            <FaBell />
            <Image
              src={Profil}
              alt="Picture of the author"
              width={35}
              height={35}
            />
        </div>
      </div>
    </div>
  )
}
