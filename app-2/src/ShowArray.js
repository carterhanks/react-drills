import React from 'react'

export default function ShowArray() {
    let array = ['4Runner', 'Tacoma', 'Tundra', 'Sequoia', 'Supra', 'Corolla'];

    const arrayItems = array.map((item) => <h2>{item}</h2>)

    return (
        <div>
            {arrayItems}
        </div>
    )
};