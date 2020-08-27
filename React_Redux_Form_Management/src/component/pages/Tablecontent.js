import React, {useState,useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {deletedata} from '../redux/store/store'
import {useParams} from 'react-router-dom'
import Avatar from 'react-avatar'
const Tablecontent =()=>{
  const formdata= useSelector(state =>state.formdata);
  const dispatch= useDispatch();
  
  let {id}=useParams()
 
  console.log(id)
   
    
        return (
            <div className="container py-5 my-5">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            formdata.map((ele,index)=>(
                                <tr>
                                <th scope="row">{index + 1}</th>
                            <td><Avatar className="mr-2" name={ele.name} size="45" round={true} />{ele.name}</td>
                            <td>{ele.email}</td>
                            <td>{ele.phone}</td>
                            <td>
                             <Link to={`/formdata/edit/${ele.id}`}>
                                   <span className="material-icons mr-2 ">edit</span>
                               </Link>
                               <Link to={`/formdata/${ele.id}`}>
                                   <span className="material-icons text-danger" onClick={()=>dispatch(deletedata(id))}>delete</span>
                               </Link>
                            </td>
                            
                              </tr>
                            ))
                        }
                       
                       
                    </tbody>
                </table>
            </div>
        )
    
}

export default Tablecontent
