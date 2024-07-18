import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

function Addcard({ tasks, setTasks }) {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addTheCard = (e) => {
        e.preventDefault();
        const newTask = {
            title,
            date,
            task,
            priority
        };
        setTasks([...tasks, newTask]);
        handleClose(); 
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Task
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Add Task</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form onSubmit={addTheCard}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title or Heading</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Task" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.Date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control 
                                type="date" 
                                aria-label="Date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Task</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Priority</Form.Label>
                            <Form.Select 
                                aria-label="Default select example"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            >
                                <option>Open this select menu</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "10px"
                            }}
                        >
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Addcard;
