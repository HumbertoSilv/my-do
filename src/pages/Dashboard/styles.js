import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    // justify-content: center;
    padding: 0 38px;
    hr {
        height: 100vh;
    }
`;

export const InputContainer = styled.form`
    // flex: 1;
    margin-top: 32px;
    padding: 0 38px;

    section{
        display: flex;
        flex-direction: column;
        height: 200px;
        > div {
            width: 250px;
            flex: 1;
            margin-right: 16px;
        }
        button {
            width: 240px;
            height: 40px;
            margin: 5px;  
        }
    }
`;

export const TaskContainer = styled.div`
    padding: 0 38px;
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;

    div{
        margin-top: 16px;
        margin-right: 32px;
    }
    
`;