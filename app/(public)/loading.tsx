import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Loading() {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 48,
      }}
      spin
    />
  );
    return (
      <Spin style={{display: "flex", justifyContent: "center", paddingBottom: "50px", marginTop: "50px" }} indicator={antIcon} />
    )
  }