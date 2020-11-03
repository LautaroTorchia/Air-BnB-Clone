import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './Banner.css'
import DatePicker from './DatePicker'
import { useHistory } from 'react-router-dom'


function Banner() {
    const history = useHistory()
    const [displayPicker,setDisplayPicker]= useState(false)
    const [dateText,setDateText]= useState('Show Dates')

    const handleClick= () =>{
        setDisplayPicker(!displayPicker)
        setDateText(prev => prev==='Show Dates'?'Hide':'Show Dates')
    }
    return (
        <div className='banner'>
            <div className='banner__search'>
                <Button className='banner__searchbtn' variant='outlined' onClick={handleClick}>{dateText}</Button>
                {displayPicker && <DatePicker />}
            </div>
            <div className='banner__info'>
                <h1>get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button onClick={() => history.push('/Search')}variant='outlined'>Explore Nearby</Button>
            </div>

        </div>
    )
}

export default Banner
