import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const string ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur soluta quam nihil natus, esse minus officiis aperiam illum id, ratione autem earum accusamus consectetur pariatur inventore ab laudantium voluptatum vitae?';

  return (
    <div>
      <Meta title={'Our Store'} />
      <BreadCrumb title={'Our Store'} />
      <div className='store py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-3'>
              <div className='filter-card mb-3'>
                <h3 className='filter-card_title'>Shop By Categories</h3>
                <div>
                  <ul className='filter-card_choice'>
                    <li>Watch</li>
                    <li>Laptop</li>
                    <li>Smartphone</li>
                    <li>Headphones</li>
                  </ul>
                </div>
              </div>
              <div className='filter-card'>
                <h3 className='filter-card_title'>Filter By</h3>
                <div>
                  <h5 className='filter-card_subtitles'>Availablity</h5>
                  <div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name=''
                        id=''
                      />
                      <label className='form-check-label' htmlFor=''>
                        In Stock (1)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name=''
                        id=''
                      />
                      <label className='form-check-label' htmlFor=''>
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className='filter-card_subtitles'>Price</h5>
                  <div className='d-flex align-items-cente gap-10'>
                    <div className='form-floating'>
                      <input
                        type='text'
                        className='form-control py-1'
                        id='floatingInput'
                        placeholder='From'
                      />
                      <label htmlFor='floatingInput'>From</label>
                    </div>
                    <div className='form-floating'>
                      <input
                        type='text'
                        className='form-control py-1'
                        id='floatingInput1'
                        placeholder='To'
                      />
                      <label htmlFor='floatingInput1'>To</label>
                    </div>
                  </div>
                  <h5 className='filter-card_subtitles'>Color</h5>
                  <div>
                    <ul className='filter-card_colors ps-0'>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className='filter-card_subtitles'>Size</h5>
                  <div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name=''
                        id='size-1'
                      />
                      <label className='form-check-label' htmlFor='size-1'>
                        XL (2)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name=''
                        id='size-2'
                      />
                      <label className='form-check-label' htmlFor='size-2'>
                        L (2)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name=''
                        id='size-3'
                      />
                      <label className='form-check-label' htmlFor='size-3'>
                        M (2)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name=''
                        id='size-4'
                      />
                      <label className='form-check-label' htmlFor='size-4'>
                        S (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-card_title'>Product Tag</h3>
                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                  <span className='badge bg-dark-subtle text-secondary rounded-3 py-2 px-3'>
                    Headphones
                  </span>
                  <span className='badge bg-dark-subtle text-secondary rounded-3 py-2 px-3'>
                    Laptop
                  </span>
                  <span className='badge bg-dark-subtle text-secondary rounded-3 py-2 px-3'>
                    Mobile
                  </span>
                  <span className='badge bg-dark-subtle text-secondary rounded-3 py-2 px-3'>
                    Samsung
                  </span>
                  <span className='badge bg-dark-subtle text-secondary rounded-3 py-2 px-3'>
                    Apple
                  </span>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className='filter-card_title'>Random Products</h3>
                <div className='product-random d-flex mb-3'>
                  <div className='w-50'>
                    <img
                      src='images/headphone.jpg'
                      className='img-fluid'
                      alt='headphone'
                    />
                  </div>
                  <div className='w-50'>
                    <h6 className='text-3xl'>
                      Kids headphones bulk 10 pack multi colored for students
                    </h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor='#ffd700'
                    />
                    <p>$100.00</p>
                  </div>
                </div>
                <div className='product-random d-flex'>
                  <div className='w-50'>
                    <img
                      src='images/headphone.jpg'
                      className='img-fluid'
                      alt='headphone'
                    />
                  </div>
                  <div className='w-50'>
                    <h6 className='text-3xl'>
                      Kids headphones bulk 10 pack multi colored for students
                    </h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor='#ffd700'
                    />
                    <p>$100.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-9'>
              <div className='filter-sort-grid mb-3'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='mb-0' style={{ width: '100px' }}>
                      Sort By:
                    </p>
                    <select
                      className='form-control form-select'
                      name='sort_by'
                      id='SortBy'
                    >
                      <option value='manual'>Featured</option>
                      <option value='best-selling' selected={true}>
                        Best selling
                      </option>
                      <option value='title-ascending'>
                        Alphabetically, A-Z
                      </option>
                      <option value='title-descending'>
                        Alphabetically, Z-A
                      </option>
                      <option value='price-ascending'>
                        Price, low to high
                      </option>
                      <option value='price-descending'>
                        Price, high to low
                      </option>
                      <option value='created-ascending'>
                        Date, old to new
                      </option>
                      <option value='created-descending'>
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div className='d-flex align-items-center gap-10'>
                    <p className='filter-sort_totalproducts mb-0'>
                      21 Products
                    </p>
                    <div className='d-flex gap-10 align-items-center'>
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        className='filter-sort_image d-block img-fluid'
                        src='images/gr4.svg'
                        alt='grid'
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        className='filter-sort_image d-block img-fluid'
                        src='images/gr3.svg'
                        alt='grid'
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        className='filter-sort_image d-block img-fluid'
                        src='images/gr2.svg'
                        alt='grid'
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        className='filter-sort_image d-block img-fluid'
                        src='images/gr.svg'
                        alt='grid'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='products-list d-flex flex-wrap justify-content-between'>
                <ProductCard grid={grid} desc={string} />
                <ProductCard grid={grid} />
                <ProductCard grid={grid} desc={string} />
                <ProductCard grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStore;
