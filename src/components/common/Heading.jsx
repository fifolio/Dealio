import React from 'react'

export default function Heading({ title, desc }) {
    return (
        <>
            <div className="heading">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </>
    )
}
