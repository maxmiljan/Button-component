import React from 'react' 
import './Button.css'

function Button(props){

    function addClasses(cls){
        return Object.entries(cls)
                .map(([name, value]) => (
                    (value === true) ? name :
                    (name === "startIcon") ? 'start-icon' :
                    (name === "endIcon") ? 'end-icon' : value
                ))
                .join(' ')
    }

    console.log(addClasses(props))


    return(
        <div id="elemet" className={`button ${addClasses(props)}`}>
            <button>
            <span class="material-icons">
                {props.startIcon || props.endIcon}
            </span>
                {props.text || "Default"}
            </button>
        </div>
    )
}

export default Button;