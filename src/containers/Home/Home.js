import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  axios  from 'axios';
import './Home.css'; 
import EmployeeRow from '../../components/EmployeeRow/EmployeeRow';
import Pagination from "react-js-pagination";



class Home extends React.Component {
   state = {
    employees: [],
  };

  constructor(){
    super();
  }


  componentWillMount(){
      this.fetchEmployees();
  }

  componentDidMount(){

  }

  fetchEmployees(){
    axios.get( 'https://dummy.restapiexample.com/api/v1/employees')
    .then( res => {
        console.log(res);
        this.setState({employees:res.data.data});
    });
  }
  
  handleDelete(id) {
    //console.log(id);
    var cfm = window.confirm("Are you sure to delete ?");
  //  e.preventDefault();
  if(cfm){
    axios.delete( 'http://dummy.restapiexample.com/api/v1/delete/'+id)
    .then( res => {
        console.log(res);
        this.fetchEmployees();
    });
  }
  }

  render() {

   
    const employees = this.state.employees.map(employee=>{
             return <EmployeeRow 
             id={employee.id}
             key={employee.id}
             employee_name={employee.employee_name} 
             employee_salary={employee.employee_salary}
             employee_age={employee.employee_age}
             deleteAction={()=> this.handleDelete(employee.id)}
             />  
            });


    return <React.Fragment>

    <div className="Home">

            <h4>Employees Listing</h4>
              <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Salary</th>
                      <th scope="col">Age</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    { employees }
                  </tbody>
                </table>
    </div>
    </React.Fragment>;
  }
}

export default Home;