import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { NavLink } from "react-router-dom";
//import { editEvent } from "../services/api";
import {deleteEvent} from "../service/api";
import { Link } from "react-router-dom";
function Event(props) {
    const [event,setEvent]=useState(props.event);
    const [isShowBuyAlert,setIsShowBuyAlert]=useState(false);
    
    const ShowBuyAlert=()=>{
        setIsShowBuyAlert(true);
        setTimeout(()=>{
           setIsShowBuyAlert(false);
        },2000);
    }
    function buy(){
        ShowBuyAlert();
        setEvent((eventPrev)=>({
            ...eventPrev, 
            nbParticipants: eventPrev.nbParticipants+1,
            nbTickets: event.nbTickets-1,
        }))
    }

    const handleClickLike=()=>{
        setEvent((eventPrev)=>({
            ...eventPrev,
            like: !eventPrev.like,
        }))
    }

    // const deleteE = async (id) => {

    //   await deleteEvent(id);
    //   fetchData();
    // }
    // const updateEvent = async () => {
    //   await editEvent(event.id, event);
    // };
  
    return ( <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/images/${!!event.nbTickets?event.img:"sold_out.png"}`} />
      <Card.Body>
      <NavLink to={`${event.id}`}>
            <Card.Title>{event.name}</Card.Title>
          </NavLink>
        <Card.Text>
          Description: {event.description}
        </Card.Text>
        <Card.Text>
          Price {event.price}
        </Card.Text>
        <Card.Text>
          number of tickets {event.nbTickets}
        </Card.Text>
        <Card.Text>
          number of participants {event.nbParticipants}
        </Card.Text>
       <Button variant="primary" onClick={buy} disabled={!!event.nbTickets ? false:true}>Book an event</Button>
       <Button variant="primary" onClick={handleClickLike}>{event.like ? "like":"dislike"}</Button>
      
       <Button variant="success">
            <Link
              to={`/events/update/${event.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              Update
            </Link>
          </Button>

          <Button variant="danger" onClick={() => deleteEvent(event.id)}>
            Delete
          </Button>
      </Card.Body>
    </Card>
   {isShowBuyAlert && (
        <Alert  variant="primary">
        You have booked an event 
        </Alert>
   )
  } 
    </> );
}

export default Event;