import styled from 'styled-components'

export const ButtonWithIcon = styled.button`
    /* Center the content */
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const CheckBoxButton = styled.label`
    /* Center the content horizontally */
    align-items: center;
    display: inline-flex;
    /* Cursor */
    cursor: pointer;

    > input {
        /* Hide it */
        display: none;
    }

    > div {
        border: 1px solid rgba(0, 0, 0, 0.3);
        border-radius: 4px;
        /* Spacing */
        margin-right: 8px;
        padding: 4px;

        > div {
            border-radius: 4px;
            height: 16px;
            width: 16px;

            /* For selected checkbox */
            background-color: #00449E;

            /* For not selected checkbox */
            background-color: transparent;
        }
    }
`
