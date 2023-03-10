import React, { useState } from 'react'
import { Header } from 'antd/es/layout/layout'
import { DownOutlined} from "@ant-design/icons"
import { Dropdown, Button, Space, Menu } from 'antd'
import type { MenuProps } from 'antd';
import { Outlet } from 'react-router-dom';


const NavigationBar:React.FC = () => {
  const [leng, setLeng] = useState("EN")

  const items: MenuProps['items'] = [
    {
      label: 'EN',
      key: '1',
    },
    {
      label: 'TH',
      key: '2',
    },  
  ];

  const menuProps = {
    items,
  };

  return (
    <Header className='navigation'>
        <Dropdown  menu={menuProps} className="dropdown" >
          <Button>
            <Space>
              {leng}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Outlet/>
    </Header>
  )
}

export default NavigationBar