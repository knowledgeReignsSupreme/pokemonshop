import React from "react";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here

const ScrollButton = () => (
            <div>
                <ScrollUpButton style={{zIndex: 10, backgroundColor: 'white'}} />
            </div>
        );   

 export default ScrollButton;