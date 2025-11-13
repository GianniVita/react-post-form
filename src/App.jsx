import { useState } from 'react'

import axios from 'axios';

const endpoint = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts';





function App (){

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: true
  });




  function handleFormData(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

const name = e.target.name
    setFormData({
      ...formData, [name]: value,

    });
  }

  function handleSubmit(e) {
    e.preventDefault()

    axios.post(endpoint,formData)
    .then(response =>{

     const result = response.data;
      console.log(result);
      

    })


  }




  return (
    <>
    
      <div className='container mt-4'>
        <form onSubmit={handleSubmit}>
          <input type="text"
          name = "author"
          value = {formData.author}
          onChange = {handleFormData}
          />
         

          
        <button type='submit'>Conferma</button>
        </form>

      </div>

    </>
  )

}



  
  


export default App



    
    
    

