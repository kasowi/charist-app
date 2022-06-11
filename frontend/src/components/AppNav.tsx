import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo2 from "./components-css/logo2.svg";
import {useNavigate} from "react-router-dom";

export default function AppNav() {

    const navigate = useNavigate();

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
                        <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
                        <NavDropdown title="Regions" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate("/regions/africa")}>Africa</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/regions/americas")}>Americas</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/regions/asia")}>Asia</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/regions/europe")}>Europe</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/regions/oceania")}>Oceania</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="SDGs" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => navigate("/sdgs/1")}>1 - No Poverty</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/sdgs/2")}>2 - Zero Hunger</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/sdgs/3")}>3 - Good Health and Well-Being</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => navigate("/sdgs/4")}>4 - Quality Education</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => navigate("/sdgs/all")}>See all SDGs</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={() => navigate("/forngos")}>For NGOs</Nav.Link>
                    </Nav>
                    <Button variant="success" size="sm" onClick={() => navigate("/login")}>Log in</Button>
                    <Button variant="outline-success" size="sm" onClick={() => navigate("/signup")}>Sign up</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

