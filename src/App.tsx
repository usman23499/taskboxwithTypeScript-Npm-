
import { useState } from 'react';
import './App.css';
// import Taskbox from './components/taskbox'
import Taskbox from '@bit/usman23499.taskboxwithtypescript.taskbox';
// Use the Npm packedge which you uplaod

// USE IMPORTED COMPONENET:

function App() {
  var [taskcount,settaskcount]=useState<any>({

    "Task1":false,
    "Task2":false,
    "Task3":false,
    "Task4":false,
    "Task5":false,
    "Task6":false,
    "Task7":false,
    

  });
  var count =0;
  console.log(taskcount)
  for(var task in taskcount){
   if(taskcount[task]){
      count=count+1;
     
         }
  }

  if(count===Object.getOwnPropertyNames(taskcount).length-1){

    return(
      <div className="main" >
     
      <h1  style={{color:"#FFFFFF"}}>
      CONGRATULATIONS 
      </h1>
      <h3 style={{color:"#FFFFFF"}}>
        You have completed all your Task Sucessfully
      </h3>
      </div>
    )
  }
  return (
    <div className="main" >
     
      <h1  style={{color:"#FFFFFF"}}>
        TASK BOX LIBRARAY
      </h1>
     
      <Taskbox style={{width:"100%"}} value="This is task no 1" onChangeradion={
        (event :any) => {
          if(event.target.checked){
          settaskcount({
            ...taskcount,
            "Task1":true
          })
          }
          else{
            settaskcount({
              ...taskcount,
              "Task1  ":false
            })
          }
        }
       
      }
      //checkradio={true}
      />
      <br/>
      <Taskbox style={{width:"100%"}} value="This is task no 2"  
      onChangeradion={
        (event :any) => {
          if(event.target.checked){
          settaskcount({
            ...taskcount,
            "Task2":true
          })

          }
          else{
            settaskcount({
              ...taskcount,
              "Task2":false
            })
          }
        }
       
      }/>
      <br />
      <Taskbox style={{width:"100%"}} value="This is task no 3"
      onChangeradion={
        (event :any) => {
          if(event.target.checked){
          settaskcount({
            ...taskcount,
            "Task3":true
          })

          }
          else{
            settaskcount({
              ...taskcount,
              "Task3":false
            })
          }
        }
       
      }
      />
      <br />
      <Taskbox style={{width:"100%"}} value="This is task no 4"
      onChangeradion={
        (event :any) => {
          if(event.target.checked){
          settaskcount({
            ...taskcount,
            "Task4":true
          })

          }
          else{
            settaskcount({
              ...taskcount,
              "Task4":false
            })
          }
        }
       
      }
      />
      <br/>
      <Taskbox style={{width:"100%"}} value="This is task no 5" 
      onChangeradion={
        (event :any) => {
          if(event.target.checked){
          settaskcount({
            ...taskcount,
            "Task5":true
          })

          }
          else{
            settaskcount({
              ...taskcount,
              "Task5":false
            })
          }
        }
       
      }
      
      />
      <br />
      <Taskbox style={{width:"100%"}} value="This is task no 6"
      onChangeradion={
        (event :any) => {
          if(event.target.checked){
          settaskcount({
            ...taskcount,
            "Task7":true
          })

          }
          else{
            settaskcount({
              ...taskcount,
              "Task7":false
            })
          }
        }
       
      }
      />
      <div>
        <h2>
        npm i @bit/usman23499.taskboxwithtypescript.taskbox
        </h2>
        <h4>
          Import:npm i @bit/usman23499.taskboxwithtypescript.taskbox
        </h4>
      </div>
    </div>
  );
}

export default App;
