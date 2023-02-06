import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const setRandomProperties = () => {
    const age = getRandomNumber(18, 70)
    const ganres = ['rock', 'rap', 'classic']
    const ganre = ganres[getRandomNumber(0, ganres.length - 1)]
    return { age, ganre }
}

console.log(setRandomProperties())
const AddForm = () => {
    const [username, setUsername] = useState('');
    const handleSubmit = async () => {
        const newUser = { id: uuidv4(), name: username, ...setRandomProperties() }
        await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
    }

    return (
        <>
            <h1>Draft React</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <div className="d-flex">
                        <Form.Control autoFocus type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                        <Button variant='outline-dark' type='submit'><BsPlusLg /></Button>
                    </div>
                </Form.Group>
            </Form>
        </>

    )
}

export default AddForm