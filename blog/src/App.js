import './App.css';
import { useState } from 'react';

function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>개발 Blog</h4>
       
      </div>

      {
        글제목.map(function(a,i){
          return(
            <div className='list'>
              <h4 onClick={function() { modal == false ? setModal(true) : setModal(false) 
                  누른제목변경(i);
                }}>{ 글제목[i] } <span onClick={ function() {
                  let copy = [...따봉] 
                  copy[i] = copy[i] + 1
                  따봉변경(copy)
                } }>   ❤️{ 따봉[i] }</span></h4>
              <p>2월 17일 발행</p>
              
            </div>
          )
        })
      }
     
      
      {
        modal == true ? <Modal 글제목={글제목} 글제목변경 = {글제목변경} 누른제목 = {누른제목}/> : null 
      }


    </div>
    
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={function(){
        props.글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
      }}>글수정</button>
    </div>
  )
}

export default App;
