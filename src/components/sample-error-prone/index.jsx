import React from "react";

export class SampleErrorProne extends React.Component {

    state = {
        error: false
    };

    throwError = () => {
        this.setState({
            error: true
        });
    };

    render() {
        const { error } = this.state;

        if (error) {
            throw "<SampleErrorProne error>";
        }

        return (
            <button onClick={ this.throwError }>Throw</button>
        )
    }
}