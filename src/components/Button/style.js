import styled from "styled-components";

export const Container = styled.button`
    background: ${(props) => (props.colorSchema? props.colorSchema: "#0c0d0d")};
    color: ${(props) => (props.colorSchema? "#0c0d0d": "#f5f5f5")};
    height: 45px;
    border-radius: 8px;
    border: 2px solid var(--black);
    font-family: "Roboto Mono", monospace;
    margin: auto;
    width: 90%;
    transition: 0.2s;

    :hover {
        border: 2px solid var(--white);
    }
`;