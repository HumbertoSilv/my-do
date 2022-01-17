import { Container, InputContainer, TaskContainer } from "./styles";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useState } from "react";

const Dashboard = () => {
    const [pendingTasks, setPendingTasks] = useState([]);
    const [finishedTasks, setFinishedTasks] = useState([]);

    const {register, handleSubmit} = useForm();

    const newTask = ({task}) => {
        setPendingTasks([
            ...pendingTasks,
            {id: pendingTasks.length, 
            description: task}
        ]);
        console.log(pendingTasks);
    }

    return(
        <Container>
            <InputContainer onSubmit={handleSubmit(newTask)}>
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
            <TaskContainer>
                {pendingTasks.map((task) => (
                        <Card 
                            key={task.id} 
                            description={task.description} 
                            onClick={() => {}}/>))}
                <div>finish</div>
                {finishedTasks.map((task) => (
                        <Card 
                            key={task.id} 
                            description={task.description} 
                            onClick={() => {}}/>))}
            </TaskContainer>
            
        </Container>
    );
};

export default Dashboard;