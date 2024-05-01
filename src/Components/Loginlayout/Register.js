import React, { useEffect } from 'react'
import { Col, Form, Row } from "react-bootstrap";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api_url } from '../../config/config';
import _fetch from '../../config/api';
import toasted from '../../config/toast';

const Register = () => {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);

  const [allFields, setAllFields] = useState({
    'email': '',
    'phone_number': '',
    'password': '',
  });

  const inputValues = (event) => {
    setAllFields({
      ...allFields,
      [event.target.name]: event.target.value
    })
  }

  const SubmitRegister = async () => {

    let data = {
      'email': email,
      'password': password,
      'phone': phone
    }
    let res = await _fetch(`${api_url}auth/signup`, 'POST', data, {});

    if (res?.status === 'success') {
      localStorage.setItem("auth", 'true');
      localStorage.setItem("accessToken", res?.token);
      localStorage.setItem("user", JSON.stringify(res?.data?.user));
      toasted.success(res?.message);
      navigate('/login');

    } else {

      toasted.error(res?.message);
    }
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  return (

    <section className='log-section'>
      <div className='coustom_container'>
        <Row>
          <Col lg={12}>
            <div className='login-outer reg-out'>
              <div className='login-inner'>
                <div className='log-h log-hr'>
                  <h1>Register</h1>
                </div>
                <Form className='form-login'>

                  <div className='form-icon'>
                    <input type="text" className="log-inp" name='email' placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <EmailIcon />
                  </div>
                  <div className='form-icon'>
                    <input type="number" className="log-inp" name='phone_number' placeholder="Phone No." onChange={(e) => setPhone(e.target.value)} value={phone} />
                    <PhoneIcon />
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
                <div className='form-btns form2-btns'>
                  <Link to='#' className='login-btn regis-btn' onClick={SubmitRegister}>Sign up</Link>
                </div>
                <div className='nxt-page'>
                  <p>Already have an account?</p>
                  <Link to="/login">Login</Link>
                </div>

              </div>
            </div>

          </Col>
        </Row>

      </div>

    </section>
  )
}

export default Register