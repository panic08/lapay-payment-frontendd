import React, {useEffect, useState} from 'react';
import './App.css';
import style from './components/styles/style.module.css'
import Form from "./components/Form";
import axios from "axios";
var stompClient: any = null;
const SockJS = require('sockjs-client')
const Stomp = require('stompjs')
function App() {
  const [posts, setPosts]: any = useState("")
  const [handleInput, setHandleInput] = useState("")


  function setValueInput(e: any){
    setHandleInput(e.target.value);
  }
  function sendMessage(e: any){
    e.preventDefault();
    axios.post('http://localhost:8080/api/sendMessage ', {
      id: Date.now(),
      text: handleInput,
    })
        .then(function (response) {
          setHandleInput("");
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  useEffect(function (){
      let Sock = new SockJS('http://localhost:8080/ws')

      stompClient= Stomp.over(Sock)

      stompClient.debug = null

      setTimeout(function() {
          stompClient.connect({},function (frame: any){


              // console.log(`Connected: ${frame}`)


              stompClient.subscribe("/topic/greetings", function (greeting: any) {
                  const andrey = JSON.parse(greeting.body)
                  console.log(andrey)
                  setPosts(andrey)
              });

          }, 1200)})
    axios.get('http://localhost:8080/api/getMessages')
        .then(function (response) {
          // handle success
          //   console.log(response.data)
          setPosts(response.data);


        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
  }, [])

  return (
    <div className="App">
        {posts && posts.map((data: any) => (
    <Form key={data.id} {...data}/>
            ))}
      <div className={style.dop}>
        <input onChange={setValueInput} value={handleInput} className={style.input}/>
        <a onClick={sendMessage} className={style.button}>Отправить</a>
      </div>
    </div>
  );
}

export default App;
