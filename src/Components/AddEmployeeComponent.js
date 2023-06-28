import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService';


const AddEmployeeComponent = () => {
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [emailId, seteEmailId]=useState('');
    const {id}=useParams();
   

    const saveOrUpdateEmployee=(e)=>{
        const employee={firstName,lastName,emailId}
       
        if(id){
            EmployeeService.updateEmployee(id, employee).then((response)=>{
                console.log(response.data)
                

            }).catch(error=>{
                console.log(error)
            })

        }
        else{
            e.preventDefault();
            EmployeeService.createEmployee(employee).then((response)=>{
                console.log(response.data);
                
    
            }).catch(error=>{
                console.log(error);
            })
        }
      

    }
    useEffect(()=> {

        EmployeeService.getEmployeeById(id).then((response)=>{
            setFirstName(response.data.firstName)
            setLastName(response.setLastName)
            seteEmailId(response.seteEmailId)

        }).catch(error=>{
            console.log(error)
        })
    },[])

    const title=()=>{
        if(id){
            return (<h2 className='text-center'>Update Employee</h2>)
        }
        else
        return <h2 className='text-center'>Add Employee</h2>
    }


  return (

    <div>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    {
                        title()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input 
                                    type="text" 
                                    placeholder='Enter First Name' 
                                    name='firstName'
                                    value={firstName}
                                    className='form-control'
                                    onChange={(e)=>setFirstName(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input 
                                    type='text' 
                                    placeholder='Enter Last Name' 
                                    name='lastName'
                                    value={lastName}
                                    className='form-control'
                                    onChange={(e)=>setLastName(e.target.value)}
                                >
                                 </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email Id:</label>
                                <input 
                                    type="email" 
                                    placeholder='Enter email' 
                                    name='emailId'
                                    value={emailId}
                                    className='form-control'    
                                    onChange={(e)=>seteEmailId(e.target.value)}
                                >
                                </input>
                            </div>
                            <button className='btn btn-success' onClick={(e)=>saveOrUpdateEmployee(e)}>Save</button>
                            <Link to="/employees" className='btn btn-danger m-2'>Cancel</Link>
                            <Link to="/employees" className='btn btn-danger m-2'>List of Employees</Link>
                    </form>
                </div>
            </div>
        </div>

        </div>
    </div>
  )
}

export default AddEmployeeComponent