import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpeacialProduct from '../components/SpeacialProduct';

const Home = () => {
  return (
    <div>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img
                  className='img-fluid rounded-3'
                  src='images/main-banner-1.jpg'
                  alt='main banner'
                />
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner position-relative p-1'>
                  <img
                    className='img-fluid rounded-3'
                    src='images/catbanner-01.jpg'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>BEST SALE</h4>
                    <h5>Laptops Max</h5>
                    <p>
                      From $1699.00 or <br /> $64.62/mo.
                    </p>
                  </div>
                </div>
                <div className='small-banner position-relative p-1'>
                  <img
                    className='img-fluid rounded-3'
                    src='images/catbanner-02.jpg'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>15%OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p>
                      Shop the latest band <br /> styles and colors.
                    </p>
                  </div>
                </div>
                <div className='small-banner position-relative p-1'>
                  <img
                    className='img-fluid rounded-3'
                    src='images/catbanner-03.jpg'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy IPad Air</h5>
                    <p>
                      From $599.00 or <br /> $49.91/mo.
                    </p>
                  </div>
                </div>
                <div className='small-banner position-relative p-1'>
                  <img
                    className='img-fluid rounded-3'
                    src='images/catbanner-04.jpg'
                    alt='main banner'
                  />
                  <div className='small-banner-content position-absolute'>
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      High-fidelity playback & <br /> ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2  py-5'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service.png' alt='service' />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $100</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-02.png' alt='service' />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save up to 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-03.png' alt='service' />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-04.png' alt='service' />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory direct price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images/service-05.png' alt='service' />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-3 py-5'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories'>
                <div className='row row-cols-4'>
                  <div className='col-3 d-flex align-items-center'>
                    <div className='d-flex gap-15 align-items-center'>
                      <div>
                        <h6>Computers & Laptop</h6>
                        <p>8 Items</p>
                      </div>
                      <img src='images/laptop.jpg' alt='laptop' />
                    </div>
                  </div>
                  <div className='col-3 d-flex align-items-center'>
                    <div className='d-flex gap-15 align-items-center'>
                      <div>
                        <h6>Smart Television</h6>
                        <p>12 Items</p>
                      </div>
                      <img src='images/tv.jpg' alt='tv' />
                    </div>
                  </div>
                  <div className='col-3 d-flex align-items-center'>
                    <div className='d-flex gap-15 align-items-center'>
                      <div>
                        <h6>Smartwatches</h6>
                        <p>13 Items</p>
                      </div>
                      <img
                        className='categories-image-watch'
                        src='images/watch-1.jpg'
                        alt='watch'
                      />
                    </div>
                  </div>
                  <div className='col-3 d-flex align-items-center'>
                    <div className='d-flex gap-45 align-items-center'>
                      <div>
                        <h6>Music & Gaming</h6>
                        <p>4 Items</p>
                      </div>
                      <img
                        className='categories-image'
                        src='images/gamepad.jpg'
                        alt='gamepad'
                      />
                    </div>
                  </div>
                  <div className='col-3 d-flex align-items-center'>
                    <div className='d-flex gap-45 align-items-center'>
                      <div>
                        <h6>Mobiles & Tablets</h6>
                        <p>5 Items</p>
                      </div>
                      <img
                        className='categories-image'
                        src='images/mobile.jpg'
                        alt='mobile'
                      />
                    </div>
                  </div>
                  <div className='col-3 d-flex align-items-center'>
                    <div className='d-flex gap-45 align-items-center'>
                      <div>
                        <h6>Headphones</h6>
                        <p>6 Items</p>
                      </div>
                      <img src='images/headphone.jpg' alt='camera' />
                    </div>
                  </div>
                  <div className='col-3 d-flex align-items-center'>
                    <div className='d-flex gap-15 align-items-center'>
                      <div>
                        <h6>Accessories</h6>
                        <p>10 Items</p>
                      </div>
                      <img src='images/acc.jpg' alt='accessories' />
                    </div>
                  </div>
                  <div className='col-3 d-flex align-items-center'>
                    <div className='d-flex gap-15 align-items-center'>
                      <div>
                        <h6>Portable Speakers</h6>
                        <p>8 Items</p>
                      </div>
                      <img src='images/speaker.jpg' alt='speaker' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      {/* <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className="col-3">
              <div className="famous-card bg-dark">
                <h5>BIG SCREEN</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className='speacial-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
            <SpeacialProduct />
            <SpeacialProduct />
            <SpeacialProduct />
          </div>
        </div>
      </section>
      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className='marque-wrapper py-5'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marque-wrapper-inner'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-01.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-02.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-03.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-04.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-05.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-06.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-07.png' alt='brand' />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest News</h3>
            </div>
            <BlogCard num={'1'} date={'18 March, 2023'} />
            <BlogCard num={'2'} date={'17 March, 2023'} />
            <BlogCard num={'3'} date={'15 March, 2023'} />
            <BlogCard num={'4'} date={'2 March, 2023'} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
