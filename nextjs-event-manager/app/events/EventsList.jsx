'use client'

import { useState } from "react"
import { useEffect } from "react"
import SpinLoader from "@/components/loader/SpinLoader"

export default function EventsList(){
  const [hostedEvents, setHostedEvents] = useState();

  async function getHostedEvents(){
    let res = await fetch('/api/events')
    setHostedEvents(true)
  }

  useEffect(()=>{
    if (!hostedEvents){
      getHostedEvents()
    }
  })

  return (
    <div>

    </div>
  )
}