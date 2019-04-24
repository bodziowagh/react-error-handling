import React from "react";

export class ErrorHandlerWrapper extends React.Component {

    state = {
        error: false
    };

    componentDidCatch(e) {
        const { name } = this.props;

        console.error(`Error caught by ${ name }!`, e);

        this.setState({
            error: true
        })
    }

    renderError = () => {
        const { name } = this.props;

        return (
            <div>
                <h1>Something went wrong!</h1>
                <h5>Caught for you by { name }.</h5>
            </div>
        )
    }

    render() {
        const { error } = this.state;
        const { children } = this.props;

        return !error ? children : this.renderError();
    }
}