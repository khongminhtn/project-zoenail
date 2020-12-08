import React from "react"

function Price(props) {
    const style = {
        display: "inline",
        float: "right",
        width: "90px"
    };

    return(
        <div style={style}>
            {       
                // Base Prices
                props.name === "Full Set"
                &&  props.selected.base === null
                ?   <div 
                        onClick={props.handleBase}
                        name={props.name}
                    >£18 - £32</div>

                :   props.name === "Infill"
                &&  props.selected.base === null
                ?   <div 
                        onClick={props.handleBase}
                        name={props.name}
                    >£13 - £27</div>

                :   props.name === "Spa"
                &&  props.selected.base === null
                ?   <div 
                        onClick={props.handleBase}
                        name={props.name}
                    >£10 - £30</div>

                :   props.name === "Take Off"
                &&  props.selected.base === null
                ?   <div 
                        onClick={props.handleBase}
                        name={props.name}
                    >£6 - £10</div>

                :   props.name === "Other Services"
                &&  props.selected.base === null
                ?   <div 
                        onClick={props.handleBase}
                        name={props.name}
                    >£3 - £30</div>

                // Core prices
                :   props.selected.base === "Full Set"
                &&  props.name === "Acrylic"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£18</div>
        
                :   props.selected.base === "Full Set"
                &&  props.name === "Gel Powder"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£20</div>

                :   props.selected.base === "Full Set"
                &&  props.name === "Permanent white tips"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£20</div>

                :   props.selected.base === "Full Set"
                &&  props.name === "Ombre"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£30</div>
        
                :   props.selected.base === "Infill"
                &&  props.name === "Acrylic"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£13</div>
                
                :   props.selected.base === "Infill"
                &&  props.name === "Gel Powder"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£15</div>

                :   props.selected.base === "Infill"
                &&  props.name === "Ombre"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£25</div>

                :   props.selected.base === "Spa"
                &&  props.name === "Pedicure"
                ?   <div   
                        onClick={props.handleCore}
                        name={props.name}
                    >£20</div>

                :   props.selected.base === "Spa"
                &&  props.name === "Manicure"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£10</div>

                :   props.selected.base === "Take Off"
                &&  props.name === "Take Off Acrylic"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£10</div>

                :   props.selected.base === "Take Off"
                &&  props.name === "Take Off Shellac"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£6</div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Polish change on natural nails"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£6</div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Polish change on Acrylic"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£8</div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Polish change for feet"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£8</div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Acrylic on two big toes"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£8</div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Infill for two big toes"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£6</div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Repair for one nail"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£3</div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Cut down nail acrylic only"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£3</div>

                :   props.selected.base === "Other Services"
                &&  props.name === "10 diamonds"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£3</div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Design"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >From £3</div>
                
                :   props.selected.base === "Other Services"
                &&  props.name === "Shellac on natural nails"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£15</div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Shellac on feet"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£18</div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Shellac on hand and feet"
                ?   <div
                        onClick={props.handleCore}
                        name={props.name}
                    >£30</div>
                
                // Extras Prices
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Acrylic"
                &&  props.name === "With Shellac"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£7</div>
                
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Gel Powder"
                &&  props.name === "With Shellac"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£9</div>

                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Permanent white tips"
                &&  props.name === "With UV"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£3</div>

                :   props.selected.base === "Infill"
                &&  props.selected.core === "Acrylic"
                &&  props.name === "With Shellac"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£7</div>
                
                :   props.selected.base === "Infill"
                &&  props.selected.core === "Gel Powder"
                &&  props.name === "With Shellac"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£7</div>

                :   props.selected.base === "Spa"
                &&  props.selected.core === "Pedicure"
                &&  props.name === "With Shellac"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£10</div>

                :   props.selected.base === "Spa"
                &&  props.selected.core === "Manicure"
                &&  props.name === "With Shellac"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£10</div>
                

                //  Length Prices
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Acrylic"
                &&  props.selected.extras === "Without Shellac"
                &&  props.name === "Long"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£5</div>
                
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Acrylic"
                &&  props.selected.extras === "With Shellac"
                &&  props.name === "Long"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£3</div>
                
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Gel Powder"
                &&  props.selected.extras === "Without Shellac"
                &&  props.name === "Long"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£5</div>
                
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Gel Powder"
                &&  props.selected.extras === "With Shellac"
                &&  props.name === "Long"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£2</div>

                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Permanent white tips"
                &&  props.selected.extras === "Without UV"
                &&  props.name === "Long"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£2</div>
                
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Permanent white tips"
                &&  props.selected.extras === "With UV"
                &&  props.name === "Long"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£2</div>
                
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Ombre"
                &&  props.name === "Long"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£2</div>
                
                :   props.selected.base === "Infill"
                &&  props.selected.core === "Acrylic"
                &&  props.selected.extras === "Without Shellac"
                &&  props.name === "Long"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£2</div>

                :   props.selected.base === "Infill"
                &&  props.selected.core === "Acrylic"
                &&  props.selected.extras === "With Shellac"
                &&  props.name === "Long"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£2</div>
                
                :   props.selected.base === "Infill"
                &&  props.selected.core === "Gel Powder"
                &&  props.selected.extras === "Without Shellac"
                &&  props.name === "Long"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£2</div>
                
                :   props.selected.base === "Infill"
                &&  props.selected.core === "Gel Powder"
                &&  props.selected.extras === "With Shellac"
                &&  props.name === "Long"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£3</div>

                :   props.selected.base === "Infill"
                &&  props.selected.core === "Ombre"
                &&  props.name === "Long"
                ?   <div
                        onClick={props.handleExtras}
                        name={props.name}
                    >+£2</div>

                :   null
            }  
        </div>
    );
};

export {Price}