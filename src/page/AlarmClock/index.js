import { useEffect, useState } from "react";
import { Button, message, Spin, Tooltip } from "antd";
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from "@ant-design/icons";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "./index.scss";
import { CurrentTime } from "@/utils/auto";
let timer;
const AlarmClock = () => {
  const [time, setTime] = useState({});
  const [count, setCount] = useState(1);
  // 定义full变量，为的是兼容全屏和非全屏的样式，比如full的时候高度为200，非full高度为100
  const [full, setFull] = useState(false);
  // 创建一个fullScreen的handle
  const handle = useFullScreenHandle();
  //   启动闹钟
  const Start = () => {
    console.log("启动闹钟");
  };
  //   缩小
  const narrow = () => {
    if (count <= 0.4) {
      message.warning("已经最小了！");
    } else {
      setCount((pre) => pre - 0.2);
    }
  };
  //   放大
  const enlarge = () => {
    if (count >= 1.6) {
      message.warning("已经最大了！");
    } else {
      setCount((pre) => pre + 0.2);
    }
  };
  useEffect(() => {
    timer = setInterval(() => {
      setTime({ ...CurrentTime() });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);
  return (
    <div className="alarm-clock">
      <FullScreen handle={handle} onChange={setFull} className="full-screen">
        <div className="icon">
          {full ? (
            <Tooltip title="退出全屏">
              <FullscreenExitOutlined
                onClick={() => {
                  setFull(false);
                  handle.exit();
                }}
              />
            </Tooltip>
          ) : (
            <Tooltip title="全屏">
              <FullscreenOutlined
                onClick={() => {
                  setFull(true);
                  handle.enter();
                }}
              />
            </Tooltip>
          )}
          <Tooltip title="放大">
            <PlusCircleOutlined onClick={enlarge} />
          </Tooltip>
          <Tooltip title="缩小">
            <MinusCircleOutlined title="缩小" onClick={narrow} />
          </Tooltip>
        </div>
        {time.H ? (
          <div className="time">
            <p className="font-digit" style={{ transform: `scale(${count})` }}>
              {time.H}
            </p>
            <p className="font-Y" style={{ transform: `scale(${count})` }}>
              {time.Y}
            </p>
            <Button type="primary" onClick={Start}>
              启动闹钟
            </Button>
          </div>
        ) : (
          <div className="time">
            <Spin tip="Loading..."></Spin>
          </div>
        )}
      </FullScreen>
    </div>
  );
};

export default AlarmClock;
