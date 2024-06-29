import React from "react";
import "../index.css"
import { Logo } from "../images";
import { useState,useEffect } from "react";

export default function Header(){
    const [state,nextState]=React.useState(false);
    function toggle(){
      nextState(prev=>!prev);
    }
    const paste = () => {
      if (window.innerWidth > 754) {
        return big;
      } else {
        return small;
      }
    };
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
      // This will re-render the component when the window is resized
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const big=(<>
                  <div className="px-[25px] py-[12px] bg-[#18181b] hover:bg-[#27272a] cursor-pointer">Raise Alert</div>
                  <div className="px-[25px] py-[12px] bg-[#18181b] hover:bg-[#27272a] cursor-pointer">DashBoard</div>
                  <div className="px-[25px] py-[12px] bg-[#18181b] hover:bg-[#27272a] cursor-pointer">Login</div>
              </>)
    const small=(<>
              <div className="flex justify-center items-center bg-[#18181b]">
                    <div className="relative inline-block text-left">
                      <button 
                        className="inline-flex justify-center w-full  border border-[#18181b] shadow-sm px-[25px] py-[12px] bg-[#18181b] text-sm font-medium text-white hover:bg-[#27272a] focus:outline-none" 
                        id="dropdownMenuButton" 
                        type="button" 
                        onClick={toggle}
                      >
                        Menu
                        
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        
                      </button>
                      <div 
                        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#18181b] ring-1 ring-[#18181b] ring-opacity-5 transition-transform ${state? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} 
                        role="menu" 
                        aria-orientation="vertical" 
                        aria-labelledby="dropdownMenuButton"
                        style={{ display: state ? 'block' : 'none' }}
                      >
                        <div className="py-1" role="none">
                          
                          <button 
                            className="px-[25px] py-[12px] bg-[#18181b] text-white block w-full text-left hover:bg-gray-700" 
                            role="menuitem"
                            onClick={toggle}
                          >
                            Raise Alert
                          </button>
                          <button 
                            className="px-[25px] py-[12px] bg-[#18181b] text-white block w-full text-left hover:bg-gray-700" 
                            role="menuitem"
                            onClick={toggle}
                          >
                            DashBoard
                          </button>
                          <button 
                            className="px-[25px] py-[12px] bg-[#18181b] text-white block w-full text-left hover:bg-gray-700" 
                            role="menuitem"
                            onClick={toggle}
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>)
    
    return(
        <section className="flex p-5 justify-evenly text-[#d4d4d8] border-b-2 border-b-[#737373] border-b-groove bg-[#18181b] rounded-">
            <img src={Logo} alt="" className="h-[50px] mr-auto"></img>
            <div className="flex">
      {paste()}
    </div>
        </section>
        
    )
}