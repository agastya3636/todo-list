import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Editcard from './Editcard';

function Cards({ tasks, setTasks }) {
    const [editIndex, setEditIndex] = useState(null);
    const [showEdit, setShowEdit] = useState(false);

    function deleteTask(index) {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    }

    function handleEdit(index) {
        setEditIndex(index);
        setShowEdit(true);
    }

    function handleCloseEdit() {
        setShowEdit(false);
        setEditIndex(null);
    }

    function saveChanges(updatedTask) {
        const newTasks = [...tasks];
        newTasks[editIndex] = updatedTask;
        setTasks(newTasks);
        handleCloseEdit();
    }

    return (
        <div>
            <h1>Tasks</h1>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px',
            }}>
                {tasks.map((task, index) => (
                    <Card style={{
                        width: '18rem',
                        backgroundColor: task.priority === 'High' ? "Red" : task.priority === 'Medium' ? "Yellow" : "LightGreen",
                        padding:"10px"
                    }} key={index}>
                        <Card.Body>
                            <Card.Title>{task.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{task.date}</Card.Subtitle>
                            <Card.Text>{task.task}</Card.Text>
                            <Button variant="primary" onClick={() => handleEdit(index)}>Edit</Button>
                            <Button variant="danger" onClick={() => deleteTask(index)}>Delete</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            {editIndex !== null && (
                <Editcard 
                    show={showEdit} 
                    handleClose={handleCloseEdit} 
                    task={tasks[editIndex]} 
                    saveChanges={saveChanges} 
                />
            )}
        </div>
    );
}

export default Cards;
