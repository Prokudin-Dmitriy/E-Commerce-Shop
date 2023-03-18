import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ num, date }) => {
  return (
    <div className='col-3'>
      <div className='blog-card'>
        <div className='card-image'>
          <img
            className='img-fluid'
            src={`images/blog-${num}.jpg`}
            alt='blog'
          />
        </div>
        <div className='blog-content'>
          <p className='blog-content-date'>{date}</p>
          <h5 className='blog-content-title'>
            A beautiful Sunday morning renaissance
          </h5>
          <p className='blog-content-desc'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime a
            hic, perferendis eveniet corrupti deserunt provident ducimus
          </p>
          <Link to='/' className='button'>
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
