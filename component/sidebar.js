import React from 'react'
import style from "../styles/sidebar.module.css"
import {RiSettings5Fill} from "react-icons/ri"
import {BiSearchAlt2} from "react-icons/bi"
import {AiOutlineShop,AiFillBell,AiOutlineShopping} from 'react-icons/ai'
import {BsInboxFill} from 'react-icons/bs'
import {MdSell} from 'react-icons/md'
import {GiShoppingBag} from 'react-icons/gi'
import {HiUser} from "react-icons/hi"
import Link from 'next/link'


export default function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className={style.containerSide}>
        <div className={style.headSidebar}>
            <h1>Marketplace</h1>
            <RiSettings5Fill />
        </div>
        <div className={style.iconhelp}>
          <HiUser />
          <h4>Sell</h4>
          <h4>All Categories</h4>
        </div>
        <div className={style.input}>
            <BiSearchAlt2 />
            <input placeholder='Serach Marketplace'/>        
        </div>  
        <div className={style.list}>
           <div className={`${style.item} ${style.active}`}>
             <AiOutlineShop />
             <h3>Browser all</h3>
           </div>
           <div className={style.item}>
             <AiFillBell />
             <h3>Notifications</h3>
           </div>
           <div className={style.item}>
             <BsInboxFill />
             <h3>Inbox</h3>
           </div>
           <div className={style.item}>
             <GiShoppingBag />
             <h3>Buying</h3>
           </div>
           <div className={style.item}>
             <MdSell />
             <h3>Selling</h3>
           </div>
        </div>
        <Link href="/create">
           <button className={style.btn}>+ Create new listing</button>
        </Link>
      </div>  
    </div>
  )
}
