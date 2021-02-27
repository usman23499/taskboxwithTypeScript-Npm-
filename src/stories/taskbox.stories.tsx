
import Taskbox from "../components/taskbox";
// Beacuse a error is come in story book
export default { 
    title:"Taskbox",
    component : Taskbox
}

export const TaskboxNormal = () => (

    <Taskbox value={"We have to do Process"}  />

   
)


export const Taskboxfav = () => (

    <Taskbox value={"This Task is fav"} checkfav={true} />

   
)
export const Taskboxradio = () => (

    <Taskbox value={"This Task is Achieve"} checkradio={true} />

   
)
