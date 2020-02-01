import React, { Component } from 'react'
import gql from 'graphql-tag';
import { View } from 'react-native'
import { FlatList, Text, StyleSheet } from 'react-native';
import { graphql } from 'react-apollo';
import { compose } from 'ramda';


export default class Test extends Component {
  render() {
    var { data }: any = this.props;
    console.log(data && data.users || '', '*********************************************');
    return (
    <View style={styles.container}>
      <FlatList
      data={data.users || []}
      keyExtractor={(item, index) => index}
      renderItem={({item}) => <Text>{item.user_login} {item.id}</Text>}
      />
    </View>
    )
  }
}
export const users = gql`
query users {
  users {
    id
    user_login
  }
}
`
module.exports = compose(
  graphql(users)
)(Test)

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})