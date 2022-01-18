import Button from "../Button";
import { Container } from "./styles";

const Card = ({description, check, onClick, title, del, id}) => {
    return(
        <Container check={check}>
            <span>{description}</span>
            <Button onClick={onClick} >{title}</Button>
            {del && <Button onClick={del} >Deletar</Button> }
        </Container>
    );
};

export default Card;