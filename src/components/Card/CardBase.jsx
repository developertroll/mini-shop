import Card from "react-bootstrap/Card";

function CardBase(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title style={{ contentAlign: "center" }}>
          {props.title} {props.price}
        </Card.Title>
        <Card.Text className="overflow-hidden">{props.content}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        조회수: {props.view}, 좋아요: {props.like}
      </Card.Footer>
    </Card>
  );
}

export default CardBase;
