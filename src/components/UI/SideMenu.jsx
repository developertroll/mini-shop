import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function SideMenu(props) {
  return (
    <ListGroup>
      {props.children.map((child) => {
        return (
          <ListGroup.Item as={Link} to={child.props.path}>
            {child.props.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default SideMenu;
