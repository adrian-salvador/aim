import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="./"><b>AIM</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#to-do">To-Do</Nav.Link>
                <Nav.Link href="#pomodoro-timer">Pomodoro Timer</Nav.Link>     
                <Nav.Link href="#calendar">Calendar</Nav.Link>            
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;