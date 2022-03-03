import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import themes from './styles/themes';

import Layout from './components/Layout';

import ToggleThemeProvider, { ToggleThemeContext } from './contexts/ToggleThemeContext';

export default class App extends Component {
    // yarn add @babel/plugin-proposal-class-properties -D
    state = {
        changed: false,
    }

    // componentDidMount() {
    //     console.debug('componentDidMount executed');
    // }
    
    // changeState = () => {
    //     this.setState({changed: true});
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     console.debug('componentDidUpdate', {
    //         currentState: this.state,
    //         prevProps,
    //         prevState,
    //     })
    // }

    // componentDidCatch(error, info) {
    //     console.debug('componentDidCatch', { error, info });
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.debug('shouldComponentUpdate', {
    //         currentState: this.state,
    //         nextProps,
    //         nextState,
    //     })

    //     return true;
    // }

    render() {
        return (
            <ToggleThemeProvider>
                {/* <button onClick={this.changeState}>Changed state</button> */}
                <ToggleThemeContext.Consumer>

                    {({ theme }) => (
                        <ThemeProvider
                            theme={themes[theme] || themes.dark}
                        >
                            <GlobalStyles />
                            <Layout />
                        </ThemeProvider>
                    )}

                </ToggleThemeContext.Consumer>
            </ToggleThemeProvider>
        );
    }
}