import BoardContent from "./board-content";

const BoardPost = ({ boardPostDataList }) => {
    return (
        <div>
            {boardPostDataList.map((boardPostData, index) =>(
                <BoardContent key={`board-content-${index}`} content={boardPostData.content} />
            ))}
        </div>
    )
}

export default BoardPost;