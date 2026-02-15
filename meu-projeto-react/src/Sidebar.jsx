import { links, social } from "./data.jsx";
import useGlobalContext from "./useGlobalContext";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext()
  return (
    <nav className={isSidebarOpen === true ? 'open_sidebar' : 'closed_sidebar'}>
      
      <header className="sidebar_header">
        <h3 className="coding">Coding <span className="addict">Addict</span></h3>
        <button onClick={closeSidebar} className="close_sidebar_button">
          <FaTimes/>
        </button>
      </header>
      
      <main className="sidebar_main_content">
        {links.map((link) => {
          const {id, url, text, icon} = link
          return (
            <button key={id} className="link_button">
              <a href={url} className="link">{icon}{text}</a>
            </button>
          )
        })}
      </main>
      
      <footer className="sidebar_footer">
        {social.map((media) => {
          const {id, url, icon} = media
          return (
            <button key={id} className="social_media_button">
              <a href={url} className="social_media_link">{icon}</a>
            </button>
          )
        })}
      </footer>
    </nav>
  )
}

export default Sidebar