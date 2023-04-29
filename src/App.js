import React,{createContext,useState} from "react"
import './App.css';
import Header from './components/Header';


export const Context=createContext()
function App() {
  const [data,setData]=useState({
     isAuth:false,
     id:""
  })
 function changehandle(){
  setData((prev)=>{
    return{
      ...prev,
      isAuth:!prev.isAuth
    }
  })
 }
  return (
    <Context.Provider value={{data,setData}}>
      <Header/>
      <button onClick={changehandle}>change</button>
    </Context.Provider>
  );
}

export default App;
