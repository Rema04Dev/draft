import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid';

const AddForm = () => {
    const [username, setUsername] = useState('');
    const handleSubmit = async () => {
        const newUser = { id: uuidv4(), name: username }
        await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control autoFocus type='text' value={username} onChange={(e) => setUsername(e.target.value)}>
                </Form.Control>
                <Button variant='outline-dark' type='submit'><BsPlusLg /></Button>
            </Form.Group>
        </Form>
    )
}

export default AddForm