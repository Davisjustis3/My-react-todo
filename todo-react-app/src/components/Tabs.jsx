import React, { useState } from 'react';
import { MainTitle } from './MainTitle.jsx'

export function Tabs(props) {
  // const [title, setTitle] = useState('Todo List')
  // const changeTitle = (index) => {
  //   setTitle(navLinks[1].iconName)
  //   console.log(title)
  // }
  const {navLinks} = props
  const [mainTitle, setMainTitle] = useState('Hello')
  const changeTitle = (newTitle) => {
    setMainTitle(newTitle)
  }

  const links = navLinks.map((link, index) => (
    <a onClick={() => changeTitle(link.iconName)} className="links-boxes"  key={link.iconName}>
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
