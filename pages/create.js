import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import ViewCars from '@/component/viewCars'
import {MdCancel} from 'react-icons/md'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {BsFacebook} from "react-icons/bs"
import {MdGroups,MdStorefront} from 'react-icons/md'
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
import style from '../styles/create.module.css'
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import { useRouter } from 'next/router'
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import { NumericFormat } from 'react-number-format';
import Navbar from '@/component/navbar'


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const names = [
    'Home & garden',
    'Entertainment',
    'Clothing & accessories',
    'Family',
    'Electronics',
    'Hobbies',
    'Classifieds',
    'Vehicles',
  ];
  const cond = [
    'New',
    'Used - like new',
    'Used - good',
    'Used - fair',
  ];
  const years=[];
  function createYears(){
    for(let i=1990; i<2023; i++){
      years.push(i)          
    }
  }
  createYears();

  const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
    props,
    ref,
  ) {
    const { onChange, ...other } = props;
  
    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        prefix="DA "
      />
    );
  });
  
  NumericFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

export default function Create() {
    const router = useRouter()
    const [type, setType] = useState('');
    const [images, setImages] = useState([]);
    const [location, setLocation] = useState('algeria');
    const [condition, setCondition] = useState('');
    const [title, setTitle] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [disc, setDisc] = useState('');
    const [prod, setProd] = useState([]);
    const [btn,setBtn] = useState(false);
    const [submit,setSubmit] = useState(false);
    const id = uuid();
    const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
    const [values, setValues] = React.useState({
      numberformat: '',
    });

    const handleChange = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    };

    const handleFileInput = (event) => {
      const files = Array.from(event.target.files);
      const reader = new FileReader();
      reader.readAsDataURL(files[0]); // Only read the first file
    
      reader.onload = () => {
        // Add the new image to the existing images
        setImages([...images, {
          url: reader.result,
          alt: files[0].name
        }]);
      };
    };

    const handleDrop = (event) => {
      event.preventDefault();
      const files = Array.from(event.dataTransfer.files);
      setImages([...images, ...files]);
    }

    const handleRemove = (index) => {
      const newImages = [...images];
      newImages.splice(index, 1);
      setImages(newImages);
      let nextSlideIndex = selectedSlideIndex;
      if (nextSlideIndex === newImages.length) {
       nextSlideIndex -= 1;
      }

      setSelectedSlideIndex(nextSlideIndex);
    }
    
    const handleChangeTypes = (event) => {
      setType(event.target.value);
    };
    const handleChangeYears = (event) => {
      setCondition(event.target.value);
    };

    function allowDrop(event) {
      event.preventDefault();
    }
    
    function drag(event) {
      event.dataTransfer.setData("text/plain", event.currentTarget.id);
    }
    
    function drop(event) {
      event.preventDefault();
      const id = event.dataTransfer.getData("text/plain");
      const node = document.getElementById(id);
      if (node) {
        event.target.appendChild(node);
      } else {
        console.error(`Unable to find element with ID ${id}`);
      }
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      if(type && images && location && condition && title && price && disc){
        const existingProd = JSON.parse(localStorage.getItem('prod')) || [];
        const newItem = {id,type, images,location, condition,title, price, disc };
        const updatedProd = [...existingProd, newItem]
        localStorage.setItem('prod', JSON.stringify(updatedProd))
        console.log(localStorage.getItem('prod'));
        setSubmit(true)
        router.push('/')
      }else{
        console.log("error");
      }
    };

    const prev = (event)=>{
      event.preventDefault();
      setSubmit(false)
    }
    const next = (event)=>{
      event.preventDefault();
      if(type && images && location && condition && title && price && disc){
        setSubmit(true)
      }
    }

    function checkButton(){
      if(type && images && location && condition && title && price && disc){
        setBtn(true)
      }else{
        setBtn(false)
      }
    }

    useEffect(()=>{
      checkButton()
    })


  return (
    <div className={style.create}>
      <Head>
        <title>Marketplace</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar show='false' iconSearch='false'/>
      <div className={style.car}>
        {!submit?
        <div className={style.side}>
        <div className={style.head}>
          <div className={style.save}>
            <div className={style.leftSave}>
              <span>Marketplace</span>
              <h2>Item for sale</h2>
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
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Category"
              onChange={handleChangeTypes}
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
            <span className={style.span}>Photos  · {images.length}/20 – You can add up to 20 photos</span>
            {images.length>0?
              <div className={style.imageAdd}>
                  {images.map((image, index) => (
                    <div className={style.img} id={index} key={index} onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)}>
                       {/* <Image
                       id={index}
                       src={image.url}
                       alt="Uploaded Image"
                       onDragStart={(event) => drag(event)}
                       draggable="true"
                     /> */}
                     <img id={index} src={image.url} alt="Uploaded Image" draggable="true" onDragStart={(event) => drag(event)}/>
                     <MdCancel onClick={() => handleRemove(index)}/>
                    </div>
                  ))}
                  <div className={style.boxUpload} onDrop={handleDrop} onDragOver={(event) => event.preventDefault()}>
                    <AiFillFileAdd />
                    <h3>Add Photos</h3>
                    <input type="file"  onChange={handleFileInput}/>
                  </div>
              </div>:
              <div className={style.boxUpload} onDrop={handleDrop} onDragOver={(event) => event.preventDefault()}>
                  <AiFillFileAdd />
                  <h3>Add Photos</h3>
                  <span>or drag and drop</span>
                  <input type="file"  onChange={handleFileInput}/>
              </div>
            }
          </div> 
          <Divider />
         <div className={style.vehicle}>
            <h3 className={style.title}>About this item</h3>
            <span className={style.span}>Help buyers know more about the item that you&apos;re listing.</span>
            <TextField
              id="outlined-basic"
              label="title"
              variant="outlined"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              fullWidth
            
            />
            <TextField 
            
              value={location}
              id="outlined-basic"
              label="Loacation"
              variant="outlined"
              InputProps={{
                startAdornment: <InputAdornment position="start"><FaMapMarkerAlt /></InputAdornment>,
              }}
              onChange={(event) => setLocation(event.target.value)}
              fullWidth
            />
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Condition</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={condition}
              label="Condition"
              onChange={handleChangeYears}
            >
              {cond.map((name) => (
              <MenuItem
                key={name}
                value={name}
               >
              {name}
            </MenuItem>
          ))} 
              
            </Select>
          </FormControl>
          
         </div>
         <Divider />
         <div className={style.price}>
            <h3 className={style.title}>Price</h3>
            <span className={style.span}>Enter your price for this item.</span>
            <TextField
              label="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              name="numberformat"
              id="outlined-basic"
              InputProps={{
                inputComponent: NumericFormatCustom,
              }}
              variant="outlined"
              fullWidth
            
           />
         </div>
         <Divider />
         <div className={style.dcp}>
            <h3 className={style.title}>Description</h3>
            <span className={style.span}>Tell buyers anything that you haven&apos;t had the chance to include yet about your item.</span>
            <TextField
              id="outlined-multiline-static"
              label="Discription"
              multiline
              rows={4}
              value={disc}
              onChange={(event) => setDisc(event.target.value)}
              fullWidth
            
             />
         </div>
         <div className={style.option}>
         <span>Optional</span>
         <p>Marketplace items are public and can be seen by anyone on or off Facebook.
           Items such as animals, drugs, weapons, counterfeits and other items that infringe intellectual
            property aren&apos;t allowed on Marketplace.<span>See our Commerce Policies.</span> 
         </p>
         </div>
         
         </div>

        
         <div className={style.complet}>
          <div className={style.checkComplet}>
            <div className={style.barComplet}></div>
            <div className={style.emptyComplet}></div>
          </div>
          <Divider />
          <button className={!btn ?style.btnDis:style.btnSubmit} onClick={next}>Next</button>
         </div>
        </div>:
        <div className={style.side}>
         <form onSubmit={handleSubmit}>
          <div className={style.head}>            
          <div className={style.headSide}>
             <Link href="/">
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 16 16">
                 <path d="M 2.75 2.042969 L 2.042969 2.75 L 2.398438 3.101563 L 7.292969 8 L 2.042969 13.25 L 2.75 13.957031 L 8 8.707031 L 12.894531 13.605469 L 13.25 13.957031 L 13.957031 13.25 L 13.605469 12.894531 L 8.707031 8 L 13.957031 2.75 L 13.25 2.042969 L 8 7.292969 L 3.101563 2.398438 Z"></path>
               </svg>
             </Link>
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient>
                <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
                <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
             </svg>
          </div>
          <div className={style.save}>
            <div className={style.leftSave}>
              <span>Marketplace</span>
              <h2>List in more places</h2>
            </div>
          </div>
          </div>
          <Divider />
          <div className={style.listPubl}>
            <h3>List publicly</h3>
            <div className={style.publicty}>
              <div className={style.icon}>
                 <MdStorefront />
              </div>
              <div className={style.infPublicty}>
                 <h4>Marketplace</h4>
                 <p>Marketplace items are public and can be seen by anyone on or off Facebook</p>
              </div>
              <Checkbox {...label} disabled checked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>
            </div>
          </div>
          <div className={style.complet}>
          <div className={style.checkComplet}>
            <div className={style.barComplet}></div>
            <div className={style.barComplet}></div>
          </div>
          <Divider />
          <div className={style.btns}>
            <button className={style.btnPrev} onClick={prev}>Previous</button>
            <button className={!btn ?style.btnDis:style.btnSubmit} type="submit">Publish</button>
          </div>
         </div>
         </form>
        </div>
        }
       <ViewCars 
         selected={selectedSlideIndex}
         setSelected={setSelectedSlideIndex}
         title={title}
         photo={images}
         price={price}
         make={title}
         disc={disc}
         location={location}
        />
      </div>
    </div>
  )
}
