import React from 'react';

class Button extends React.Component {
    render() {
        return (
            <button onClick = {() => { this.props.handleClick(this.props.pokemon); }}>Next Pokémon</button>
        )
    }
}

export default Button;
