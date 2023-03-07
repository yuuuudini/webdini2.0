import { ConfigProvider, theme, Layout } from "antd";
import { useState } from "react";
import Navbar from "./navbar";

const {Header, Content, Footer, Sider} = Layout

export default function MyLayout(props) {
  const [isLightMode, setIsLightMode] = useState(false);
  const pageProps = props.pageProps
  let color = isLightMode ? "#FFFFFF" : "#141414";

  return (
    <ConfigProvider
      theme={{
        algorithm: isLightMode ? theme.defaultAlgorithm : theme.darkAlgorithm,
        token: { colorPrimary: "#5300b3" },
        components: {
          Header: {
            colorPrimaryBg: color,
          },
        },
      }}
    >
      <Layout style={{ height: "100vh", margin: 0 }}>
        <Header style={{ backgroundColor: color }}>
          <Navbar onChange={() => setIsLightMode(!isLightMode)} />
        </Header>
        <Content style={{ backgroundColor: color }}>
          {pageProps}
        </Content>
        <Footer style={{ backgroundColor: color }}></Footer>
      </Layout>
    </ConfigProvider>
  );
}
