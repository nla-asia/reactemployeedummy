import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Show.css'; 
import axios from 'axios';
import moment from 'moment';

class Show extends Component {
  state = {
    employee:{},
  }
  id = null
  constructor(props){
    super();
    console.log(props.match.params.id);
    this.id = props.match.params.id;
  }
  componentDidMount(){
    let id = this.id;
    axios.get('https://dummy.restapiexample.com/api/v1/employee/'+id)
    .then( res => {
        console.log(res);
        this.setState({employee:res.data});
    });
  }

  render() {
    let {employee} = this.state;
    // You can use them as regular CSS styles
    return <div className="Show" >
      <h3 className="h3">{employee.employee_name}</h3>
      
      <table className="table table-bordered">
      <tbody>
      <tr>
         <td>Ref ID :</td>
         <td> {employee.id} </td>
       </tr>
       <tr>
         <td>Name :</td>
         <td> {employee.employee_name} </td>
       </tr>
       <tr>
         <td>Salary :</td>
         <td> {employee.employee_salary} </td>
       </tr>
       <tr>
         <td>Age :</td>
         <td> {employee.employee_age} </td>
       </tr>
       </tbody>
      </table>

     <p className="text-right"> 
       <Link className="btn btn-xs btn-default" to='/'>Back to List</Link>
     </p>
    </div>;
  }
}

export default Show;