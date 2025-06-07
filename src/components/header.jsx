import React from 'react';
import { Form, Link } from 'react-router-dom'
import { LoginOutlined } from "@ant-design/icons";

const header = () => {
  return (
    <div className="header">
      {/* Logo */}
      <div className="logo">
        <a href="/" className='logo-name'><h1>Know About Me</h1></a>
      </div>
      <div className="sign-btn">
      <Link to='/form' className='btn-link'><button>ASK <div className="icon"><LoginOutlined /></div></button></Link>
      </div>
    </div>

  )
}

export default header;