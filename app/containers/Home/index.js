import React from 'react';
import '../../assets/css/style.css';
// import '../../assets/css/spinner.css';
// import '../../assets/css/aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import   '../../assets/js/main';
import Nav from './component/navigation/index'

import logo from '../../assets/img/logo.png'
import whitelogo from '../../assets/img/hitlogo.png'
import banner1 from '../../assets/img/banner/banner-1.png'
import asset5 from '../../assets/img/home/asset5.png'
import asset2 from '../../assets/img/home/asset2.png'
import asset3 from '../../assets/img/home/asset3.png'
import asset4 from '../../assets/img/home/asset4.png'
import ptsClass from '../../assets/img/classHit/pts.jpg'
import javaClass from '../../assets/img/classHit/java.png'
import pythonClass from '../../assets/img/classHit/python.png'
import webClass from '../../assets/img/classHit/web.png'
import linh from '../../assets/img/Avatar/Linh.jpg'
import ngoc from '../../assets/img/Avatar/Ngoc.jpg'
import tu from '../../assets/img/Avatar/Tu.jpg'
import bqt from '../../images/pages/500.png'
import tpl from '../../assets/img/Travel/thienphulam.jpg'
import mochau from '../../assets/img/Travel/mochau.png'
import trovetuoitho from '../../assets/img/Travel/trovetuoitho.png'
import banrom from '../../assets/img/Travel/banrom.png'
import bavi from '../../assets/img/Travel/bavi.png'
import trav1 from '../../assets/img/Travel/blog-2.png';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import avatar1 from '../../assets/img/Avatar/avatar.png';
import anh1 from '../../assets/img/Avatar/1.jpg';
import anh2 from '../../assets/img/Avatar/2.jpg';
import anh3 from '../../assets/img/Avatar/3.jpg';
import anh4 from '../../assets/img/Avatar/4.jpg';
import anh5 from '../../assets/img/Avatar/5.jpg';
import anh6 from '../../assets/img/Avatar/6.jpg';
import dulich from '../../assets/img/Avatar/dulich.jpg';

// import avatar from '../../assets/img/Avatar/avatar.png';

