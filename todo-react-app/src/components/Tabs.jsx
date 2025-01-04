import React, { useState } from 'react';
import { MainTitle } from './MainTitle';

export function Tabs({navLinks}) {
  // const [title, setTitle] = useState('Todo List')
  // const changeTitle = (index) => {
  //   setTitle(navLinks[1].iconName)
  //   console.log(title)
  // }
  
  const links = navLinks.map((link, index) => (
    <a onClick={<MainTitle index={index} />} className="links-boxes" href={link.href} key={link.iconName}>
      <div className="nav-links-box" >
        <i className={link.icon}></i>
        <span className={link.class}>{link.iconName}</span>
      </div>
    </a>
  ))
  return (
    <>
      <div className="nav-links-container">
        {links}
      </div>
   
    </>
  )
}