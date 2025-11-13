import { useState } from 'react'
import './App.css'
import axios from 'axios';

const enpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts';

axios.post('endpoint')
.then(response =>{

const result = response.data;


})

const [formData, setFormData]= useState({ 
  author: " ",
  title: " ",
  body: " ",
  public: true



});




function App() {
  
  
  
  
  
  
  
  
  
  
  
  return (
    <>
     







    </>
  )
}


export default App