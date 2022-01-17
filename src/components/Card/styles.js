import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--white);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 200px;
    padding: 16px;
    border: 1px solid var(--black);
    color: var(--black);

    hr {
        width: 80%;
        margin-top: 16px;
        margin-bottom: 16px;
    }
    
    button{
        margin-top: 80px;
        align-self: flex-end;
    }
`;
