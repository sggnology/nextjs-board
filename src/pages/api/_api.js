const getJson = (url) => requestJson(url, "get", null);
const postJson = (url, body) => requestJson(url, "post", body);

const requestJson = function(url, method, body){
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
}

const BoardApi = function () {

  const endPoint = "/api/board/car"

  const registerBoard = (newBoardData) => postJson(endPoint, newBoardData)

  return {
    registerBoard
  }
}();

export {BoardApi}