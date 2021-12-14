import React from "react";
import { Result } from "antd";
import * as S from "./Page404.style";
import { path } from "../../App";
import { Link } from "react-router-dom";

const Page404 = () => (
  <S.Container className="row">
    <Result
      status="404"
      title="404"
      subTitle={"not found"}
      extra={<Link to={path.home}>Homepage</Link>}
    />
  </S.Container>
);

export default Page404;
