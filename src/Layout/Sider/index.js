import { NavLink } from "react-router-dom";
import "./index.scss";
const Sider = () => {
  return (
    <div className="Sider">
      <ul className="shijian">
        <li>
          <NavLink to="/" exact>
            闹钟
          </NavLink>
        </li>
        <li>
          <NavLink to="/stopwatch">计时器</NavLink>
        </li>
        <li>
          <NavLink to="/timer">秒表</NavLink>
        </li>
        <li>
          <NavLink to="/time">时间</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sider;
