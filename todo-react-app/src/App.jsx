import {Navbar} from './components/Navbar.jsx'
import { Header } from './components/Header.jsx'
import { Tabs } from './components/Tabs.jsx'
import { MyProjects } from './components/MyProjects.jsx'
import { Main } from './components/Main.jsx'

function App() {

  return (
    <>
    <Header>
      <Navbar/>
      <Tabs />
      <MyProjects/>
      </Header>
    <Main>
      
      </Main>
    </>
  )
}

export default App
