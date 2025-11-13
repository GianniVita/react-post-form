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




function handleFormData(e) {
  const value = 
    e.target.public === "checkbox" ? e.target.checked : e.target.value;
    
    setFormData({
      ...formData, [e.target.name] : value,

    });
  
  
  
  }
  
  return (
    <>
    <div className='container mt-4'>

    name= "author"
    checked={formData.author}
    onChange={handleFormaData} 
    id=""   
    

    </div>
    
    
    


    </>
  )


export default App