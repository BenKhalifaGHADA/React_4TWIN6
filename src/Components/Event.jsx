import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
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
    return ( <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/images/${!!event.nbTickets?event.img:"sold_out.png"}`} />
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
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