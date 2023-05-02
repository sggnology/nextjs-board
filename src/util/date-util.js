// javascript Date 인스턴스로 yyyy-MM-dd HH:mm:ss 형식의 포맷을 Date 의 prototype 에 추가한다.

const formatDate = function({dt = null, f}) {

  var weekName = ["일", "월", "화", "수", "목", "금", "토"];
  var d = dt == null ? new Date() : dt;

  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
    switch ($1) {
      case "yyyy":
        return d.getFullYear();
      case "yy":
        return (d.getFullYear() % 1000).toString().padStart(2, "0");
      case "MM":
        return (d.getMonth() + 1).toString().padStart(2, "0");
      case "dd":
        return d.getDate().toString().padStart(2, "0");
      case "E":
        return weekName[d.getDay()];
      case "HH":
        return d.getHours().toString().padStart(2, "0");
      case "hh":
        return ((d.getHours() % 12) ? d.getHours() : 12).toString().padStart(2, "0");
      case "mm":
        return d.getMinutes().toString().padStart(2, "0");
      case "ss":
        return d.getSeconds().toString().padStart(2, "0");
      case "a/p":
        return d.getHours() < 12 ? "오전" : "오후";
      default:
        return $1;
    }
  });
}

export {formatDate}