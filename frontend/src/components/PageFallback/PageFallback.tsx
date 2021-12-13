import React from "react";
import { Spin } from "antd";
import * as S from "./PageFallback.style";

const PageFallback = () => {
  return (
    <S.Root>
      <Spin size="large" />
    </S.Root>
  );
};

export default PageFallback;
