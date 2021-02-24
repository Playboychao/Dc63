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
        <Content style={{maxHeight:"100vh",overflow:"scroll"}}>
            <NavHeader/>
            <Content 
                style={{minHeight:"60vh",border:"1px solid #000",margin:'12px'}}>
                {props.children}
            </Content>
            <Footer
                style={{textAlign:"center",color:"#ccc"}}
            >建议使用 Chrome打开 &copy;2020 PlayBoyChao All Right Remain
            </Footer>
        </Content>
  </Layout>;
};

export default _layout;
