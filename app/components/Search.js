import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    NavigatorIOS
} from 'react-native';

import SearchBooks from './SearchBooks';

export default class Featured extends Component {
    render() {
        return (
            <NavigatorIOS
                style={ styles.container }
                initialRoute={{
                    title: 'Search Books',
                    component: SearchBooks
                }}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
