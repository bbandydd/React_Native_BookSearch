/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS
} from 'react-native';

import Featured from './app/components/Featured';
import Search from './app/components/Search';

const tabs = {
    featured: 'featured',
    search: 'search'
}

class React_Native_BookSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: tabs.featured
        }
    }

    handleChangeTab(tab) {
        this.setState({
            selectedTab: tab
        })
    }

    render() {
        return (
            <TabBarIOS selectedTab={ this.state.selectedTab }>
                <TabBarIOS.Item
                    selected={ this.state.selectedTab === tabs.featured }
                    systemIcon={ tabs.featured }
                    onPress={ this.handleChangeTab.bind(this, tabs.featured) }
                    >
                    <Featured />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    selected={ this.state.selectedTab === tabs.search }
                    systemIcon={ tabs.search }
                    onPress={ this.handleChangeTab.bind(this, tabs.search) }
                    >
                    <Search />
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }
}

AppRegistry.registerComponent('React_Native_BookSearch', () => React_Native_BookSearch);
