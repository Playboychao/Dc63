import React,{ useEffect } from 'react';
import { Menu } from 'antd';
import menuConfig,{ menuItem } from "./menuConfig";
import { NavLink } from "umi";

const { Item,SubMenu } = Menu;

import './style.less';

interface NavLeftProps {
}

const NavLeft: React.FunctionComponent<NavLeftProps> = (props) => {
//useEffect监控数据变化
    useEffect(()=>{
        // console.log(menuConfig)
    },[])
    let renderMenu = (data:Array<menuItem>)=>{
        return data.map((item,index)=>{
            if(item.children){   
                return <SubMenu title={item.title} key={item.key}>
                    { renderMenu(item.children) }
                </SubMenu>
            }else{
                return <Item title={item.title} key={item.key}>
                    <NavLink to={item.key}>
                        {item.title}
                    </NavLink>
                </Item>
            }
        })
    }

  return <div className="NavLeft">
{/* theme主题 */}
      <Menu theme={'dark'}>
        {renderMenu(menuConfig)}
      </Menu>
  </div>;
};

export default NavLeft;
