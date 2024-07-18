import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

function Editcard({ show, handleClose, task, saveChanges }) {
    const [title, setTitle] = useState(task.title);
    const [date, setDate] = useState(task.date);
    const [description, setDescription] = useState(task.task);
    const [priority, setPriority] = useState(task.priority);

    const handleSave = () => {
        saveChanges({ title, date, task: description, priority });
        handleClose();
    };

    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Edit Task</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formTitle">
                        <Form.Label>Title or Heading</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control 
                            type="date" 
                            value={date} 
                            onChange={(e) => setDate(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Task</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPriority">
                        <Form.Label>Priority</Form.Label>
                        <Form.Select 
                            value={priority} 
                            onChange={(e) => setPriority(e.target.value)} 
                        >
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Editcard;
