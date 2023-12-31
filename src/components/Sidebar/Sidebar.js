import React, { useState } from 'react'
import Logo from "../../imgs/logo.png"
import { SidebarData } from '../../Data/Data';

import "./Sidebar.css"
import { UilSignOutAlt, UilBars } from '@iconscout/react-unicons';
const Sidebar = () => {

    const [selected, setSelected] = useState(0);
    const [expanded, setExpanded] = useState(true)
  return (
    <>

     <div className = 'bars' style={expanded?{left:'60%'}:{left:'5%'}}>
        <UilBars/>
      </div>
      
    <div className='Sidebar'>
        <div className='logo'>
            <img src={Logo} alt='' />
            <span>
            Sh<span>o</span>ps
            </span>
        </div>

        {/* menu */}
        <div className='menu'>
            {SidebarData.map((item, index)=> {
                return(
                    <div className={selected===index?'menuItem active': 'menuItem'}
                    onClick={()=>setSelected(index)}
                    key={index}>
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )
            })}

            <div className='menuItem'>
                <UilSignOutAlt/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar