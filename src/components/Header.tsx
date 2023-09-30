import React, {useState} from 'react';
import { Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap';

const Header: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault(); // Preventing form submission by default
        // Here you can perform search logic using the searchTerm value
        // For example, calling a function to perform a search
        performSearch(searchTerm);
    };

    const performSearch = (term: string) => {
        // Here you can perform search logic, for example, send a request to the server
        console.log(`Searching for a query: ${term}`);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Navbar bg="light" expand="lg" className="justify-content-between">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="https://www.citypng.com/public/uploads/small/11639594320pss4tbiransxz0lclgesdm9kr73odulxn16eo3n1remr761kz0vj2nda3llvan8besj5i9fp18ocdvfnf36c5b6wfz8b8itb81fp.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    {/* Add navigation links here */}
                </Nav>

                <Form
                    className="navbar__form"
                    onSubmit={handleSearch}
                >
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </Form>
                <div className="ml-2">
                    {new Date().toLocaleString()}
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;
