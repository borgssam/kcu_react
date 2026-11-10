import { useState } from 'react'
import { createPortal} from 'react-dom'

import './Modal.css'
import './App.css'

function ModalBox({message, onClose}) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <p>{message}</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  )
}

function ConfirmModal({message, onClose}){
  return createPortal(
    <ModalBox message={message} onClose={onClose}/>,
    document.body,
  );

}

function TaskItem({usePortal}){
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);


  return (
    <li className="clip-box">
      {usePortal? "포탈사용 ":"포탈없이 "}
      할일목록
      <button onClick={()=>open()}>삭제</button>
      {
        isOpen &&
        (
          usePortal? 
          (
           <div>
            <ConfirmModal message="정말삭제할까요?" onClose={close}/>
           </div>


          )
          :
          (
            <div>
              <p>사용안함</p>
              <ModalBox message="정말삭제할까요?" onClose={close}/>

            </div>
          
          )
        )

      }

    </li>
  )
}

function App() {

  return (
    <ul>
      <li>사용안함</li>
      <TaskItem usePortal={false}/>

      <li>사용함</li>
      <TaskItem usePortal={true}/>
    </ul>
  )
}

export default App
