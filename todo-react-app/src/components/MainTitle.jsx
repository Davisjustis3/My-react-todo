import { useState } from "react"

export function MainTitle(props) {
  const {mainTitle} = props

  return (
    // this title = link[index].iconName
    <>
      <div className="title-box">
        <h2>Inbox</h2>
        <p className="add-task">
          <span className="plus-sign">+</span>
          <span className="add-task-text">Add task</span>
        </p>
        
        </div>
      </>
  ) 
}