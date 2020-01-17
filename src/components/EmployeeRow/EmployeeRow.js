import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
const EmployeeRow =  (props) => (
                    <tr>
                      <td> { props.id }</td>
                      <td> { props.employee_name } </td>
                      <td> { props.employee_salary }</td>
                      <td> { props.employee_age}</td>
                      <td>
                      <Link className="btn btn-xs btn-success" to={`/employee/${props.id}`}>View</Link>
                      <Link className="btn btn-xs btn-info" to={`/edit/${props.id}`}>Edit</Link>
                      <a onClick={()=>{props.deleteAction(props.id)}}  className="btn btn-xs btn-danger">Delete</a>
                      </td>
                    </tr>
);



export default EmployeeRow;