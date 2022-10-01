import React, { useState } from 'react';
import { FaSearch} from "react-icons/fa";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { GiCrossMark } from "react-icons/gi";

const NavigationBar = () => {
    const navigationMenue = ['Home', 'Academic', 'Department', 'Result', 'Exam']
    const [state, setState] = useState(false)
    return (
    <div>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-4 bg-red-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <button onClick={()=>setState(!state)} class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        {
            state?
            <GiCrossMark  className='text-white w-7 h-7'></GiCrossMark> :
            <AiOutlineMenuUnfold  className='text-white w-7 h-7'></AiOutlineMenuUnfold>
        }
        
      </button>
      
          
          {
            navigationMenue.map(menue=>(
            <div className={`w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start ${state?'top-0 py-2' : 'top-[-300px]'}`}>
                <a className="text-sm font-bold leading-relaxed inline-block mr-4  whitespace-nowrap uppercase text-white" href="#pablo">
              {menue}
            </a>
          </div>
            ))
           
          }
          
          <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
            
            <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
              <div className="flex">
                <span className="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-cyan-600 rounded-full text-sm bg-pink-100 items-center rounded-r-none pl-4 py-3 text-pink-800 border-r-0 placeholder-pink-300">
                <FaSearch></FaSearch>
                </span>
              </div>
              <input type="text" className="px-2 py-2  border border-solid  border-cyan-600 rounded-full text-sm leading-snug text-pink-700 bg-pink-100 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-pink-300" placeholder="Search pink" />
            </div>
          </div>
        </div>
      </nav>
    </div>
    );
};

export default NavigationBar;