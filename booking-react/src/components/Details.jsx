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
        verticalAlign: "top",
    };

    return(
        <div style={circleStyle}></div>
    );
};


function Time(props) {

}

function Day (props) {

}

function Week(props) {
    const style = {
        marginTop: 15
    }
    return(
        <div>
            <div style={style}>
                <div 
                    style={{
                        display: "inline",
                        float:"left"
                    }}
                >This Week</div>
                <Circle/>
            </div>
            <div style={style}>
                <div 
                    style={{
                        display: "inline",
                        float:"left"
                    }}
                >Next Week</div>
                <Circle/>
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
                ?   <Week/>
                :   null
            }
            
        </div>
    )
};

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDateTime: false,
        };
    };

    handleShowDateTime = (e) => {
        this.state.showDateTime ? this.setState({showDateTime: false}) : this.setState({showDateTime: true})
    }

    componentDidUpdate() {
        console.log(this.state.showDateTime)
    }

    render() {
        return(
            <div>
                <Form
                    name="Name"
                    handleForm={this.props.handleForm}/>
                <Form
                    name="Phone"
                    handleForm={this.props.handleForm}/>
                <Form
                    name="Email"
                    handleForm={this.props.handleForm}/>
                <DateTime
                    showDateTime={this.state.showDateTime}
                    handleShowDateTime={this.handleShowDateTime}/>
            </div>
        );
    }
};

export {Details}