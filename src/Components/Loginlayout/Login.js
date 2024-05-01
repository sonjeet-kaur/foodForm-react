import React from 'react'
import { Col, Form, Row } from "react-bootstrap";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import _fetch from '../../config/api';
import { api_url } from '../../config/config';
import toasted from '../../config/toast';


const Login = () => {

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [allFields, setAllFields] = useState({
    'email': '',
    'password': ''
  });

  const inputFieldsData = (event) => {
    setAllFields({
      ...allFields,
      [event.target.name]: event.target.value
    })
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const loginSubmit = async () => {

    let data = {
      'email' : email,
      'password' : password
    }
    let res = await _fetch(`${api_url}auth/login`, 'POST', data, {});
    if (res?.status === 'success') {
      localStorage.setItem("auth", 'true');
      localStorage.setItem("accessToken", res?.token);
      localStorage.setItem("user", JSON.stringify(res?.data?.user));
      toasted.success(res?.message);
      navigate('/');

    } else {

      toasted.error(res?.message);
    }
  }

  return (
    <section className='log-section'>
      <div className='coustom_container'>
        <Row>
          <Col lg={12}>
            <div className='login-outer'>
              <div className='login-inner'>
                <div className='log-h'>
                  <h1>Login</h1>
                </div>
                <Form className='form-login'>
                  <div className='form-icon'>
                    <input type="text" className="log-inp" name='username' placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <EmailIcon />
                  </div>
                  <div className='form-icon'>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      name='password'
                      onChange={(e) => setPassword(e.target.value)}
                      className='log-inp1'
                      placeholder="Password"
                    />

                    <button className='on-btn' type="button" onClick={handleTogglePassword}>
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </button>
                  </div>
                </Form>
                <div className='form-btns'>
                  <Link to='#' className='login-btn' onClick={loginSubmit}>Login</Link>
                </div>

                <div className='nxt-page'>
                  <p>Don't have an account?</p>
                  <Link to="/register">Register Now</Link>
                </div>

              </div>
            </div>

          </Col>
        </Row>

      </div>

    </section>
  )
}

export default Login