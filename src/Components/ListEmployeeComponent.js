import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../Service/EmployeeService';

const ListEmployeeComponent = () => {
    const [employee, setEmployees]= useState([]);

    useEffect(()=>{
       getAllemployees();
    },[])
    const getAllemployees=()=>{
        EmployeeService.getAllEmployees().then((response)=>{
            setEmployees(response.data)
            console.log(response.data);

        }).catch(error=>{
            console.log(error); 
        })
    }

    const deleteEmployee=(employeeId)=>{
        EmployeeService.deleteEmployee(employeeId).then((response)=>{
            setEmployees(response.data)
            getAllemployees();

        }).catch(error=>{
            console.log(error);
        })
    }

  return (
    <div className="container">
        <h2 className="text-center">List Employees</h2>
        <Link to="/add-employee" className="btn btn-success m-3">Add Employee</Link>
        <table className='table table-borderes table-striped'>
            <thead>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    employee.map(
                        employee=>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                            <td>
                                <Link className="btn btn-info m-1" to={`/edit-employee/${employee.id}`}>Update</Link>
                                <Link className="btn btn-danger m-1" onClick={()=>deleteEmployee(employee.id)}>Delete</Link>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
  )
}

export default ListEmployeeComponent