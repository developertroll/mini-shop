import BoardBase from "./BoardBase";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import BoardButtons from "./BoardButtons";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";

const tableStyle = {
  border: "1px solid black",
  //text 중앙정렬
  textAlign: "center",
};

function BoardPage(props) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [boardList, setBoardList] = useState([]);
  const [board, setBoard] = useState({});
  const [currentRender, setCurrentRender] = useState(0);

  const fetchBoardList = async (index) => {
    const response = await axios.get(`/board/${index}`);
    setBoardList(response.data);
  };
  useEffect(() => {
    fetchBoardList(currentPage);
  }, [currentPage]);

  const viewUpdate = async (index) => {
    const response = await axios.get(`/view/${index}`);
    console.log(response);
  };

  const showBoard = (index) => {
    const target = boardList.find((board) => board.boardIdx === index);
    setBoard(target);
    viewUpdate(index);
    setCurrentRender(1);
    navigate(`/board/${index}`, { state: target });
  };

  return (
    <div>
      {/* boardList(array)의 값당 boardbase에 값을 대입하여 반복 */}
      <Table striped bordered hover style={tableStyle}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>좋아요</th>
            <th>조회수</th>
            <th>수정일</th>
          </tr>
        </thead>
        <tbody>
          {currentRender === 0 &&
            boardList.map((board) => (
              <BoardBase
                key={board.boardIdx}
                type={board.Type}
                index={board.boardIdx}
                title={board.Title}
                writer={board.writer}
                like={board.like_count}
                view={board.view}
                update={moment(board.last_update).format("YYYY-MM-DD")}
                showDetail={showBoard}
              />
            ))}
        </tbody>
      </Table>

      <BoardButtons />
    </div>
  );
}

export default BoardPage;
