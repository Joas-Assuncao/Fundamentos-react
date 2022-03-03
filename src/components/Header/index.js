import React, { Component } from 'react';

import { ToggleThemeContext } from '../../contexts/ToggleThemeContext';

import { Container } from './styles';

function HOC(ComponentHeader) {
    return class ComponentHOC extends Component {
        render() {
            return (
                <ToggleThemeContext.Consumer>
                    {(value) => (
                        <ComponentHeader {...value} />
                    )}
                </ToggleThemeContext.Consumer>
            )
        }
    }
}

class Header extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log({prevProps});
    }

    render() {
        return (
            <Container
                style={{
                    margin: 8,
                    padding: 24,
                    borderRadius: '10px',
                }}
            >
                <h1>JStack's Blog</h1>
                <button
                    type="button"
                    onClick={this.props.handleToggleTheme}
                >
                    {this.props.theme === 'dark' ? '🌞' : '🌚'}
                </button>
            </Container>
        );
    }
}

export default HOC(Header);




// export default function Header({ onToggleTheme, selectedTheme }) {
//     // const { onToggleTheme, selectedTheme } = useContext(ToggleThemeContext);
    
//     const theme = useTheme();

//     const stylesCommon = {
//         margin: theme.spacing.small,
//         padding: theme.spacing.large,
//         borderRadius: theme.borderRadius,
//     }

//     return (
//         <Container
//             style={stylesCommon}
//         >
//             <h1>JStack's Blog</h1>
//             <button
//                 type="button"
//                 onClick={onToggleTheme}
//             >
//                 {selectedTheme === 'dark' ? '🌞' : '🌚'}
//             </button>
//         </Container>
//     );
// }