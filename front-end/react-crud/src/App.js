import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import ListUser from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
    return ( 
        <Router>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">My React CRUD</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/user/create">Create User</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Container className="mt-4">
                <Routes>
                    <Route path="/" element={<ListUser />} />
                    <Route path="/user/create" element={<CreateUser />} />
                    <Route path="/user/:id/edit" element={<EditUser />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
