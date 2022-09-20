import React from 'react';

function Button(props) {
    const property = props.property;
    const func = props.func;
    const buttons = []
    
    for(let i=0;i<property.length;i++) {
        buttons.push(<button key={i} className='no-border-button' onClick={() => func(i)}>{property[i]}</button>);
        if(i < property.length - 1) {
            buttons.push('|');
        }
    }
    return (
        buttons
    );
}

export default Button;