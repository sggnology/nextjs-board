import BoardContent from "./board-content";

const BoardPost = ({ boardPostDataList }) => {
    return (
        <div>
            {boardPostDataList.map((boardpostData, index) =>(
                <BoardContent key={`board-content-${index}`} content={boardpostData.content} />
            ))}
        </div>
    )
}

export default BoardPost;