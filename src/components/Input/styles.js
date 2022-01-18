import styled from "styled-components";

export const Container = styled.div`
    text-align: left;

`;

export const InputContainer = styled.div`
    background: var(--white);
    border-radius: 10px;
    border: 2px solid var(--grey);
    color: var(--grey);
    padding: 1em;
    width: 100%;
    height: 100%;
    display: flex;
    transition: 0.4s;

    textarea {
        background: transparent;
        align-items: center;
        flex: 1;
        border: 0;
        color: var(--black);
        &::placeholder {
            color: var(--grey);
        }
    }

`;