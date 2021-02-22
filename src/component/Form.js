import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Data from './Data';
import Axios from 'axios';
import {v4 as uuidv4} from 'uuid';
const Form = () => {

   
    const [name,setName]=useState("");
    const [image,setImage]=useState("");
    const [database,setDataBase]=useState([]);
    const API_KEY="b0eef55b619ebc606dac76caef5312d5";
  //  const api_key="aaa44e43ae7d5d3ac3fa484da488c513";
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${name}&per_page=10&format=json&nojsoncallback=1`;
    const getData= async()=>{
     const data =await Axios.get(url);
    console.log(data);
    console.log(data.data.photos.photo);
     setDataBase(data.data.photos.photo);

  };
    const onChange=(e)=>{
        setName(e.target.value);
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        setImage(name);
        getData();
    }
    return (
        <>
       <div className="centerdiv">
       <label><b> <h2>Enter Image  Name {image}</h2></b></label><br/>
       <form onSubmit={onSubmit}>
           <input type="text"  autoComplete="off" onChange={onChange} value={name}/><br/>
            <Button type="submit" color="primary">search</Button>
        </form>
   {database!=""?<Data data={database}/>:null}
        </div>
      </>
  );

}
export default Form;