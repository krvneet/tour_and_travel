import React,{useEffect} from 'react'
import './footer.css'
import video2 from '../Assets/video2.mp4'
import {FiChevronRight, FiSend} from "react-icons/fi"
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
   
  useEffect(() => {
    Aos.init({duration:2000});
  } , [])

  return (
    <section className="footer">
      <div className='videoDiv'>
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div data-aos="fade-up" className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input data-aos="fade-up" type="text" placeholder="Enter your email Address" />
            <button data-aos="fade-up" className='btn flex' type='submit'>
               SEND <FiSend className="icon" />
            </button>
          </div>
        </div>
        
        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
                <MdOutlineTravelExplore className='icon' />
                 Travel
              </a>
            </div>

            <div data-aos="fade-up" className='footerParagraph'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>

            <div data-aos="fade-up" className='footerSocials flex'>
               <FaXTwitter className='icon' />
               <AiOutlineYoutube className='icon' />
               <AiOutlineInstagram className='icon' />
               <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className='footerLinks grid'>
             {/* group 1 */}
             <div data-aos="fade-up" data-aos-duration="3000" className='linkGroup'>
               <span className='groupTitle'>
                 OUR AGENCY
               </span>

               <li className='footerList flex'>
                 <FiChevronRight className='icon' />
                  Services
               </li>

               <li className='footerList flex'>
                 <FiChevronRight className='icon' />
                  Insurance
               </li>

               <li className='footerList flex'>
                 <FiChevronRight className='icon' />
                  AGENCY
               </li>

               <li className='footerList flex'>
                 <FiChevronRight className='icon' />
                  Tourism
               </li>

               <li className='footerList flex'>
                 <FiChevronRight className='icon' />
                  Payment
               </li>


             </div>
            
             {/* group 2 */}
             <div data-aos="fade-up" data-aos-duration="4000"  className='linkGroup'>
               <span className='groupTitle'>
                  PARTNERS
               </span>
 
               <li className='footerList flex'>
                 <FiChevronRight className='icon' />
                  Booking
               </li>

               <li className='footerList flex'>
                 <FiChevronRight className='icon' />
                  Rentcars
               </li>

               <li className='footerList flex'>
                 <FiChevronRight className='icon' />
                  HostelWorlds
               </li>

               <li className='footerList flex'>
                 <FiChevronRight className='icon' />
                  Trivago
               </li>

               <li className='footerList flex'>
                 <FiChevronRight className='icon' />
                  TripAdvisor
               </li>


             </div>
              
              {/* grouo 3 */}
             <div data-aos="fade-up" data-aos-duration="5000"  className='linkGroup'>
               <span className='groupTitle'>
                 LAST MINUTE
               </span>

               <li className='footerList flex'>
                 <FiChevronRight className='icon' />
                   Thailand
               </li>

               <li className='footerList flex'>
                 <FiChevronRight className='icon' />
                  Japan
               </li>

               <li className='footerList flex'>
                 <FiChevronRight className='icon' />
                  Thailand
               </li>

               <li className='footerList flex'>
                 <FiChevronRight className='icon' />
                  Europe
               </li>

               <li className='footerList flex'>
                 <FiChevronRight className='icon' />
                  Oceania
               </li>


             </div>
          </div>
           
          <div className='footerDiv flex'>
             <small>COPYRIGHTS RESERVED - KEEDATECH 
             2024
             </small>
          </div> 

        </div>
      </div>
    </section>
  )
}

export default Footer