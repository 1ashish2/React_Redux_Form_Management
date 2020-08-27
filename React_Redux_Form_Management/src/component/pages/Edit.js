import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {useHistory,useParams} from 'react-router-dom'
import {editdata,updatedata} from '../redux/store/store'
 const Edit = () => {
    const history=useHistory()
    let id= useParams()
    const dispatch=useDispatch()
    const formdatavalue=useSelector(state =>state.editform)
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[phone,setPhone]=useState('')
     console.log(formdatavalue)
    useEffect(()=>{
        if(formdatavalue !=null)
        {
            setName(formdatavalue.name);
            setEmail(formdatavalue.email);
            setPhone(formdatavalue.phone)

        }
        dispatch(editdata(id))
    },[formdatavalue])
    const onSubmitChange=(e)=>{
        e.preventDefault();
        //here we r making clone becoz to update previous data with new data
        const updateform=Object.assign(formdatavalue,{
            id:id,
            name:name,
            email:email,
            phone:phone,
        })
        dispatch(updatedata(updateform))
        history.push('/formdata')
    }
    return (
        <div className="container py-5 my-5">
            <h1  className="text-center">Edit Form</h1>
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
                        
                     <button type="submit" class="btn btn-primary btn-block">Update form</button>
                  </form>
        </div>
    )
}
export default Edit
