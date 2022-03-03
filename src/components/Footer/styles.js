import styled from 'styled-components';

export default styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 100%;

    background: ${({ theme }) => theme.footerBackgroundColor};
    color: ${({ theme }) => theme.textColor};

    font-weight: 500;

    button {
        border: none;
        background: transparent;

        cursor: pointer;
    }
`;