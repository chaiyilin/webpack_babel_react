import React, {Component} from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import SearchTree from './SearchTree';

const MainLayout=()=>{
    return (
        <div>
            <Layout>
                <Sider>
                    <SearchTree/>
                </Sider>
                <Layout>
                    <Content>Content</Content>
                </Layout>
            </Layout>
        </div>
    )
};

export default MainLayout