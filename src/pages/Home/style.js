import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
`;

export const Content = styled.div`
    max-width: 400px;

    h1 {
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 3.5em;
        span {
            color: #fff;
        }
    }

    div {
        flex: 1;
        display: flex;
        margin-top: 1em;

        button + button {
            margin-left: 1em;
        }
    }

    span {
        margin-bottom: 2em;
        font-size: 1.8em;
        flex-wrap: wrap;
    }
`;