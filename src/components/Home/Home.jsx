import React from 'react'
import './home.css'
import video from '../Assets/video1.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import {  AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebook } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from 'react-icons/tb';



const Home = () => {
  return (
    <section className='home'>
      <div classname='overlay'> </div>
        <video src={video} muted autoPlay loop typeof='video/mp4'></video>
        
        <div className='homeContent container'>
          <div className='textDiv'>

            <span className='smallText'>
                 Our Packages
            </span>

            <h1 className='homeTitle'>
              Search your Holiday
            </h1>
          </div> 
          <div className='cardDiv'>
            <div className='destinationInput'>
              <label htmlFor='city'> Search your destination:
              </label>
              <div className='input flex'>
               <input type='text' placeholder='Enter name here.....' />
               <GrLocation className='icon'  />
              </div>
            </div>

            <div className='dateInput'>
              <label htmlFor='city'> Search your date:
              </label>
              <div className='input flex'>
               <input type='date'/>
              </div>
            </div>

            <div className='priceInput'>
              <div className='label_total flex'>
                <label htmlFor='price'>Max Price:</label>
                <h3 className='total' >$5000</h3>
              </div>
              <div className='input flex'>
                <input type='range' min='1000' max='10000' step='100' />
              </div>
            </div>

            <div className='searchOptions flex'>
               <HiFilter className='icon' />
               <span >MORE FILTER</span>
            </div>
          </div> 

          <div className='homeFooterIcons flex'>
            <div className='rightIcons'>
              <FaFacebook className='icon' />
              <AiOutlineInstagram className='icon' />
              <SiTripadvisor className='icon' />
            </div> 

            <div className='leftIcons'>
              <BsListTask className='icon' />
              <TbApps className='icon' />
            </div>
           </div> 
      </div>
    </section>
  )
}

export default Home