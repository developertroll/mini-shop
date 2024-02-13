const style = {
  cursor: "pointer",
};

function BoardBase(props) {
  const handleClick = () => {
    props.showDetail(props.index);
  };
  return (
    <tr onClick={handleClick} style={style}>
      <td>{props.index}</td>
      <td xs={8}>{props.title}</td>
      <td style={{ width: 75 }}>{props.writer}</td>
      <td>{props.like}</td>
      <td>{props.view}</td>
      <td>{props.update}</td>
    </tr>
  );
}

export default BoardBase;
