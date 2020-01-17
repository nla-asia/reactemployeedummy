import React, { Component } from 'react';
import './Footer.css'; 

class Footer extends Component {
  render() {
    // You can use them as regular CSS styles
    return <footer className="text-muted">
    <div className="container">
      <p className="text-center py-2">Copyright &copy; 2020 </p>
    </div>
  </footer>;
  }
}

export default Footer;