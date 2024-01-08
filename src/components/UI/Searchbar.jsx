import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

function Searchbar() {
  return (
    <Navbar className="justify-content-center">
      <Form className="d-flex">
        <Form.Control placeholder="검색" aria-label="검색" />
      </Form>
      <Button variant="outline-success">검색</Button>
    </Navbar>
  );
}

export default Searchbar;