export default function Home() {

  return (



    <div>

      {/*================ Header Menu Area start =================*/}

      <Nav active={'home'} />

      {/*================Header Menu Area =================*/}
      {/*================Hero Banner Area Start =================*/}
      <section className="hero-banner magic-ball">
        <div className="container">

          {/* ============================================== */}
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* <img className="d-block w-100" src="..." alt="First slide" /> */}
                <div className="row align-items-center text-center text-md-left ">
                  <div className="col-md-6 col-lg-5 mb-5 mb-md-0">
                    <h1 style={{ fontWeight: 'bold', fontSize: '40px' }}>Chào Mừng Đến Với CLB HIT</h1>
                    <p style={{ fontSize: '20px' }}>CLB HIT là một câu lạc bộ học thuật của Khoa CNTT trường đại học Công Nghiệp Hà Nội,trụ sở tại tầng 9 nhà A1 CS1 </p>
                    <Link className="button button-hero mt-4" to="/login">Đăng Nhập</Link>
                  </div>
                  <div className="col-md-6 col-lg-7 col-xl-6 offset-xl-1">
                    <img className="img-fluid" src={banner1} alt="banner-1" />
                  </div>
                </div>
              </div>
              <div className="carousel-item hero ">
                {/* <img className="d-block w-100" src={avatar1} alt="Second slide" /> */}
                <div className="row align-items-center text-center text-md-left ">
                  <div className="col-md-6 col-lg-7 col-xl-6 offset-xl-1">
                    <img className="img-fluid hero__avatar" src={avatar1} alt="banner-1" />
                  </div>
                  <div className="col-md-6 col-lg-5 mb-5 mb-md-0">
                    <h1 style={{ fontWeight: 'bold', fontSize: '40px' }}>KỶ NIỆM 10 NĂM THÀNH LẬP </h1>
                    <p style={{ fontSize: '20px' }}>CLB HIT là một câu lạc bộ học thuật của Khoa CNTT trường đại học Công Nghiệp Hà Nội,trụ sở tại tầng 9 nhà A1 CS1 </p>
                    <Link className="button button-hero mt-4" to="/login">Đăng Nhập</Link>
                  </div>

                </div>
                {/* 2 */}
              </div>
              {/* <div className="carousel-item">
                <img className="d-block w-100" src="..." alt="Third slide" />
              </div> */}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>


          {/* ============================================= */}
          {/* <div className="row align-items-center text-center text-md-left">
            <div className="col-md-6 col-lg-5 mb-5 mb-md-0">
              <h1 style={{ fontWeight: 'bold', fontSize: '40px' }}>Chào Mừng Đến Với CLB HIT</h1>
              <p style={{ fontSize: '20px' }}>CLB HIT là một câu lạc bộ học thuật của Khoa CNTT trường đại học Công Nghiệp Hà Nội,trụ sở tại tầng 9 nhà A1 CS1 </p>
              <Link className="button button-hero mt-4" to="/login">Đăng Nhập</Link>
            </div>
            <div className="col-md-6 col-lg-7 col-xl-6 offset-xl-1">
              <img className="img-fluid" src={banner1} alt="banner-1" />
            </div>
          </div> */}
        </div>
      </section>

      <section className="section-margin ">
        <div className="container">
          <div className="section-intro text-center pb-90px">

            <h2>TIÊU CHÍ HOẠT ĐỘNG</h2>
            <br />
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="service-card text-center">
                <div className="service-card-img activity-hit">
                  <img className="img-fluid" src={asset2} alt="error" />
                </div>
                <div className="service-card-body">
                  <h2>THINKING</h2>
                  <hr />
                  <h2>Suy Nghĩ</h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="service-card text-center">
                <div className="service-card-img">
                  <img className="img-fluid" src={asset3} alt="error" />
                </div>
                <div className="service-card-body">
                  <h2>CREATIVITY</h2>
                  <hr />
                  <h2>Sáng Tạo</h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="service-card text-center">
                <div className="service-card-img">
                  <img className="img-fluid" src={asset4} alt="error" />
                </div>
                <div className="service-card-body ">
                  <h2 className="text-deco">INNOVATION</h2>
                  <hr />
                  <h2 className="text-deco">Đổi Mới</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*================Hero Banner Area End =================*/}
      {/*================About Area Start =================*/}
      <section className="bg-gray section-padding magic-ball magic-ball-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 mb-4 mb-md-0">
              <div className="about-img">
                <img className="img-fluid" src={asset5} alt="error" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6 align-self-center about-content">
              <h1 style={{ fontWeight: 'bold', fontSize: '40px' }}>VỀ CHÚNG TÔI</h1>
              <p style={{ fontSize: '20px' }}> Câu lạc bộ tin học HIT là Câu lạc bộ học tập sinh viên trực thuộc khoa Công nghệ thông tin trường Đại học công nghiệp Hà Nội. Được thành lập vào ngày 18/8/2010.</p>
              <a className="button" href="https://www.facebook.com/HITClub.HaUI/">Chi tiết</a>
            </div>
          </div>
        </div>
      </section>
      {/*================Service Area Start =================*/}
      {/*================Activity of Club Start =================*/}

      {/*================Activity of Club End =================*/}
      {/*================Image of CLub Start =================*/}
      <section className="section-margin pb-xl-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 bgCam" >
              <div className='bg-light'>
                <div className="tour-card " style={{ marginTop: '10px' }}>
                  <img className="card-img rounded-0" src={ptsClass} alt="" />
                  <div className="tour-card-overlay">
                    <div className="media">
                      <div className="media-body">
                        <h4>Lớp Học Photoshop</h4>
                        <small>Lớp học nhằm mục đích nâng cao tư duy về đồ họa và thiết kế </small>
                      </div>
                    </div>

                  </div>


                </div>
                <div className="col-lg-10 offset-lg-1 bg-l">

                  <div style={{ paddingBottom: '1px' }}>
                    <h2>Hoạt động chính</h2>
                    <p>Mở những lớp chia sẻ kiến thức về các lĩnh vực trong ngành, tham gia các cuộc thi trong và ngoài trường, tổ chức các hoạt động trải nghiệm và hội thảo. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 bgCam">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="tour-content">
                    <h2>Hoạt động chính</h2>
                    <p>Mở những lớp chia sẻ kiến thức về các lĩnh vực trong ngành, tham gia các cuộc thi trong và ngoài trường, tổ chức các hoạt động trải nghiệm và hội thảo. </p>
                  </div>
                </div>
              </div>
              <div className="tour-card">
                <img className="card-img rounded-0" src={webClass} alt="" style={{ height: '100%' }} />
                <div className="tour-card-overlay">
                  <div className="media">
                    <div className="media-body">
                      <h4>Lớp Web  </h4>
                      <small>Đến với lớp Web , các bạn sẽ được định hướng rõ hơn về thiết kế web</small>
                      {/* <p>We proper guided our tourist</p> */}
                    </div>
                    {/* <div class="media-price">
            <h4 class="text-primary">$65/day</h4>
          </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 bgCam">

              <div className="tour-card">
                <img className="card-img rounded-0" src={pythonClass} alt="" />
                <div className="tour-card-overlay">
                  <div className="media">
                    <div className="media-body">
                      <h4>Lớp Python </h4>
                      <small>something...</small>
                      {/* <p>We proper guided our tourist</p> */}
                    </div>
                    {/* <div class="media-price">
            <h4 class="text-primary">$65/day</h4>
          </div> */}
                  </div>
                </div>


              </div>
              <div className="col-lg-10 offset-lg-1 bg-l">
                <div className="tour-content">
                  <h2>Hoạt động chính</h2>
                  <p>Mở những lớp chia sẻ kiến thức về các lĩnh vực trong ngành, tham gia các cuộc thi trong và ngoài trường, tổ chức các hoạt động trải nghiệm và hội thảo. </p>
                </div>
              </div>

            </div>
            <div className="col-md-6 col-lg-6 bgCam">
              <div className='bg-light'>
                <div className="col-lg-10 offset-lg-1 bg-l">
                  <div className="tour-content">
                    <h2>Hoạt động chính</h2>
                    <p>Mở những lớp chia sẻ kiến thức về các lĩnh vực trong ngành, tham gia các cuộc thi trong và ngoài trường, tổ chức các hoạt động trải nghiệm và hội thảo. </p>
                  </div>
                </div>
                <div className="tour-card">
                  <img className="card-img rounded-0" src={javaClass} alt="" />
                  <div className="tour-card-overlay">
                    <div className="media">
                      <div className="media-body">
                        <h4>Lớp Java</h4>
                        <small>Something...</small>
                        {/* <p>We proper guided our tourist</p> */}
                      </div>
                      {/* <div class="media-price">
            <h4 class="text-primary">$65/day</h4>
          </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*================Image of CLub End =================*/}
      <section className="bg-gray section-padding magic-ball magic-ball-testimonial pb-xl-5">
        <div className="container-fluid">
          <div className="leader container-fluid w-75">
            <div className="headline">
              <div className="section-intro text-center pb-90px">

                <h2>BAN CHỦ NHIỆM</h2>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card card-img-pr">
                  <img src={ngoc} className="card-img" alt="" />
                  <div className="info pt-4">
                    <h2>Hoàng Thị Bích Ngọc</h2>
                    <h4>Phó chủ nhiệm hoạt động</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-img-pr">
                  <img src={linh} className="card-img" alt="" />
                  <div className="info pt-4">
                    <h2>Nguyễn Đức Linh</h2>
                    <h4>Chủ nhiệm câu lạc bộ</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card card-img-pr">
                  <img src={tu} className="card-img" alt="" />
                  <div className="info pt-4">
                    <h2>Đoàn Phùng Tú</h2>
                    <h4>Phó chủ nhiệm học tập</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/*================Blog section Start =================*/}
      <section className="section-padding bg-gray">
        <div className="container-fluid">
          <div className="container-fluid portfolio">
            <div className="headline">
              <div className="section-intro text-center pb-90px">

                <h2>BỘ SƯU TẬP</h2>
                <hr />
              </div>
            </div>
            <div className="portfolio-in">
              <div className="pic">
                <div className="pic-in"><img src={anh1} alt="" /></div>
              </div>
              <div className="pic">
                <div className="pic-in"><img src={anh2} alt="" /></div>
              </div>
              <div className="pic">
                <div className="pic-in"><img src={anh3} alt="" /></div>
              </div>
            </div>
            <div className="portfolio-in">
              <div className="pic">
                <div className="pic-in"><img src={anh4} alt="" /></div>
              </div>
              <div className="pic">
                <div className="pic-in"><img src={anh5} alt="" /></div>
              </div>
              <div className="pic">
                <div className="pic-in"><img src={anh6} alt="" /></div>
              </div>
            </div>
          </div>



        </div>
      </section>


      <section className="section-padding bg-gray">
        <div className="container-fluid">
          <div className="container contact mt-4">
            <div className="headline">
              <div className="my-wrapper">
                <p className="headline__content">
                  LIÊN HỆ
      </p>
                <hr className="headline__border-bottom" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                  <li><i className="fa fa-thumbtack" style={{ color: '#418DD8' }} /> &nbsp;&nbsp;&nbsp; 9th floor, A1, HaUI
        </li>
                  <li className="mt-2 mb-2"><i className="fa fa-phone-square" style={{ color: 'rgb(32, 212, 32)' }} />
          &nbsp;&nbsp; Admin: 0396500575</li>
                  <li className="mb-2"><i className="fa fa-envelope-open-text" style={{ color: 'rgb(255, 0, 0)' }} /> &nbsp;
          Facebook.com/HITClub.HaUI</li>
                  <li><i className="fab fa-facebook-square" /> &nbsp;&nbsp; HIT - Learning Corner</li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="w-100">
                  <img className="w-100" src={dulich} alt="" />
                </div>
              </div>
            </div>
          </div>






        </div>
      </section>


      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>About US</h6>
                <p>
                  HIT CLUB
          </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>CONTACT</h6>
                <div className="row">
                  <div className="col">
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Facebook</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Portfolio</a></li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul>
                      <li><a href="#">Team</a></li>
                      <li><a href="#">Pricing</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Newsletter</h6>
                <p>
                  For business professionals caught between high OEM price and mediocre print and graphic output.
          </p>

              </div>
            </div>
            <div className="col-lg-3  col-md-6 col-sm-6">
              <div className="single-footer-widget mail-chimp">
                <h6 className="mb-20">InstaFeed</h6>
                <ul className="instafeed d-flex flex-wrap">
                  {/* <li><img src="img/instagram/i1.jpg" alt="" /></li>
                  <li><img src="img/instagram/i2.jpg" alt="" /></li>
                  <li><img src="img/instagram/i3.jpg" alt="" /></li>
                  <li><img src="img/instagram/i4.jpg" alt="" /></li>
                  <li><img src="img/instagram/i5.jpg" alt="" /></li>
                  <li><img src="img/instagram/i6.jpg" alt="" /></li>
                  <li><img src="img/instagram/i7.jpg" alt="" /></li>
                  <li><img src="img/instagram/i8.jpg" alt="" /></li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <p className="col-lg-8 col-sm-12 footer-text m-0 text-center text-lg-left">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by  <a href="https://colorlib.com" target="_blank"> HIT</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
              <div className="col-lg-4 col-sm-12 footer-social text-center text-lg-right">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-dribbble" /></a>
                <a href="#"><i className="fab fa-behance" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>


      {/*================Blog section End =================*/}
      {/* ================ start footer Area ================= */}

      {/* ================ End footer Area ================= */}
    </div >


  );
}
