import React from 'react'

function Form(props) {
    const style = {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderBottom: "1px solid",
        marginLeft: "5%",
        marginBottom: "50px",
        width: "90%",
        outline: "none"
    };
    return(
        <form>
            <div style={style}>
                <div style={{
                    display:"inline-block",
                    width: 70
                }}>{props.name}</div>
                
                <input 
                    style={{border: 0}} 
                    type="text" 
                    name={props.name}
                    onChange={props.handleForm}/>
            </div>
        </form>
    );
};

function Triangle (props) {
    let deg = 0;

    const style = {
        display: "inline-block",
        borderLeft: "8px solid transparent",
        borderRight: "8px solid transparent",
        borderTop: "15px solid black",
    };

    return(
        <div 
            style={style}></div>
    );
};

function Circle(props) {
    let color = undefined;
    var circleStyle = {
        display:"inline-block",
        backgroundColor: color,
        borderRadius: "50%",
        border: "1px solid",
        borderColor: "grey",
        width: "20px",
        height: "20px",
        boxShadow: "-2px 2px 5px 0px rgba(0,0,0,0.33)",
        marginLeft: 10,
        verticalAlign: "middle",
    };

    return(
        <div
            name={props.name} 
            style={circleStyle}></div>
    );
};

function Time(props) {
    const style = {
        margin: "0 15px 0 15px",
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderBottom: "1px solid",
        outline: "none",
        width: 50
    }
    return(
        <div style={{marginTop: 15}}>
            <div style={{textAlign:"left"}}>{props.data.week} {props.data.day}</div>
            <div style={{marginTop: 15}}>
                <div 
                    style={{float: "left"}}
                >Time</div> 
                <input 
                    type="time"
                    name="Time"
                    onChange={props.handleDateTime}/>
            </div>
        </div>
    );
};

function Day (props) {
    const style = {
        marginTop: 15,
    }
    return(
        <div 
            style={style}
            name={props.name}
            onClick={props.handleDateTime}>
            <div
                style={{
                    display: "inline",
                    float:"left"
                }}
                name={props.name}
            >{props.name}</div>
            <Circle name={props.name}/>
        </div>
    )
}


function Week(props) {
    const style = {
        marginTop: 15,
    }
    return(
        <div>
            <div   
                name="This week"
                onClick={props.handleDateTime}
                style={style}>
                <div 
                    style={{
                        display: "inline",
                        float:"left"
                    }}
                    name="This week"
                >This Week</div>
                <Circle name="This week"/>
            </div>

            <div
                name="Next week"
                onClick={props.handleDateTime} 
                style={style}>
                <div 
                    style={{
                        display: "inline",
                        float:"left"
                    }}
                    name="Next week"
                >Next week</div>
                <Circle name="Next week"/>
            </div>
        </div>
    );
};

function DateTime(props) {
    const style = {
        boxShadow: "-2px 2px 5px 0px rgba(0,0,0,0.2)",
        border: "1px solid",
        borderColor: "lightgray",
        borderRadius: "20px",
        margin: "0 5% 20px 5%",
        padding: "10px 15px 10px 15px",
        textAlign: "right",
        // height: 50,
        transition: "height 0.2s ease-out",
    }
    return(
        <div style={style}>
            <div onClick={props.handleShowDateTime}>
                <div 
                    style={{
                        display:"inline",
                        float:"left"}}
                >Date and Time</div>
                <Triangle/>
            </div>
            {
                props.showDateTime
                &&  props.data.week === null
                ?   <Week
                        handleDateTime={props.handleDateTime}/>

                :   props.showDateTime
                    &&  props.data.day === null 
                    &&  props.data.week !== null
                ?   <div>
                        <Day
                            handleDateTime={props.handleDateTime} 
                            name="Monday"/>
                        <Day
                            handleDateTime={props.handleDateTime} 
                            name="Tuesday"/>
                        <Day
                            handleDateTime={props.handleDateTime} 
                            name="Wednesday"/>
                        <Day
                            handleDateTime={props.handleDateTime} 
                            name="Thursday"/>
                        <Day
                            handleDateTime={props.handleDateTime} 
                            name="Friday"/>
                        <Day
                            handleDateTime={props.handleDateTime} 
                            name="Saturday"/>
                        <Day
                            handleDateTime={props.handleDateTime} 
                            name="Sunday"/>
                    </div>
                :   props.showDateTime
                    &&  props.data.day !== null
                ?   <Time
                        data={props.data} 
                        handleDateTime={props.handleDateTime}/>
                :   console.log("Form completed")
            }
        </div>
    )
};


function Confirmation(props) {
    const style = {
        margin: "50px 5% 50px 5%"
    }
    return(
        <div style={style}>
            <h6>Confirmation</h6>
            <p>Hi {props.data.name}, just to confirm you have booked for {props.data.week} {props.data.day} at {props.data.time}, is this correct ?</p>

        </div>
    )
}

function Details(props) {
    return(
        <div>
            <Form
                name="Name"
                handleForm={props.handleForm}/>
            <Form
                name="Phone"
                handleForm={props.handleForm}/>
            <Form
                name="Email"
                handleForm={props.handleForm}/>
            <DateTime
                data={props.data}
                showDateTime={props.showDateTime}
                handleShowDateTime={props.handleShowDateTime}
                handleDateTime={props.handleDateTime}
                handleResetDateTime={props.handleResetDateTime}/>
        </div>
    );
};

export {Details}