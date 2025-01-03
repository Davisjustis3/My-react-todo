import '../index.css'

export function Navbar() {
  return (
  
      <div className="profile-parent-container">
        <span className="profile-container">
          <img src="../public/profile.jpg" alt="profile-pic" className="profile-pic"/>
          <span className="profile-name">Justis</span>
        </span>
        <span className="icon-container"> 
          <a href=""><i className="fa-regular fa-bell"></i></a>
          <a href=""><i className="fa-solid fa-house"></i></a>
        </span>
      </div>
    
  )
}