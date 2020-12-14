import React from "react"
import { Button } from "./Button"

export default function Price(props) {
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
                ?   <div>
                        <div 
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={18}
                            name={props.name}
                        >£18</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={18}
                            color={"white"}/>
                    </div>
        
                :   props.selected.base === "Full Set"
                &&  props.name === "Gel Powder"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={20}
                            name={props.name}
                        >£20</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={20}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Full Set"
                &&  props.name === "Permanent white tips"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={20}
                            name={props.name}
                        >£20</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={20}
                            color={"white"}/>
                    </div>
                    

                :   props.selected.base === "Full Set"
                &&  props.name === "Ombre"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={30}
                            name={props.name}
                        >£30</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={30}
                            color={"white"}/>
                    </div>
        
                :   props.selected.base === "Infill"
                &&  props.name === "Acrylic"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={13}
                            name={props.name}
                        >£13</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={13}
                            color={"white"}/>
                    </div>
                
                :   props.selected.base === "Infill"
                &&  props.name === "Gel Powder"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={15}
                            name={props.name}
                        >£15</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={15}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Infill"
                &&  props.name === "Ombre"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={25}
                            name={props.name}
                        >£25</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={25}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Spa"
                &&  props.name === "Pedicure"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={20}
                            name={props.name}
                        >£20</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={20}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Spa"
                &&  props.name === "Manicure"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={10}
                            name={props.name}
                        >£10</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={10}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Take Off"
                &&  props.name === "Take Off Acrylic"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={10}
                            name={props.name}
                        >£10</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={10}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Take Off"
                &&  props.name === "Take Off Shellac"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={6}
                            name={props.name}
                        >£6</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={6}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Polish change on natural nails"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={6}
                            name={props.name}
                        >£6</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={6}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Polish change on Acrylic"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={8}
                            name={props.name}
                        >£8</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={8}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Polish change for feet"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={8}
                            name={props.name}
                        >£8</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={8}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Acrylic on two big toes"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={8}
                            name={props.name}
                        >£8</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={8}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Infill for two big toes"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={6}
                            name={props.name}
                        >£6</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={6}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Repair for one nail"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={3}
                            name={props.name}
                        >£3</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={3}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Cut down nail acrylic only"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={3}
                            name={props.name}
                        >£3</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={3}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Other Services"
                &&  props.name === "10 diamonds"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={3}
                            name={props.name}
                        >£3</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={3}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Design"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={3}
                            name={props.name}
                        >from £3</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={3}
                            color={"white"}/>
                    </div>
                
                :   props.selected.base === "Other Services"
                &&  props.name === "Shellac on natural nails"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={15}
                            name={props.name}
                        >£15</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={15}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Shellac on feet"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={18}
                            name={props.name}
                        >£18</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={18}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Other Services"
                &&  props.name === "Shellac on hand and feet"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleCore}
                            price={30}
                            name={props.name}
                        >£30</div>
                        <Button
                            handleEvent={props.handleCore}
                            name={props.name}
                            price={30}
                            color={"white"}/>
                    </div>
                
                // Extras Prices
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Acrylic"
                &&  props.name === "With Shellac"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleExtras}
                            price={7}
                            name={props.name}
                        >+£7</div>
                        <Button
                            handleEvent={props.handleExtras}
                            name={props.name}
                            price={7}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Acrylic"
                &&  props.name === "Without Shellac"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleExtras}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleExtras}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>
                
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Gel Powder"
                &&  props.name === "With Shellac"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleExtras}
                            price={9}
                            name={props.name}
                        >+£9</div>
                        <Button
                            handleEvent={props.handleExtras}
                            name={props.name}
                            price={9}
                            color={"white"}/>
                    </div>
                
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Gel Powder"
                &&  props.name === "Without Shellac"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleExtras}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleExtras}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Permanent white tips"
                &&  props.name === "With UV"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleExtras}
                            price={3}
                            name={props.name}
                        >+£3</div>
                        <Button
                            handleEvent={props.handleExtras}
                            name={props.name}
                            price={3}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Permanent white tips"
                &&  props.name === "Without UV"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleExtras}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleExtras}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Infill"
                &&  props.selected.core === "Acrylic"
                &&  props.name === "With Shellac"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleExtras}
                            price={7}
                            name={props.name}
                        >+£7</div>
                        <Button
                            handleEvent={props.handleExtras}
                            name={props.name}
                            price={7}
                            color={"white"}/>
                    </div>
                
                :   props.selected.base === "Infill"
                &&  props.selected.core === "Acrylic"
                &&  props.name === "Without Shellac"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleExtras}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleExtras}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>
                
                :   props.selected.base === "Infill"
                &&  props.selected.core === "Gel Powder"
                &&  props.name === "With Shellac"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleExtras}
                            price={7}
                            name={props.name}
                        >+£7</div>
                        <Button
                            handleEvent={props.handleExtras}
                            name={props.name}
                            price={7}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Infill"
                &&  props.selected.core === "Gel Powder"
                &&  props.name === "Without Shellac"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleExtras}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleExtras}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Spa"
                &&  props.selected.core === "Pedicure"
                &&  props.name === "With Shellac"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleExtras}
                            price={10}
                            name={props.name}
                        >+£10</div>
                        <Button
                            handleEvent={props.handleExtras}
                            name={props.name}
                            price={10}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Spa"
                &&  props.selected.core === "Pedicure"
                &&  props.name === "Without Shellac"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleExtras}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleExtras}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Spa"
                &&  props.selected.core === "Manicure"
                &&  props.name === "With Shellac"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleExtras}
                            price={10}
                            name={props.name}
                        >+£10</div>
                        <Button
                            handleEvent={props.handleExtras}
                            name={props.name}
                            price={10}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Spa"
                &&  props.selected.core === "Manicure"
                &&  props.name === "Without Shellac"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleExtras}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleExtras}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>
                

                //  Length Prices
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Acrylic"
                &&  props.selected.extras === "Without Shellac"
                &&  props.name === "Long"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={5}
                            name={props.name}
                        >+£5</div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={5}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Acrylic"
                &&  props.selected.extras === "Without Shellac"
                &&  props.name === "Short"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>
                
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Acrylic"
                &&  props.selected.extras === "With Shellac"
                &&  props.name === "Long"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={3}
                            name={props.name}
                        >+£3</div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={3}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Acrylic"
                &&  props.selected.extras === "With Shellac"
                &&  props.name === "Short"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>
                
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Gel Powder"
                &&  props.selected.extras === "Without Shellac"
                &&  props.name === "Long"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={5}
                            name={props.name}
                        >+£5</div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={5}
                            color={"white"}/>
                    </div>
                
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Gel Powder"
                &&  props.selected.extras === "Without Shellac"
                &&  props.name === "Short"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>
                
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Gel Powder"
                &&  props.selected.extras === "With Shellac"
                &&  props.name === "Long"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={2}
                            name={props.name}
                        >+£2</div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={2}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Gel Powder"
                &&  props.selected.extras === "With Shellac"
                &&  props.name === "Short"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Permanent white tips"
                &&  props.selected.extras === "Without UV"
                &&  props.name === "Long"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={2}
                            name={props.name}
                        >+£2</div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={2}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Permanent white tips"
                &&  props.selected.extras === "Without UV"
                &&  props.name === "Short"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>
                
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Permanent white tips"
                &&  props.selected.extras === "With UV"
                &&  props.name === "Long"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={2}
                            name={props.name}
                        >+£2</div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={2}
                            color={"white"}/>
                    </div>
                
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Permanent white tips"
                &&  props.selected.extras === "With UV"
                &&  props.name === "Short"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>
                
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Ombre"
                &&  props.name === "Long"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={2}
                            name={props.name}
                        >+£2</div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={2}
                            color={"white"}/>
                    </div>
                
                :   props.selected.base === "Full Set"
                &&  props.selected.core === "Ombre"
                &&  props.name === "Short"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>
                
                :   props.selected.base === "Infill"
                &&  props.selected.core === "Acrylic"
                &&  props.selected.extras === "Without Shellac"
                &&  props.name === "Long"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={2}
                            name={props.name}
                        >+£2</div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={2}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Infill"
                &&  props.selected.core === "Acrylic"
                &&  props.selected.extras === "Without Shellac"
                &&  props.name === "Short"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Infill"
                &&  props.selected.core === "Acrylic"
                &&  props.selected.extras === "With Shellac"
                &&  props.name === "Long"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={2}
                            name={props.name}
                        >+£2</div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={2}
                            color={"white"}/>
                    </div>
                
                :   props.selected.base === "Infill"
                &&  props.selected.core === "Acrylic"
                &&  props.selected.extras === "With Shellac"
                &&  props.name === "Short"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>
                
                :   props.selected.base === "Infill"
                &&  props.selected.core === "Gel Powder"
                &&  props.selected.extras === "Without Shellac"
                &&  props.name === "Long"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={2}
                            name={props.name}
                        >+£2</div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={2}
                            color={"white"}/>
                    </div>
                
                :   props.selected.base === "Infill"
                &&  props.selected.core === "Gel Powder"
                &&  props.selected.extras === "Without Shellac"
                &&  props.name === "Short"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Infill"
                &&  props.selected.core === "Gel Powder"
                &&  props.selected.extras === "With Shellac"
                &&  props.name === "Long"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={2}
                            name={props.name}
                        >+£2</div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={2}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Infill"
                &&  props.selected.core === "Gel Powder"
                &&  props.selected.extras === "With Shellac"
                &&  props.name === "Short"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Infill"
                &&  props.selected.core === "Ombre"
                &&  props.name === "Long"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={2}
                            name={props.name}
                        >+£2</div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={2}
                            color={"white"}/>
                    </div>

                :   props.selected.base === "Infill"
                &&  props.selected.core === "Ombre"
                &&  props.name === "Short"
                ?   <div>
                        <div
                            style={{display: "inline"}}
                            onClick={props.handleLength}
                            price={0}
                            name={props.name}
                        ></div>
                        <Button
                            handleEvent={props.handleLength}
                            name={props.name}
                            price={0}
                            color={"white"}/>
                    </div>
                :   null
            }  
        </div>
    );
};