import HoverCounter from "./HoverCounter";
import React, { useState } from 'react'


function withHoc(Component) {
    return function(props) {
        const [count, setCount] = useState(0);
        function increment() {
        setCount((prevCount)=> {
            return prevCount + 1;
        });
    }
        return(
            <div>
                <Component count = {count} increment = {increment} {...props}/>
            </div>
        )
    }
}

export default withHoc;

