import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Form, Button } from 'react-bootstrap';

export default function EditUser() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getUser();
    }, [id]);

    const getUser = async () => {
        try {
            const response = await axios.get(`http://localhost:80/api/user/${id}`);
            setInputs(response.data);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:80/api/user/${id}`, inputs);
            navigate('/');
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <Container className="mt-4">
            <h1 className="text-primary">Edit User</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={inputs.name || ''}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={inputs.email || ''}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="mobile" className="mb-3">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                        type="text"
                        name="mobile"
                        value={inputs.mobile || ''}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Save</Button>
            </Form>
        </Container>
    );
}
