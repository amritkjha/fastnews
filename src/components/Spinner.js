import React from 'react'
import loading from './loading.gif'

export default function Spinner() {
    return (
        <div className="text-center" style={{height: "100px"}}>
            <img className='h-100' src={loading} alt="loading" />
        </div>
    )
}
