import React, { useState } from 'react'
import './DatePicker.css'
import { DateRangePicker } from "react-date-range" //npm  i date-fns  y //npm i react-date-range
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core'
import { useHistory} from 'react-router-dom'


function DatePicker() {
    const history= useHistory();
    const [startDate,setStartDate]= useState(new Date());
    const [endDate,setEndDate]= useState(new Date());

    const selectionRange= {
        startDate,
        endDate,
        key:'selection'
    }
    const handleSelect= ranges =>{
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    return (
        <div className='datepicker'>
            <DateRangePicker  ranges={[selectionRange]} onChange={handleSelect}/>
            <h2>Number of guests <PeopleIcon /> </h2>
            <input min={0} defaultValue={2} type='number'/>
            <Button onClick={() => history.push('/Search')}>Search Air BnB</Button>
        </div>
    )
}

export default DatePicker
