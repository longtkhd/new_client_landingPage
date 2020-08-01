import React from 'react'
import Nav from '../navigation'

export default function About() {
  return (
    <div>
      <Nav active = {'about'}/>
      {/* Header here ========================== */}
     
        <section className="hero-banner-sm magic-ball magic-ball-banner" id="parallax-1" data-anchor-target="#parallax-1" data-300-top="background-position: 0px -80px" data-top-bottom="background-position: 0 100px">
          <div className="container">
            <div className="hero-banner-sm-content">
              <h1 style ={{fontSize:'50px',fontWeight:'bold'}}>About Us</h1>
              <p>Air seed winged lights saw kind whales in sixth best a dont seas dron image so fish all tree on</p>
            </div>
          </div>
        </section>
        {/*================Hero Banner SM Area End =================*/}
        {/*================About Area Start =================*/}
      
        {/*================Testimonial section End =================*/}
        {/*================Search Package section Start =================*/}
      

      
    </div>
  )
}
