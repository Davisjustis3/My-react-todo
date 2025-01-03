import {Navbar} from './components/Navbar.jsx'
import { Header } from './components/Header.jsx'
import { Tabs } from './components/Tabs.jsx'
import { MyProjects } from './components/MyProjects.jsx'

function App() {

  return (
    <Header>
      <Navbar/>
      <Tabs />
      <MyProjects/>
    </Header>
    
  )
}

export default App
