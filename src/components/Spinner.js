import React from 'react'
import '../index.css'


export const Spinner = () => {
    return (
        <div className="spinner-wrapper">
            <div className="spinner-border spinner text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}