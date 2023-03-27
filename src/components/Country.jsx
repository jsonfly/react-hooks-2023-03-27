import React, { useEffect, useState } from 'react'

function Country({ name, capital }) {
    const [isFav, setIsFav] = useState(false)

    useEffect(() => {
        console.log(`isFav of ${name} changed to:  ${isFav}`);
    }, [isFav])

    return (
        <div className="Country">
            <h1>{name}</h1>
            <p>Capital: {capital}</p>
            <button onClick={() => {
                setIsFav(oldValue => !oldValue)
            }}>
                {
                    isFav ? "Remove from favs" : "Add to favs"
                }
            </button>
        </div>
    )
}

export default Country