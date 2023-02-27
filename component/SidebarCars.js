import React from 'react'
import {MdCancel} from 'react-icons/md'
import {BsFacebook} from "react-icons/bs"
import {GiWorld} from "react-icons/gi"
import {AiFillFileAdd} from 'react-icons/ai'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from 'next/link'
import Divider from '@mui/material/Divider';
import Profil from '../public/profile.jpg'
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import style from '../styles/car.module.css'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  label: {
      color: 'rgba(255, 255, 255, 0.6) !important',
  },
}));
const names = [
    'car/van',
    'Motorcycle',
    'Power sport',
    'Motorhome/caravan',
    'Trailer',
    'Boat',
    'Commercial/Industrial',
    'Other',
  ];

export default function SidebarCars() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div className={style.side}>
        <div className={style.head}>
          <div className={style.headSide}>
             <Link href="/">
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 16 16">
                 <path d="M 2.75 2.042969 L 2.042969 2.75 L 2.398438 3.101563 L 7.292969 8 L 2.042969 13.25 L 2.75 13.957031 L 8 8.707031 L 12.894531 13.605469 L 13.25 13.957031 L 13.957031 13.25 L 13.605469 12.894531 L 8.707031 8 L 13.957031 2.75 L 13.25 2.042969 L 8 7.292969 L 3.101563 2.398438 Z"></path>
               </svg>
             </Link>
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient>
                <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
                <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
             </svg>
          </div>
          <div className={style.save}>
            <div className={style.leftSave}>
              <span>Marketplace</span>
              <h2>Vehicle for sale</h2>
            </div>
            <div className={style.rightSave}>
              <button>Save Draft</button> 
            </div>
          </div>
        </div>
        <div className={style.infSide}>
          <div className={style.user}>
          <Image
              src={Profil}
              alt="Picture of the author"
              width={35}
              height={35}
            />
            <div className={style.infUser}>
              <span className={style.userName}>John</span>
              <h5>Listing to Marketplace. <GiWorld />Public</h5>
            </div>
          </div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" className={classes.label}>vehicle type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="vehicle type"
              onChange={handleChange}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                 >
               {name}
              </MenuItem>
              ))}  
            </Select>
          </FormControl>

          <Divider />
           
          <div className={style.upload}>
            <h3 className={style.title}>Photo upload</h3>
            <span className={style.span}>Photos  · 0/20 – You can add up to 20 photos</span>
            <div className={style.boxUpload}>
              <AiFillFileAdd />
              <h3>Add Photos</h3>
              <span>or drag and drop</span>
            </div>
          </div> 
          <Divider />
         <div className={style.vehicle}>
            <h3 className={style.title}>About this vehicle</h3>
            <span className={style.span}>Help buyers know more about the vehicle that you're listing.</span>

            <TextField className={style.TextField} id="outlined-basic" label="Loacation" variant="outlined" fullWidth/>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
               >
              {name}
            </MenuItem>
          ))}
              
            </Select>
          </FormControl>
          <TextField id="outlined-basic" label="Make" variant="outlined" fullWidth/>
          <TextField id="outlined-basic" label="Model" variant="outlined" fullWidth/>
         </div>
         <Divider />
         <div className={style.price}>
            <h3 className={style.title}>Price</h3>
            <span className={style.span}>Enter your price for this vehicle.</span>
            <TextField id="outlined-basic" label="price" variant="outlined" fullWidth/>
         </div>
         <Divider />
         <div className={style.dcp}>
            <h3 className={style.title}>Description</h3>
            <span className={style.span}>Tell buyers anything that you haven't had the chance to include yet about your vehicle.</span>
            <TextField
              id="outlined-multiline-static"
              label="Discription"
              multiline
              rows={4}
              fullWidth
             />
         </div>
         <div className={style.option}>
         <span>Optional</span>
         <p>Marketplace items are public and can be seen by anyone on or off Facebook.
           Items such as animals, drugs, weapons, counterfeits and other items that infringe intellectual
            property aren't allowed on Marketplace.<span>See our Commerce Policies.</span> 
         </p>
         </div>
         
         </div>
         <div className={style.complet}>
          <div className={style.checkComplet}>
            <div className={style.barComplet}></div>
            <div className={style.barComplet}></div>
          </div>
          <Divider />
          <button className={style.btn} disabled>Next</button>
         </div>
         </div>
  )
}
