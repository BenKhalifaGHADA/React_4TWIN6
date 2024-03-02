import Event from "./Event";

import Row from 'react-bootstrap/Row';
import eventJson from "../data/events.json";
import { useEffect, useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { getallEvents } from "../service/api";
function Events() {
    const [eventList, setEventList] = useState([]);

    useEffect(() => {
      const fetchEvents = async () => {
        const eventsResult = await getallEvents();
        setEventList(eventsResult.data);
      };
      fetchEvents();
    }, []);

    const[isWelcome,SetIsWelcome]=useState(true);
    useEffect(()=>{
        const isWelcomeTimeout=setTimeout(()=>{
            SetIsWelcome(false);
        },3000);
        return ()=>{
            clearTimeout(isWelcomeTimeout);
        };
    },[]);
    return ( <>
       {/* <Event name="Event Name" img="placeholder.jpg" description="Ceci un test" price="17" nbTickets="15" nbParticipants="10"/> */}
       {isWelcome && (
           <Alert  variant="success">
           Hey welcome to Esprit Events
          </Alert>
       )}
      
       <Row xs={1} md={2} className="g-4">
       {eventList.map((eventItem,index)=>(
        <Event key={index} event={eventItem} />
          
       )
          
       )}
       
          
        
     
    </Row>
    </> );
}

export default Events;