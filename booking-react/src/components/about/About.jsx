import React from "react"
import GetStarted from '../home/GetStarted'

function About() {
    const locationOpeningStyle = {
        marginLeft: "4%",
        marginTop: "20px"
    }
    return (
        <div>
            <div style={locationOpeningStyle}>
                <b>Location</b><br/>
                379 Green Street<br/>
                Upton Park<br/>
                E13 9AU<br/><br/>

                <b>Opening</b><br/>
                Mon - Sat 10am - 7pm<br/>
                Sunday 11am - 5pm<br/><br/>
            </div>
            <GetStarted/>
            
        </div>
    )
}

export { About }