export function Tabs() {
  const navLinks = [
    {
      icon: 'fa-solid fa-plus',
      iconName: 'Add task',
      class: 'link-add-task',
      href: 'add-task'
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      iconName: 'Search',
      class: 'link-search',
      href: 'search'
    },
    {
      icon: 'fa-solid fa-inbox',
      iconName: 'Inbox',
      class: 'link-inbox',
      href: 'inbox'
    },
    {
      icon: 'fa-solid fa-calendar-days',
      iconName: 'Today',
      class: 'link-today',
      href: 'today'
    },
    {
      icon: 'fa-solid fa-calendar-week',
      iconName: 'Upcoming',
      class: 'link-upcoming',
      href: 'upcoming'
    }
  ]
  const links = navLinks.map((link) => (
    <a className="links-boxes" href={link.href} key={link.iconName}>
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