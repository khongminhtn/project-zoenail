import React from 'react';
import Confirmation from './Confirmation';
import Delayed from '../miscellaneous/Delayed'

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


function Form(props) {
    const style = {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderBottom: "1px solid",
        marginLeft: "5%",
        marginBottom: "50px",
        width: "90%",
    };
    return(
        <form>
            <div style={style}>
                <div style={{
                    display:"inline-block",
                    width: 70
                }}>{props.name}</div>
                
                <input 
                    style={{
                        border: "0 none",
                        outline: "none",
                        fontSize: 16,
                        width: "70%"
                    }} 
                    type="text"
                    name={props.name}
                    onChange={props.handleForm}/>
            </div>
        </form>
    );
};


function Week(props) {
    const style = {
        marginTop: 15,
        fontSize: 16
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


function Day (props) {
    const style = {
        marginTop: 15,
        fontSize: 16
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
    );
};


function TimeDropDown(props) {
    const style = {
        margin: "0 20px 0 20px",
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        borderBottom: "1px solid",
        outline: "none",
        width: 50,
        height: 25,
        display: "inline-block",
        textAlign: "center"
    };
    const dropDownStyle = {
        boxShadow: "-2px 2px 5px 0px rgba(0,0,0,0.2)",
        margin: "0 20px 0 20px",
        backgroundColor: "#F1F1F1",
        borderRadius: 10,
        width: 50,
        height: 120,
        overflowY: "scroll",
        position: "absolute",
        textAlign: "center",
    }
    const hours = [10, 11, 12, 13, 14, 15, 16, 17, 18]
    const sundayHours = hours.slice(1,7)
    const minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
    const sundayMinutes = [30,35,40,45,50,55]
    return(
        <div style={{display: "inline-block"}}>
            <div 
                style={style}
                onClick={props.handleShowTime}>{props.name === "Hour" ? props.data.hour : props.data.minute}</div>
            {
                props.data.showTime
                ?   <div style={dropDownStyle}>
                    {   
                        props.name === "Hour" 
                        && props.data.day === "Sunday"
                        ?   sundayHours.map((hour) => (
                                <div 
                                    key={hour}
                                    onClick={props.handleDateTime}
                                    name={props.name}
                                    value={hour}>{hour}</div>
                            ))
    
                        :   props.name === "Minute" 
                            && props.data.day === "Sunday"
                            && props.data.hour === "11"
                        ?   sundayMinutes.map((minute) => (
                                <div 
                                    key={minute}
                                    onClick={props.handleDateTime}
                                    name={props.name}
                                    value={minute}>{minute}</div>
                            ))
    
                        :   props.name === "Hour"
                            && props.data.day !== "Sunday"
                        ?   hours.map((hour) => (
                                <div 
                                    key={hour}
                                    onClick={props.handleDateTime}
                                    name={props.name}
                                    value={hour}>{hour}</div>
                            ))
                        :   props.name === "Minute"
                            && props.data.day !== "Sunday"
                        ?   minutes.map((minute) => (
                                <div 
                                    key={minute}
                                    onClick={props.handleDateTime}
                                    name={props.name}
                                    value={minute}>{minute}</div>
                            ))
                        :   null
                    }
                </div>
                :   null
            }
        </div>
    );
};


function Time(props) {
    return(
        <div style={{marginTop: 15}}>
            <div 
            style={{textAlign:"left", fontSize: 16}}
            onClick={props.handleResetDateTime}>
                <i>{props.data.week} {props.data.day}</i>
            </div>
            <div style={{marginTop: 15}}>
                <div 
                    style={{float: "left", fontSize: 16}}
                >Time</div> 
                <TimeDropDown 
                    name="Hour" 
                    data={props.data}
                    handleDateTime={props.handleDateTime}
                    handleShowTime={props.handleShowTime}/>:
                <TimeDropDown 
                    name="Minute" 
                    data={props.data}
                    handleDateTime={props.handleDateTime}
                    handleShowTime={props.handleShowTime}/>
            </div>
        </div>
    );
};

function DateTime(props) {
    let height = 50;
    if (props.data.showDateTime & !props.data.week) {
        height = 140
    } else if(props.data.week && !props.data.day) {
        height = 330
    } else if(props.data.day) {
        height = 140
    }
    const style = {
        boxShadow: "-2px 2px 5px 0px rgba(0,0,0,0.2)",
        border: "1px solid",
        borderColor: "lightgray",
        borderRadius: "20px",
        margin: "0 5% 20px 5%",
        padding: "10px 15px 10px 15px",
        textAlign: "right",
        height: height,
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
                    ?   <Delayed waitBeforeShow={100}>
                            <Week
                                handleDateTime={props.handleDateTime}/>
                        </Delayed>
                :   props.showDateTime
                    &&  props.data.day === null 
                    &&  props.data.week !== null
                    ?   <Delayed waitBeforeShow={100}>
                            <div>
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
                        </Delayed>
                :   props.showDateTime
                    &&  props.data.day !== null
                    ?   <Delayed waitBeforeShow={100}>
                            <Time
                                data={props.data} 
                                handleShowTime={props.handleShowTime}
                                handleDateTime={props.handleDateTime}
                                handleResetDateTime={props.handleResetDateTime}/>
                        </Delayed>
                :   console.log("Form completed")
            }
        </div>
    )
};

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
                handleResetDateTime={props.handleResetDateTime}
                handleShowTime={props.handleShowTime}/>
            {
                props.data.hour
                && props.data.minute
                && props.data.name
                && props.data.phone
                && props.data.email
                    ? <Confirmation
                        data={props.data}/>
                    : <div style={{textAlign:"center"}}>Please fill out the form</div>
            }
        </div>
    );
};

export {Details}