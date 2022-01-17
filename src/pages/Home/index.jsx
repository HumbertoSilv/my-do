import Button from "../../components/Button";
import { Container, Content } from "./style";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return(
        <Container>
            <Content>
            <h1>
                MY<span>-</span>DO
            </h1>
            <span>Seu espaço para organizar suas tarefas, simples e fácil.</span>
            <div>
                <Button onClick={() => navigate("dashboard")}>Vamos lá</Button>
            </div>
            </Content>
        </Container>
    );
};

export default Home;