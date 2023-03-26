import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Signup = () => {
  return (
    <div>
      <Meta title={'Sign up'} />
      <BreadCrumb title={'Sign Up'} />
      <div className='login py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center'>
              <div className='login-card'>
                <h3 className='login-card_title'>Create Account</h3>
                <form action=''>
                  <div>
                    <input
                      type='text'
                      name='firstname'
                      placeholder='First name'
                      className='form-control mb-2'
                    />
                  </div>
                  <div>
                    <input
                      type='text'
                      name='lastname'
                      placeholder='Last name'
                      className='form-control mb-2'
                    />
                  </div>
                  <div>
                    <input
                      type='tel'
                      name='tel'
                      placeholder='Your phone number'
                      className='form-control mb-2'
                    />
                  </div>
                  <div>
                    <input
                      type='email'
                      name='email'
                      placeholder='Email'
                      className='form-control mb-2'
                    />
                  </div>
                  <div>
                    <input
                      type='password'
                      name='password'
                      placeholder='Password'
                      className='form-control mb-4'
                    />
                  </div>
                  <div>
                    <div className='d-flex flex-column justify-content-center align-items-center gap-15'>
                      <button className='button'>Create</button>
                      <Link to='/login' className='pass-card_cancel'>
                        Cancel
                      </Link>
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

export default Signup;
