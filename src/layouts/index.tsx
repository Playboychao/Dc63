import * as React from 'react';
import { Layout } from 'antd';
import NavLeft from "@/component/NavLeft";
import NavHeader from "@/component/NavHeader";
const{ Sider,Header,Content,Footer } = Layout;

interface I_layoutProps {
}

const _layout: React.FunctionComponent<I_layoutProps> = (props) => {
  return <Layout className="_layout">
        <Sider 
            style={{height:'100vh'}}
            width={200}
            collapsedWidth={0}
            breakpoint={"lg"}
            >
            <NavLeft/>
        </Sider>
        <Content>
            <Header 
                style={{background: "#fff"}}
                >
                    标题栏
            </Header>
            {props.children}
            <Footer>页脚</Footer>
        </Content>
  </Layout>;
};

export default _layout;
