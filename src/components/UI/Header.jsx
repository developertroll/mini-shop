import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Contanier from "react-bootstrap/Container";
import NavLink from "react-bootstrap/esm/NavLink";
import { Link } from "react-router-dom";
import axios from "axios";

function Header() {
  const userData = async () => {
    const config = {
      method: "get",
      url: "/jwt",
      headers: {
        "x-access-token": localStorage.getItem("x-access-token"),
      },
    };
    axios(config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Contanier fluid>
        <Navbar.Brand href="#home">Woosan Panda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">메인</Nav.Link>
            <NavLink eventKey={1} as={Link} to="/Test2">
              쇼핑
            </NavLink>
            <Nav.Link href="/board">커뮤니티</Nav.Link>
          </Nav>
          <Nav className="justify-content-end" variant="fill">
            <Nav.Item>
              <Nav.Link onClick={userData}>개인페이지</Nav.Link>
            </Nav.Item>
            <Nav.Link href="#notification">알람</Nav.Link>
            <Nav.Link href="#logout">로그아웃</Nav.Link>
            <Nav.Link href="login">로그인</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Contanier>
    </Navbar>
  );
}

export default Header;
