import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles';
import { useTheme } from 'styled-components';

export default function Post({ title, description }) {
    const theme = useTheme();
    const styles = {
        margin: theme.spacing.small,
        padding: theme.spacing.medium,
        borderRadius: theme.borderRadius,
    }
    
    return (
        <Container
            style={styles}
        >
            <h2>{title}</h2>
            <small>{description}</small>
        </Container>
    )
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}