import styled, {css} from "styled-components";

export const Container = styled.div`
    background-color: ${(props) => (props.check? css`var(--whiteGrey)`: css`var(--white)`)};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 230px;
    height: 230px;
    padding: 16px;
    border: 2px solid var(--grey);
    color: var(--black);
    overflow: hidden;

    span {
        height: 100%;
        overflow: overlay;
    }

    button{
        margin-top: 10px;
        align-self: flex-end;
    }
`;
