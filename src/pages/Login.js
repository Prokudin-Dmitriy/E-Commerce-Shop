import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Login = () => {
  return (
    <div>
      <Meta title={'Login'} />
      <BreadCrumb title={'Login'} />
      <div className='login py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center'>
              <div className='login-card'>
                <h3 className='login-card_title'>Login</h3>
                <form action=''>
                  <div>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email'
                      className='form-control mb-4'
                    />
                  </div>
                  <div>
                    <input
                      type='password'
                      name='password'
                      placeholder='Password'
                      className='form-control mb-2'
                    />
                  </div>
                  <div>
                    <Link to='/forgot-password' className='login-card_pass mb-4'>Forgot your password?</Link>
                    <div className='d-flex justify-content-center align-items-center gap-15'>
                      <button className='button'>Log In</button>
                      <Link to='/signup' className='button login-card_signup'>Sign Up</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
