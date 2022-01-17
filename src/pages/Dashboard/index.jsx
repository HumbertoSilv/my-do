import { Container, InputContainer } from "./styles";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";

const Dashboard = () => {
    const {register, handleSubmit} = useForm();

    return(
        <Container>
            <InputContainer>
                <time>hoje</time>
                <section>
                    <Input 
                        placehoder="Nova tarefa..."
                        name="task"
                        register={register} 
                    />
                    <Button type="submit" >Adicionar</Button>
                </section>
            </InputContainer>
            
        </Container>
    );
};

export default Dashboard;