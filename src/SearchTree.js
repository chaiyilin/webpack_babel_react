import {Tree, Input} from 'antd';
import React, {Component} from 'react';
import links from './links';
import {Link} from 'react-router-dom'

const TreeNode = Tree.TreeNode;
const Search = Input.Search;

const getParentKey = (key, tree) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (node.children) {
            if (node.children.some(item => item.key === key)) {
                parentKey = node.key;
            } else if (getParentKey(key, node.children)) {
                parentKey = getParentKey(key, node.children);
            }
        }
    }
    return parentKey;
};

class SearchTree extends Component {
    //https://medium.com/@joshblack/writing-a-react-component-in-es2015-a0b27e1ed50a
    state = {
        searchValue: '',
        autoExpandParent: true,
    };
    onExpand = (expandedKeys) => {
        this.setState({
            expandedKeys,
            autoExpandParent: true,
        });
    };
    onChange = (e) => {
        const value = e.target.value;
        const expandedKeys = links.map((item, index, arr) => {
            if (item.title.indexOf(value) > -1) {
                return getParentKey(item.key, links);
            }
            return null;
        }).filter((item, i, self) => item && self.indexOf(item) === i);
        this.setState({
            expandedKeys,
            searchValue: value,
            autoExpandParent: true,
        });
    };

    render() {
        const {searchValue, expandedKeys, autoExpandParent} = this.state;
        const loop = data => data.map((item) => {
            const index = item.title.indexOf(searchValue);//const index = item.key.search(searchValue);
            const beforeStr = item.title.substr(0, index);//const beforeStr = item.key.substr(0, index);
            const matched = item.title.substr(index, searchValue.length);
            const afterStr = item.title.substr(index + searchValue.length);//const afterStr = item.key.substr(index + searchValue.length);
            const title = index > -1 ?
                (
                    <span>
                        {beforeStr}
                        <span style={{color: '#f50'}}>{matched}</span>
                        {afterStr}
                    </span>
                ) : <span>{item.title}</span>;
            if (item.children) {
                return (
                    <TreeNode title={title} key={item.title}>
                        {loop(item.children)}
                    </TreeNode>
                );
            }
            return (
                <TreeNode title="" key={item.title}>
                    <Link to={{pathname:'/' +item.example}}>{item.title}</Link>
                </TreeNode>);
        });
        return (
            <div>
                <Search style={{width: 300}} placeholder="Search" onChange={this.onChange}/>
                {                <Tree
                    defaultExpandAll
                    onExpand={this.onExpand}
                    autoExpandParent={autoExpandParent}
                >
                    {loop(links)}
                </Tree>}
            </div>
        );
    }
}

export default SearchTree;