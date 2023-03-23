import {Calendar} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours} from 'date-fns'

import { CalendarEvent, Navbar } from "../"
import { getMessagesEs, localizer } from '../../helpers'
import { useState } from 'react'
  
const events=[{
    title:'cumpleaños del jefe',
    notes:'hay que comprar el pastel',
    start: new Date(),
    end:addHours(new Date(),2),
    bgColor:'#fafafa',
    user:{
        _id:'123',
        name:'Nicolas'
    }
}]

export const CalendarPage=()=>{

    const [lastView,setLastView]= useState(localStorage.getItem('lastView'||'week'))

    const eventStyleGetter=(event,start,end,isSelected)=>{

        const style={
            backgrounColor:'#347cf7',
            borderRadius:'0px',
            opacity:0.8,
            color:'white'
        }
        return{
            style
        }
    }

    const onDoubleClick=(event)=>{
        
    }

    const onSelect=(event)=>{
        
    }

    const onViewChanged=(event)=>{
        localStorage.setItem('lastView',event)
        setLastView(event)
    }

    return(
        <>
            <Navbar/>
            
            <Calendar
                culture='es'
                localizer={ localizer }
                events={ events }
                defaultView={ lastView }
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc( 100vh - 80px )' }}
                messages={ getMessagesEs() }
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChanged }
            />

        </>
    )
}