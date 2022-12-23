import React from 'react';
import api from '../api/axios';
import { useState } from 'react';
import { useNavigate, generatePath } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const CreateDash = () => {

  const [ inputAddress, setInputAddress ] = useState('');
  const [ inputSQFT, setInputSQFT ] = useState('');
  const [ inputPropType, setInputPropType ] = useState('');
  const [ inputZoning, setInputZoning ] = useState('');
  const [ inputCapRate, setInputCapRate ] = useState('');
  const [ inputYearBuilt, setInputYearBuilt ] = useState('');
  const [ inputSaleType, setInputSaleType ] = useState('');
  const [ inputPrice, setInputPrice ] = useState('');
  

  const navigate = useNavigate();



  async function postData(post) {
    try {
      const response = await api.post('/posts', post);
      const res = response.data.toString()
      const path = generatePath('/dashpage/:id', {
        id: res
      })
      navigate(path)
    } catch (err) {
      console.log(`Error: ${err.message}`);
    };
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      address: inputAddress,
      SQFT: inputSQFT,
      propType: inputPropType,
      zoning: inputZoning,
      capRate: inputCapRate,
      yearBuilt: inputYearBuilt,
      saleType: inputSaleType,
      price: inputPrice
    };

    postData(newPost)
      .then((response) => {
        if (!response) {
          console.log('no res');
        }
      })
      .catch(err => {
        console.log(err)
     });
  }



  return (
    <form onSubmit={handleFormSubmit}>
            <label>Address</label>
            <input 
              type='text'
              value={inputAddress}
              onChange={(e) => setInputAddress(e.target.value)}
            /><br/>

            <label>Sale Type</label>
            <input 
              type='text'
              value={inputSaleType}
              onChange={(e) => setInputSaleType(e.target.value)}
            /><br/>

            <label>SQFT</label>
            <input 
              type='text'
              value={inputSQFT}
              onChange={(e) => setInputSQFT(e.target.value)}
            /><br/>

            <label>Property Type</label>
            <input 
              type='text'
              value={inputPropType}
              onChange={(e) => setInputPropType(e.target.value)}
            /><br/>

            <label>Zoning</label>
            <input 
              type='text'
              value={inputZoning}
              onChange={(e) => setInputZoning(e.target.value)}  
            /><br/>

            <label>Price</label>
            <input 
              type='text'
              value={inputPrice}
              onChange={(e) => setInputPrice(e.target.value)}
            /><br/>

            <label>Year Built</label>
            <input 
              type='text'
              value={inputYearBuilt}
              onChange={(e) => setInputYearBuilt(e.target.value)}
            /><br/>

            <label>Cap Rate</label>
            <input 
              type='text'
              value={inputCapRate}
              onChange={(e) => setInputCapRate(e.target.value)}
            /><br/>

            <Button type='submit' variant='primary'>Submit</Button>
            
        </form>
  )
}

export default CreateDash