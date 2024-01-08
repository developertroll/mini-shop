import Pagination from "react-bootstrap/Pagination";

function BasicPagination(props) {
  const items = [];
  for (let number = 1; number <= props.length(); number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === props.currentPage}
        onClick={() => props.setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
}
