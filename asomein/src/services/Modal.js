
import React from 'react';
import '../assets/css/modal.css';

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section className="Main-contents-section">

          <header> 
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>

          <main>
            {props.children}
            <div className="sec-modal-unknow">
                <p>회원가입/로그인 안내</p>
                <p>해당서비스는 회원 전용 서비스입니다.<br/> 
                    비회원인 경우 회원가입을 통해<br/>
                    로그인하시면 됩니다.
                </p>
                <p>
                지금 가입하시면 해당 뉴스레터<br/>
                구독서비스를 안내 받으실 수 있습니다.
                </p>
            </div>
          </main>
            

          <footer className="closing-page-btn">
            <button className="close" onClick={close}>
              회원가입
            </button>
            <button className="close" onClick={close}>
              로그인
            </button>
          </footer>

        </section>
      ) : null}
    </div>
  );
};
export default Modal;