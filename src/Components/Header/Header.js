import { Button, FormControl } from '@material-ui/core';
import React from 'react';
import { Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../resources/icons/logo.png';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Header = () => {
  const classes = useStyles();
    return (
        <div>
            <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">  <img
              className="logo"
              src={logo}
              alt="volunteer-network"
              srcSet=""
            /></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#donations">Donations</Nav.Link>
      <Nav.Link href="#events">Events</Nav.Link>
      <Nav.Link href="#blogs">Blogs</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
      <Link to="/registration">
      <Button variant="contained" color="primary">
        Register
      </Button>
      </Link>
      <Link to="/adminArea">
      <Button variant="contained" color="secondary">
        Admin
      </Button>
      </Link>
    </Form>
  </Navbar>
        </div>
    );
};

export default Header;