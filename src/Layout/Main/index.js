import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Spin } from "antd";
import "./index.scss";
const AlarmClock = lazy(() => import("@/page/AlarmClock"));
const StopWatch = lazy(() => import("@/page/StopWatch"));
const Timer = lazy(() => import("@/page/Timer"));
const Time = lazy(() => import("@/page/Time"));
const Main = () => {
  return (
    <div className="main">
      <Suspense
        fallback={
          <div className="Spin">
            <Spin tip="Loading..."></Spin>
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <AlarmClock />
          </Route>
          <Route path="/stopwatch" component={StopWatch}>
            {/* <StopWatch /> */}
          </Route>
          <Route path="/timer">
            <Timer />
          </Route>
          <Route path="/time">
            <Time />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default Main;
