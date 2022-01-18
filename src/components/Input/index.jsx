import { Container, InputContainer } from "./styles";

const Input = ({register, name, ...rest}) => {
    return(
        <Container>
            <InputContainer >
                <textarea  {...register(name)} {...rest} />
            </InputContainer>
        </Container>
    );
};

export default Input;