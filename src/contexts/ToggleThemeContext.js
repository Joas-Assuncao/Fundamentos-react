import React, { Component, createContext } from "react";

export const ToggleThemeContext = createContext();

export default class ToggleThemeProvider extends Component {
    constructor(props) {
        super(props);

        let theme = 'dark';
        
        try {
            theme = JSON.parse(localStorage.getItem('theme'))
        } catch(err) {
            console.error(err);
        }
        
        this.state = {
            theme,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.theme !== this.state.theme) {
            localStorage.setItem('theme', JSON.stringify(this.state.theme));
        }
    }

    handleToggleTheme = () => {
        this.setState(prevState => ({
            theme: prevState.theme === 'dark' ? 'light' : 'dark'
        }))
    }

    render() {
        return (
            <ToggleThemeContext.Provider
                value={{
                    theme: this.state.theme,
                    handleToggleTheme: this.handleToggleTheme,
                }}
            >
                {this.props.children}
            </ToggleThemeContext.Provider>
        )
    }
}