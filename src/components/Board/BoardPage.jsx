import BoardBase from "./BoardBase";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import BoardButtons from "./BoardButtons";
import { useNavigate } from "react-router-dom";

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

  const showBoard = (index) => {
    const target = boardList.find((board) => board.boardIdx === index);
    setBoard(target);
    setCurrentRender(1);
    navigate(`/board/${index}`, { state: target });
  };

  return (
    <div>
      {/* boardList(array)의 값당 boardbase에 값을 대입하여 반복 */}
      {currentRender === 0 &&
        boardList.map((board) => (
          <BoardBase
            key={board.boardIdx}
            index={board.boardIdx}
            title={board.Title}
            writer={board.writer}
            like={board.like}
            view={board.view}
            update={moment(board.update).format("YYYY-MM-DD")}
            showDetail={showBoard}
          />
        ))}
      <BoardButtons />
    </div>
  );
}

export default BoardPage;
