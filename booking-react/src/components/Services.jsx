import React from 'react';


class Basket extends React.Component {
    render() {
        return(
            <div>
                <div>{this.props.items}</div>
                <button>Choose Time</button>
            </div>
        )
    }
}


class ServiceExtras extends React.Component {
    render() {
        return(
            <div>
                {
                    this.props.name === "Full Set"
                    ?   <div>
                            <div>Acrylic...</div>
                                <div>Gel Powder...</div>
                                <div>Permanent white tips</div>
                            <div>Ombre.</div>
                        </div>
                    :   this.props.name === "Infill"
                    ?   <div>
                            <div>Acrylic...</div>
                            <div>Gel Powder...</div>
                            <div>Ombre.</div>
                        </div>
                    :   this.props.name === "Pedicure and Manicure"
                    ?   <div>
                            <div>Pedicure...</div>
                            <div>Manicure...</div>
                            <div>Pedicure and Manicure.</div>
                        </div>
                    :   this.props.name === "Take Off"
                    ?   <div>
                            <div>Take off Acrylic.</div>
                            <div>Take off Shellac and re-done.</div>
                            <div>Take off Shellac.</div>
                        </div>
                    :   this.props.name === "Other Services"
                    ?   <div>
                            <div>Polish change on natural nails</div>
                            <div>Polish change on existing Acrylic</div>
                            <div>Polish change for feet</div>
                            <div>Acrylic on 2 big toes</div>
                            <div>Infill for 2 big toes</div>
                            <div>Repair for one nail</div>
                            <div>Cut down nail acrylic only</div>
                            <div>10 diamonds</div>
                            <div>Design</div>
                        </div>
                    :   null
                }
            </div>
        )
    }
}


class Service extends React.Component {
    render() {
        return(
            <div>
                <div>{this.props.name}</div>
                <ServiceExtras name={this.props.name}/>
            </div>
        )
    }
}


class Services extends React.Component {
    render() {
        return(
            <div>
                <Service name="Full Set"/>
                <Service name="Infill"/>
                <Service name="Pedicure and Manicure"/>
                <Service name="Take Off"/>
                <Service name="Other Services"/>
            </div>
        )
    }
}


class FunFacts extends React.Component {
    render() {
        return(
            <div>
                Did you know that Women used to pinch their cheeks to give themselves rosy cheeks before the invention of blush.
            </div>
        )
    }
}


class Heading extends React.Component {
    render() {
        return(
            <h1>
                Booking
            </h1>
        )
    }
}


class Card extends React.Component {
    render() {
        return(
            <div>
                <Heading/>
                <FunFacts/>
                <Services/>
                <Basket items={"fullset"}/>
            </div>
        )
    }
}

export {Card}