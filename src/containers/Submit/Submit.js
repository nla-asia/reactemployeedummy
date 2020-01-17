import React, { Component } from 'react';
import './Submit.css'; 
import axios from 'axios';
import { Link } from 'react-router-dom';
//var $ = window.$;

class Submit extends Component {
  
  state = {
    name: '',
    salary:'',
    age:'',
  };
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  handleSubmit(event) {
    event.preventDefault();
    const { name, salary, age } = this.state;
    const employee = {name, salary, age };

    axios.post('http://dummy.restapiexample.com/api/v1/create',employee)
    .then(res=>{
      console.log(res);
      this.props.history.push('/');
    })
    .catch(err=>{
      console.log(err);
    });

  }

  render() {
 
  let {name, salary, age} = this.state;

    return <div className="Submit">
    <form  onSubmit={this.handleSubmit}>
        <h1>Add New Employee </h1>
        
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={name}  onChange={this.onChange}  className="form-control" required />
        </div>

        <div className="form-group">
            <label>Salary</label>
            <input type="number" name="salary" value={salary}  onChange={this.onChange}  className="form-control" />
        </div>

        <div className="form-group">
            <label>Age</label>
            <input type="number" name="age" value={age}  onChange={this.onChange} className="form-control" />
        </div>

      
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link className="btn btn-default" to="/">Back to List</Link>
      </form>  
    </div>;
  }
}

export default Submit;