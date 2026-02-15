import useGlobalContext from './useGlobalContext'
import { FaTimes } from 'react-icons/fa'

const Modal = () => {
  const {isModalOpen, closeModal} = useGlobalContext()

  return (
    <aside className={isModalOpen === true ? 'open_modal' : 'closed_modal'}>
      <div className='modal_content'>
        <button onClick={closeModal} className='close_modal_button'><FaTimes/></button>
        <h3>Modal Content</h3>
      </div>
    </aside>
  )
}

export default Modal