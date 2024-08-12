'use client'

import { useState, useEffect } from "react";
import NavListLine from "../global/lists/NavListLine";

export default function EventsList(){
  const [hostedEvents, setHostedEvents] = useState();

  function parseHostedEvent(hostedEvent){
    return (
      <NavListLine 
        key={ hostedEvent.id }
        data={ hostedEvent }
        path={ '/myEvents/' }
      />
    );
  };

  async function getHostedEvents(){
    let res = await fetch('/api/events')
    res = await res.json()
    setHostedEvents(res.events.map(hostedEvent=>parseHostedEvent(hostedEvent)))
  };

  useEffect(()=>{
    if (!hostedEvents){
      getHostedEvents()
    } 
  });

  return (

    <ul>
      { hostedEvents && hostedEvents }
    </ul>
  );
};