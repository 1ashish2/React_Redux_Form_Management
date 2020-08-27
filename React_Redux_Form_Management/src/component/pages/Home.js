import React, {useState,useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addtdata} from '../redux/store/store'
import {useHistory} from 'react-router-dom'
import shortid from 'shortid';
 const Home =()=> {
     const history=useHistory()
     const dispatch=useDispatch()
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
  const onSubmitChange=(e)=>{
     e.preventDefault()
     const userdata={
         id:shortid.generate(),
         name:name,
         email:email,
         phone:phone
     }
     //console.log(userdata)
     dispatch(addtdata(userdata))
     history.push('/formdata')
 }
   
        return (
            <div className="container py-5 my-5">
                <h1 className="text-center">Add Form data </h1>
                <form onSubmit={(e)=>onSubmitChange(e)}>
                     <div class="form-group">
                        <input type="text" class="form-control" name="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter full name" />
                         </div>
                         <div class="form-group">
                        <input type="email" class="form-control" name="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter email" />
                         </div>
                       <div class="form-group">
                        <input type="text" class="form-control" name="phone" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Enter phone" />
                         </div>
                        
                     <button type="submit" class="btn btn-primary btn-block">Submit</button>
                  </form>
             </div>
        )
    
}
export default Home
