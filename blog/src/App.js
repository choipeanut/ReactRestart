import './App.css';
import { useState } from 'react';

function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>개발 Blog</h4>
       
      </div>
      <div className='list'>
        <h4 onClick={function() { modal == false ? setModal(true) : setModal(false) }}>{글제목[0]} <span onClick={ function() {따봉변경(따봉+1)} }>   ❤️{따봉}</span></h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}<span>    ❤️{따봉}</span></h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}<span>    ❤️{따봉}</span></h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='butt'>
        <h4>여자코트 추천으로 변경</h4>
        <button onClick={ function () { 
          let copy = [...글제목];
          copy[0] = '여자 코트 추천!!!';
          글제목변경(copy) } }>button</button>
      </div>
      {
        modal == true ? <Modal /> : null
      }

    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
