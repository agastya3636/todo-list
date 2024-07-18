import Addcard from "./Addcard";
import Cards from "./Cards";

import { useState,useEffect } from "react";




function Home() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const data = localStorage.getItem("tasks");
        if (data) {
            setTasks(JSON.parse(data));
        }
    }, []);
    return (
        <div>
            <div>
                <h1>Home</h1>
                <Addcard tasks={tasks} setTasks={setTasks}  />
            </div>
            <div style={{
                overflowY: "scroll",
                
           }}>
                    <Cards tasks={tasks} setTasks={setTasks} />
            </div>
        </div>
    )
}
export default Home;



