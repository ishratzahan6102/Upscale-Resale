import React from 'react';
import { FaArrowAltCircleRight, FaHome, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'
import logo1 from '../../assets/Phones/visa.png'
import logo2 from '../../assets/Phones/paypal.png'
import logo3 from '../../assets/Phones/master.png'
import img1 from '../../assets/Phones/icons8-facebook-48.png'
import img2 from '../../assets/Phones/icons8-instagram-48.png'
import img3 from '../../assets/Phones/icons8-linkedin-48.png'
import img4 from '../../assets/Phones/icons8-pinterest-48.png'
import img5 from '../../assets/Phones/icons8-twitter-48.png'


const Footer = () => {
  return (


    <footer className="footer flex flex-col-reverse justify-evenly lg:flex-row p-10 lg:p-20  bg-primary text-base-content">
      <div className=''>
        <Link to='/' className="font-bold  lg:text-5xl text-4xl">Astor</Link>
        <p className='text-white-500'>Copyright © Astor. All Right Reserved.</p>
      </div>
      <div>
        <span className=" font-bold text-base text-white-900">INFORMATION</span>
        <a className="link link-hover text-base text-white-500">Blog</a>
        <a className="link link-hover text-base text-white-500">Job</a>
        <a className="link link-hover text-base text-white-500">FAQ</a>
        <a className="link link-hover text-base text-white-500">Privacy Policy</a>
      </div>
      <div>
        <span className=" font-bold text-base text-white-900">USEFUL LINKS</span>
        <a className="link link-hover text-base text-white-500">Refund policy</a>
        <a className="link link-hover text-base text-white-500">Login</a>
        <a className="link link-hover text-base text-white-500">Order status</a>
        <a className="link link-hover text-base text-white-500">Site Map</a>
      </div>
      <div>
        <span className=" font-bold text-base text-white-900">HELP CENTER</span>
        <a className="link link-hover text-base text-white-500">Blog</a>
        <a className="link link-hover text-base text-white-500">Job</a>
        <a className="link link-hover text-base text-white-500">FAQ</a>
        <a className="link link-hover text-base text-white-500">Privacy Policy</a>
      </div>
      <div>
        <span className=" font-bold text-base text-white-900">FOLLOW US ON</span>
        <a className="link link-hover text-base text-white-500">Twitter</a>
        <a className="link link-hover text-base text-white-500">instagram</a>
        <a className="link link-hover text-base text-white-500">Linkedin</a>
        <a className="link link-hover text-base text-white-500">Pinterest</a>
      </div>
    </footer>

  );
};

export default Footer;