import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram, } from 'react-icons/bs';

const Footer = () => {
  return (
    <div>
      <footer className='py-4'>
        <div className='container-xl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter' />
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control py-1'
                  placeholder='Your Email'
                  aria-label='Your Email'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text p-2' id='basic-addon2'>
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  Street: 3593 Marshall Street
                  <br />
                  Brooklyn, Maryland
                  <br />
                  Zip code: 21225
                </address>
                <a
                  href='tel:+1410-636-0826'
                  className='mt-3 d-block mb-1 text-white'
                >
                  +1410-636-0826
                </a>
                <a
                  href='mailto:zouffessomefi-4626@yopmail.com'
                  className='mt-2 d-block mb-0 text-white'
                >
                  zouffessomefi-4626@yopmail.com
                </a>
                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <Link className='text-white' to='/'>
                    <BsLinkedin className='fs-4' />
                  </Link>
                  <Link className='text-white' to='/'>
                    <BsInstagram className='fs-4' />
                  </Link>
                  <Link className='text-white' to='/'>
                    <BsGithub className='fs-4' />
                  </Link>
                  <Link className='text-white' to='/'>
                    <BsYoutube className='fs-4' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div>
                <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                  <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                  <Link className='text-white py-2 mb-1'>Terms of Service</Link>
                  <Link className='text-white py-2 mb-1'>Size Blogs</Link>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div>
                <div className='footer-links d-flex flex-column'>
                  <Link className='text-white py-2 mb-1'>About Us</Link>
                  <Link className='text-white py-2 mb-1'>FAQ</Link>
                  <Link className='text-white py-2 mb-1'>Contact</Link>
                  <Link className='text-white py-2 mb-1'>Size Chart</Link>
                </div>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Smart Watches</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()}, Powered by Developer Prokudin
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;