
import { Navbar } from './components/Navbar.jsx'
import { Header } from './components/Header.jsx'
import { Tabs } from './components/Tabs.jsx'
import { MyProjects } from './components/MyProjects.jsx'
import { Main } from './components/Main.jsx'
import { MainNavbar } from './components/MainNavbar.jsx'
import { MainTitle } from './components/MainTitle.jsx'

function App() {
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
  return (
    <>
    <Header>
      <Navbar/>
        <Tabs navLinks={navLinks} />
      <MyProjects/>
      </Header>
    <Main>
        <MainNavbar />
        <MainTitle navLinks={navLinks}/>
      </Main>
    </>
  )
}

export default App
