import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import ViewCars from '@/component/viewCars'
import {MdCancel} from 'react-icons/md'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {MdStorefront} from 'react-icons/md'
import {GiWorld} from "react-icons/gi"
import {AiFillFileAdd} from 'react-icons/ai'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Profil from '../public/profile.jpg'
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import style from '../styles/create.module.css'
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import { useRouter } from 'next/router'
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import { NumericFormat } from 'react-number-format';
import Navbar from '@/component/navbar'
import LZString from 'lz-string';
import CircularProgress from '@mui/material/CircularProgress';


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
    const [loading,setLoading]= useState(false)
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

    const handleSubmit = async (event) => {
      event.preventDefault();
      
      if (type && images && location && condition && title && price && disc) {
        try {
          const existingProd = JSON.parse(LZString.decompress(localStorage.getItem('prod')) || '[]');
          const newItem = { id, type, images, location, condition, title, price, disc };
          const updatedProd = [...existingProd, newItem];
          const compressedData = LZString.compress(JSON.stringify(updatedProd));
          localStorage.setItem('prod', compressedData);
          await router.push('/');
          setSubmit(true);
        } catch (error) {
          console.log('Error: ', error);
        }
      } else {
        console.log('error');
      }
    };

    const waitSubmit =(event)=>{
      event.preventDefault();
      setLoading(true)
    }
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
          <div className={style.head}>            
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
            <button 
               className={!btn ?style.btnDis:style.btnSubmit}
               style={{ backgroundColor: !loading ? "#0882de" : "#509eda" }}
               onClick={handleSubmit}
               onMouseDown={waitSubmit}>
                {loading && <CircularProgress className={style.circle} />}
                {'  Publish'}
              </button>
          </div>
         </div>
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
