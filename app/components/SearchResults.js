import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Image,
    ListView
} from 'react-native';

import BookDetail from './BookDetail';

export default class SearchResults extends Component {
    constructor(props) {
        super(props);

        const dataSource = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
        this.state = {
            dataSource: dataSource.cloneWithRows(this.props.books)
        }
    }

    render() {
        return (
            <ListView
                dataSource={ this.state.dataSource }
                renderRow={ this.renderBook.bind(this) }
                stlye={ styles.listView }
            />
        )
    }

    renderBook(book) {

        const imageURL = (typeof book.volumeInfo.imageLinks !== 'undefined') ? book.volumeInfo.imageLinks.thumbnail : '';

        return (
            <TouchableHighlight
                onPress={ () => this.showBookDetail(book) }
                underlayColor='#dddddd'>
                <View>
                    <View style={ styles.cellContainer }>
                        <Image
                            source={{ uri:imageURL }}
                            style={ styles.thumbnail }
                        />
                        <View style={ styles.rightContainer }>
                            <Text style={styles.title}>{book.volumeInfo.title}</Text>
                            <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                        </View>
                    </View>
                    <View style={ styles.separator } />
                </View>
            </TouchableHighlight>
        )
    }

    showBookDetail(book) {
        console.log(book)
        this.props.navigator.push({
            title: book.volumeInfo.title,
            component: BookDetail,
            passProps: { book }
        });
    }
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
    },
    title: {
       fontSize: 20,
       marginBottom: 8
    },
    author: {
       color: '#656565'
    },
    separator: {
       height: 1,
       backgroundColor: '#dddddd'
    },
    listView: {
       backgroundColor: '#F5FCFF'
    },
    cellContainer: {
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#F5FCFF',
       padding: 10
    },
    thumbnail: {
       width: 53,
       height: 81,
       marginRight: 10
    },
    rightContainer: {
       flex: 1
    }
})
