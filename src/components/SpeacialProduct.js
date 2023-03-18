import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const SpeacialProduct = () => {
  return (
    <div className='col-4 mb-3'>
      <div className='special-card'>
        <div className='d-flex justify-content-between'>
          <div>
            <img className='img-fluid' src='images/watch.jpg' alt='watch' />
          </div>
          <div className='special-content'>
            <h5 className='special-content-brand'>Samsung</h5>
            <h6 className='special-content-title'>
              Samsung Galaxy Note10+ Mobile Phone
            </h6>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor='#ffd700'
            />
            <p className='special-content-price'>
              $100 &nbsp; <strike>$200</strike>
            </p>
            <div className='special-content-discount mb-3 d-flex align-items-center gap-10'>
              <p className='mb-0'>
                <b>5</b> days
              </p>
              <div className='d-flex gap-10 align-items-center'>
                <span className='discount-badge rounded-circle p-2 bg-danger'>08</span>:
                <span className='discount-badge rounded-circle p-2 bg-danger'>35</span>:
                <span className='discount-badge rounded-circle p-2 bg-danger'>12</span>
              </div>
            </div>
            <div className='special-prod-count mb-3'>
              <p>Products: 5</p>
              <div
                className='progress'
                role='progressbar'
                aria-label='Basic example'
                aria-valuenow='25'
                aria-valuemin='0'
                aria-valuemax='100'
              >
                <div className='progress-bar' style={{ width: '33%' }}></div>
              </div>
            </div>
            <Link className='button'>Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeacialProduct;
