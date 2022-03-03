import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    max-width: 100%;

    background: ${({ theme }) => theme.headerBackgroundColor};
    color: ${({ theme }) => theme.textColor};

    button {
        background: transparent;
        
        border: none;

        cursor: pointer;
    }
`;