import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
  const { grid } = props;
  const { desc } = props;
  let location = useLocation();

  return (
    <div
      className={`${location.pathname === '/store' ? `col-${grid}` : 'col-3'}`}
    >
      <Link>
        <div className='featured-card position-relative mb-3'>
          <div className='featured-wishlist-icon position-absolute'>
            <button>
              <img src='images/wish.svg' alt='wish' />
            </button>
          </div>
          <div className='featured-image img-fluid d-flex justify-content-center'>
            <img src='images/watch.jpg' alt='product' />
            <img src='images/watch-2.jpg' alt='product' />
          </div>
          <div className='featured-details'>
            <h6 className='featured-details-brand'>Havells</h6>
            <h6 className='featured-details-title'>
              Kids headphones bulk 10 pack multi colored for students
            </h6>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor='#ffd700'
            />
            {`col-${grid}` === 'col-12' ? (
              <div>
                <p className='featured-details-description'>{desc}</p>
              </div>
            ) : (
              ''
            )}
            <p className='featured-details-price'>$199.00</p>
          </div>
          <div className='featured-action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <button>
                <img src='images/prodcompare.svg' alt='compare' />
              </button>
              <button>
                <img src='images/view.svg' alt='view' />
              </button>
              <button>
                <img src='images/add-cart.svg' alt='cart' />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
