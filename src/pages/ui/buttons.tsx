import React,{ useState } from 'react';
import { Card,Button } from 'antd';
import './style.less';

const Buttongroup = Button.Group

interface  IButtonProps {

}

const ButtonPage: React.FunctionComponent< IButtonProps> = (props) => {
  const [btn_loading,setLoading] = useState<boolean>(true);
  const [btn_size,setSize] = useState<"large"|"small"|"default"|undefined>("large");

  return <div className="ButtonPage">
    <Card
      title="基础按钮"
      className="card"
    >
      <div className="card-content">
        <Button >我是按钮</Button>
        <Button type="primary">我是按钮</Button>
        <Button type="dashed">我是按钮</Button>
        <Button type="danger">我是按钮</Button>
        <Button type="link">我是按钮</Button>
      </div>
    </Card>
    <Card
      title="带图标按钮"
      className="card"
    >
      <div className="card-content">
        <Button loading={btn_loading} >加载中</Button>
        <Button loading={btn_loading} type="primary">加载中</Button>
        <Button loading={btn_loading} type="dashed">加载中</Button>
        <Button loading={btn_loading} type="danger">加载中</Button>
        <Button loading={btn_loading} type="link">加载中</Button>
        <Button onClick={()=>{setLoading(!btn_loading)}} type="link">切换状态</Button>
      </div>
    </Card>
    <Card
      title="Loading"
      className="card"
    >
      <div className="card-content">
        <Button type="primary" icon="poweroff">加油奥利给</Button>
        <Button type="primary" icon="plus">加油奥利给</Button>
        <Button type="dashed"  icon="left">加油奥利给</Button>
        <Button type="danger"  icon="right">加油奥利给</Button>
        <Button type="link"    icon="edit">加油奥利给</Button>
      </div>
    </Card>
    <Card
      title="字符串"
      className="card"
    >
      <Buttongroup>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
        <Button>5</Button>
      </Buttongroup>
    </Card>
    <Card
      title="按钮尺寸"
      className="card"
    >
      <div className="card-content">
        <Button size={btn_size}onClick={()=>{setSize("large")}}>large</Button>
        <Button size={btn_size}onClick={()=>{setSize("default")}}>default</Button>
        <Button size={btn_size}onClick={()=>{setSize("small")}}>small</Button>
      </div>
    </Card>
    
  </div>;
};

export default ButtonPage;
