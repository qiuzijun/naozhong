// 获取当前时间
import moment from "momnet";

// 获取当前时间
export const CurrentTime = () => {
  const time = new Date().getTime();
  return {
    H: moment(time).format("hh:mm:ss"),
    Y: moment(time).format("YYYY年MM月DD日"),
  };
};
