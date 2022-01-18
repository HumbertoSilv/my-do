import { Container, InputContainer, TaskContainer } from "./styles";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


const Dashboard = () => {
    const [pendingTasks, setPendingTasks] = useState([]);
    const [finishedTasks, setFinishedTasks] = useState([]);

    const {register, handleSubmit, reset} = useForm();

    const checkTask = (task) => {
        const index = pendingTasks.indexOf(task)
        const spliceTask = pendingTasks.splice( index, 1);
        setFinishedTasks([
            ...finishedTasks,
            ...spliceTask
        ]);
    };

    const undoTask = (task) => {
        const index = finishedTasks.indexOf(task)
        const spliceTask = finishedTasks.splice(index, 1);
        setPendingTasks([
            ...pendingTasks,
            ...spliceTask
        ]);
    };

    const newTask = ({task}) => {
        if(task.length < 1) {
            toast.error('Ops! Tarefa vazia.', {
                autoClose: 2000,
                hideProgressBar: true,
                });
            return
        };
        setPendingTasks([
            ...pendingTasks,
            {id: pendingTasks.length, 
            description: task}
        ]);
        reset();
    };

    const deleteTask = (task) => {
        const index = finishedTasks.indexOf(task)
        finishedTasks.splice(index, 1);
        setFinishedTasks([...finishedTasks]);
        toast.success('Tarefa deletada.', {
            autoClose: 2000,
            hideProgressBar: true,
            });
    };

    const date = () => {
        const value = new Date();
        return value.toLocaleDateString();
    };

    useEffect(() => {}, [finishedTasks])


    return(
        <Container>
            <InputContainer onSubmit={handleSubmit(newTask)}>
                <time>{date()}</time>
                <section>
                    <Input 
                        placeholder="Nova tarefa..."
                        name="task"
                        register={register} 
                    />
                    <Button type="submit" >Adicionar</Button>
                </section>
            </InputContainer>
            <hr/>
            <TaskContainer>
                <div>{pendingTasks.map((task, index) => (
                        <Card 
                            key={index} 
                            description={task.description}
                            title="Concluir"
                            onClick={() => checkTask(task)}/>)
                            )}
                </div>
                <div>
                {finishedTasks.map((task, index) => (
                        <Card 
                            key={index} 
                            description={task.description}
                            title="Desfazer"
                            check
                            del={() => deleteTask(task)}
                            onClick={() => undoTask(task)}/>)
                            )}
                </div>
            </TaskContainer>
            
        </Container>
    );
};

export default Dashboard;