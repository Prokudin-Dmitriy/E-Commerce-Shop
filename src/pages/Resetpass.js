import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Resetpass = () => {
  return (
    <div>
      <Meta title={'Reset Password'} />
      <BreadCrumb title={'Reset Password'} />
      <div className='login py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center'>
              <div className='login-card'>
                <h3 className='login-card_title'>Reset Password</h3>
                <form action=''>
                  <div>
                    <input
                      type='password'
                      name='password'
                      placeholder='New Password'
                      className='form-control mb-4'
                    />
                  </div>
                  <div>
                    <input
                      type='password'
                      name='confpassword'
                      placeholder='Confirm Password'
                      className='form-control mb-4'
                    />
                  </div>
                  <div>
                    <div className='d-flex flex-column justify-content-center align-items-center gap-15'>
                      <button className='button'>Reset</button>
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

export default Resetpass;
