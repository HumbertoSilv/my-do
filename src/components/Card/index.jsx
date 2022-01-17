import Button from "../Button";
import { Container } from "./styles";

const Card = ({description, onClick}) => {
    return(
        <Container>
            <span>{description}</span>
            <hr/>
            <Button onClick={onClick} >Concluir</Button>
        </Container>
    );
};

export default Card;