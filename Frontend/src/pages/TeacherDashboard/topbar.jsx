import React from 'react';
import "../../index.css";
import { useLocation } from 'react-router';

const Topbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  let topbartitle;
  switch (currentPath) {
    case '/teacherdashboard/myquizzes':
      topbartitle = "My Quizzes";
      break;
    case '/teacherdashboard/myuploads':
      topbartitle = "My Uploads";
      break;
    case '/teacherdashboard/mystudents':
      topbartitle = "My Students";
      break;
    case '/teacherdashboard/generatedquiz':
      topbartitle="Generated Quiz";
      break;
    default:
      topbartitle = "Page not found!";
  }
  return (
    <div className='w-full h-auto flex justify-center px-28 py-8'>
      <div className="w-full h-auto bg-gradient-to-l from-[#3FF4A1] to-[#258E5E] rounded-lg p-6 flex justify-center">
        <p className='font-extrabold font-montserrat text-3xl tracking-widest'>{topbartitle}</p>
      </div>
    </div>
  )
}

export default Topbar

