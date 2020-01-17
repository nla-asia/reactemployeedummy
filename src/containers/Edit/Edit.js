import React, { Component } from 'react';
import './Edit.css'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {
  state = {
    employee : {
      name: '',
      salary:'',
      age:'',
    }
  };
  id = null

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(props.match.params.id);
    this.id = props.match.params.id;
  }

  

  componentWillMount(){
    let id = this.id;
    axios.get('https://dummy.restapiexample.com/api/v1/employee/'+id)
    .then( res => {
        console.log(res.data);
        this.setState({employee: res.data});
    });
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.title);
    event.preventDefault();
    console.log(this.state);
    const { name, salary, age } = this.state;
    const data = {name, salary, age };
    axios.put('https://dummy.restapiexample.com/api/v1/update/'+this.id,data)
    .then(res=>{
      console.log(res);
      this.props.history.push('/');
    });
  }

  render() {
   
    let { name, salary, age } = this.state.employee;

    return <div className="Edit">
    <form  onSubmit={this.handleSubmit}>
    <h1>Update Employee </h1>
        
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
      
        <button type="submit" className="btn btn-primary">Update</button>
        <Link className="btn btn-default" to="/">Back to List</Link>
      </form>  
    </div>;
  }
}

export default Edit;