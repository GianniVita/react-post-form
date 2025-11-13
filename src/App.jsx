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
        <div className='row justify-content-center'>
          <div className='col-md-8 col-lg-6'>

            <form className="mt-5 rounded" onSubmit={handleSubmit}>
            <label for="author">Autore:</label>
              <input 
              className='form-control'
              type="text"
              name = "author"
              value = {formData.author}
              onChange = {handleFormData}
              />
              <label for="title">Titolo:</label>
            <input 
              className='form-control'
              type = "text" 
              name = "title"
              value = {formData.title}
              onChange = {handleFormData}
              />
              <label for="body">Testo del Post:</label>
              <input
                className='form-control'
                type="text"
                name="body"
                value={formData.body}
                onChange={handleFormData}
              />
              <div className='form-check mb-4'>

              <input
                className='form-check-input'
                type="check box"
                name="public"
                value={formData.public}
                onChange={handleFormData}
              />
              <label className='form-check-lable'>Rendi Pubblico(Spunta per pubblicare subito)<label/>
              </div>



            <div>
            <button type='submit' className='btn btn-success w-100'>Crea Post</button>
              
            </div>  
            </form>
          </div>

        </div>

      </div>

    </>
  )

}



  
  


export default App



    
    
    

