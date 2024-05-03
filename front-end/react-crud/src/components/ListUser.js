import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button ,Container} from 'react-bootstrap';

export default function ListUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get('http://localhost:80/api/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    };

    const deleteUser = (id) => {
        axios.delete(`http://localhost:80/api/user/${id}`)
            .then(() => fetchUsers())
            .catch(error => console.error('Error deleting user:', error));
    };

    return (
        <Container>
            <h1 className="text-primary">List Users</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`} className="btn btn-primary btn-sm me-2">Edit</Link>
                                <Button
                                    onClick={() => deleteUser(user.id)}
                                    className="btn btn-danger btn-sm"
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Link to="/user/create" className="btn btn-success">Add User</Link>
        </Container>
    );
}
