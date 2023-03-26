import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Forgotpass = () => {
  return (
    <div>
      <Meta title={'Forgot Password'} />
      <BreadCrumb title={'Forgot Password'} />
      <div className='login py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center'>
              <div className='login-card'>
                <h3 className='pass-card_title'>Reset Your Password</h3>
                <p className='pass-card_desc'>
                  We will send you an email to reset your password
                </p>
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
                    <div className='d-flex flex-column justify-content-center align-items-center gap-10'>
                      <button type='submit' className='button'>
                        Submit
                      </button>
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

export default Forgotpass;
