import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo2 from "./components-css/logo2.svg";

export default function AppNav() {

    return (
        <Navbar bg={"light"} sticky={"top"} expand={"lg"}>
            <Container>
                <Navbar.Brand href={"/"}>
                    <img src={logo2}
                         alt="logo2"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="Regions" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/regions/africa">Africa</NavDropdown.Item>
                            <NavDropdown.Item href="/regions/americas">Americas</NavDropdown.Item>
                            <NavDropdown.Item href="/regions/asia">Asia</NavDropdown.Item>
                            <NavDropdown.Item href="/regions/europe">Europe</NavDropdown.Item>
                            <NavDropdown.Item href="/regions/oceania">Oceania</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="SDGs" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/sdgs/1">1 - No Poverty</NavDropdown.Item>
                            <NavDropdown.Item href="/sdgs/2">2 - Zero Hunger</NavDropdown.Item>
                            <NavDropdown.Item href="/sdgs/3">3 - Good Health and Well-Being</NavDropdown.Item>
                            <NavDropdown.Item href="/sdgs/4">4 - Quality Education</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/sdgs/all">See all SDGs</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/forngos">For NGOs</Nav.Link>
                    </Nav>
                    <Button variant="success">Log in</Button>
                    <Button variant="outline-success">Sign up</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

