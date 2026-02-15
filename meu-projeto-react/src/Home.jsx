import { FaBars } from 'react-icons/fa'
import useGlobalContext from './useGlobalContext'

const Home = () => {
  const {openSidebar, openModal} = useGlobalContext()
  
  return (
    <main>
      <button className="open_sidebar_button" onClick={openSidebar}>
        <FaBars/>
      </button>
      <button className="open_modal_button" onClick={openModal}>
        Open Modal
      </button>
    </main>
  )
}

export default Home