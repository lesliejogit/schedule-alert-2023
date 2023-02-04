import './App.css';
import {nanoid} from "nanoid"
import {useState,useEffect} from "react"
import scheduleData from "./Components/Data/scheduleData.json"
import Schedule from './Components/Schedule';
import PopUp from './Components/PopUp';

function App() {

  const handleOpen_PopUp = (event) =>{
    const target = event.currentTarget // * gets target, and its attributes
    const {id} = target // ! ID of schedule
    let eventClicked

    // ! Finds the event clicked by user

    sundaySchedule.find(sundayEvent => {
      if (sundayEvent.id === id){
        eventClicked = sundayEvent
      }
    })

    saturdaySchedule.find(saturdayEvent => {
      if (saturdayEvent.id === id){
        eventClicked = saturdayEvent
      }
    })

    workshopSchedule.find(workshopEvent => {
      if (workshopEvent.id === id){
        eventClicked = workshopEvent
      }
    })

    setPopUp({
      ...eventClicked,
      isClicked: true
    })


  } // handleOpen_PopUp

  const handleClose_PopUp = () =>{
    setPopUp((prevPopUp) => ({isClicked:false})) // * For button in popup
  } // handleClose_PopUp

  // const handle
  
  const {workshopData,tentativeScheduleData} = scheduleData
  const {saturdayData, sundayData} = tentativeScheduleData

  const [popUp,setPopUp] = useState({isClicked:false}) // * initial value


  // * Adds and id for each event
  const sundaySchedule = sundayData.map(event => ({
    ...event,
    id:nanoid()
  }))

  const saturdaySchedule = saturdayData.map(event => ({
    ...event,
    id:nanoid()
  }))

  const workshopSchedule = workshopData.map(event => ({
    ...event,
    id:nanoid()
  }))


  return (
    <div className="App">
      <header className="App-header">
      <h1>Schedule Alerts</h1>
      <Schedule 
      workshopSchedule={workshopSchedule} 
      saturdaySchedule={saturdaySchedule}
      sundaySchedule={sundaySchedule}
      handleOpen_PopUp={handleOpen_PopUp}
      nanoid={nanoid}
      />

      {popUp.isClicked && <PopUp popUpData={popUp} handleClose_PopUp={handleClose_PopUp}/>}

      </header>
    </div>
  );
}

export default App;
