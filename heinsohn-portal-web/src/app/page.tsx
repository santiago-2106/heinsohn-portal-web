'use client'; 

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Breadcrumbs() {
  return (
    <nav className="flex items-center text-gray-500 text-sm sm:text-base font-light">
      
      <div className="flex items-center gap-1 hover:text-gray-900 cursor-pointer transition-colors">
        <HomeOutlinedIcon sx={{ fontSize: 22 }} /> 
        <span>Home</span>
      </div>

      <NavigateNextIcon 
        sx={{ fontSize: 24 }} 
        className="text-red-600 mx-1"/>

      <div className="hover:text-gray-900 cursor-pointer transition-colors">
        Soluciones
      </div>

      <NavigateNextIcon 
        sx={{ fontSize: 24 }} 
        className="text-red-600 mx-1" 
      />

      <div className="text-gray-800 font-normal">
        Soluciones Digitales
      </div>

    </nav>
  );
}