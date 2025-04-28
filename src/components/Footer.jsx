import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo1.png'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare,FaWhatsapp,FaYoutube,FaSnapchat,FaTelegram,FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-yellow-600 text-gray-200 py-10'>
      <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between'>
        {/*  info */}
        <div className='mb-6 md:mb-0'>
            <Link to='/'>
              <img src={Logo} alt="" className='w-32'/>
            </Link>
            <p className='mt-2 text-sm'>High-quality, sustainable clothing at affordable prices.</p>
            <p className='mt-2 text-sm'>Lagos Nigeria</p>
            <p className='text-sm'>Email: sweetmanns@proton.me</p>
            <p className='text-sm'>Phone: +234 907 507 6155 <br />+234 704 535 0626</p>
        </div>
        {/* customer service link */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Customer Service</h3>
            <ul className='mt-2 text-sm space-y-2'>
                <li>Contact Us</li>
                <li>Shipping & Returns</li>
                <li>FAQs</li>
                <li>Order Tracking</li>
                <li>Size Guide</li>
            </ul>
        </div>
        {/* social media links */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Follow Us</h3>
            <div className='flex space-x-4 mt-2'>
            <a href="https://www.facebook.com/profile.php?id=100067875669106" target="_blank" rel="noopener noreferrer">
                <FaFacebook/>
            </a>
            <a href="https://instagram.com/sweetmanns" target="_blank" rel="noopener noreferrer">
                <FaInstagram/>
            </a>
            <a href="https://t.me/sweetmanns" target="_blank" rel="noopener noreferrer">
                <FaTelegram/>
            </a>
            <a href="https://pin.it/45Eb1tpsZ" target="_blank" rel="noopener noreferrer">
                <FaPinterest/>
            </a>
            <a href="https://whatsapp.com/channel/0029Vb0tTR545urvdLU7J0h" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp/>
            </a>
            <a href="https://youtube.com/@sweetmanns?feature=shared" target="_blank" rel="noopener noreferrer">
                <FaYoutube/>
            </a>
            <a href="https://snapchat.com/add/sweetmanns?share_id=eRJ5UtpCb8&locale=en-US" target="_blank" rel="noopener noreferrer">
                <FaSnapchat/>
            </a>
            <a href="https://tiktok.com/@sweetmanns?_t=ZM-8uhMxnPaAb9&_r=1" target="_blank" rel="noopener noreferrer">
                <FaTiktok/>
            </a>
            </div>
        </div>
        {/* newsletter subscription */}
        <div>
            <h3 className='text-xl font-semibold'>Stay in the Loop</h3>
            <p className='mt-2 text-sm'>Subscribe to get special offers, free giveaways, and more</p>
            <form action="" className='mt-4 flex'>
                <input 
                type="email" 
                placeholder='Your email address'
                className='w-full p-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500'
                />
                <button type='submit' className='bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700'>Subscribe</button>
            </form>
        </div>
      </div>
      {/* bottom section */}
      <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
        <p>&copy; {new Date().getFullYear()}<span className='text-red-500'>SweetManns</span>.All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
