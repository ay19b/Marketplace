import React from 'react'
import style from '../styles/car.module.css'
import {FaBell} from 'react-icons/fa'
import {CgMenuGridO} from 'react-icons/cg'
import {RiMessengerFill} from "react-icons/ri"


export default function ViewCars() {
  return (
    <div className={style.view}>
       <div className={style.icons}>
            <CgMenuGridO />
            <FaBell />
       </div>
    </div>
  )
}
