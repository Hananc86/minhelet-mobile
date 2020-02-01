import React, { Component } from 'react'
import gql from 'graphql-tag';
import {
  Platform,
  StyleSheet,
  View,
  FlatList,
  Text
} from 'react-native'
import { graphql } from 'react-apollo';
import { compose } from 'ramda';
import Table from 'react-native-simple-table'
import { Avatar, Button, Card, Layout } from '@ui-kitten/components';
import { FlexStyleProps } from '@ui-kitten/components/ui/support/typings';

export default class Test extends Component {

  render() {
    const columns = [
      {
        title: 'User Name',
        dataIndex: 'user_login',
        width: 140
      },
      {
        title: 'ID',
        dataIndex: 'id',
        width: 105
      }
    ];
    var { data }: any = this.props;
    return (
      <Layout style={[styles.container]}>
        <View>
          <Text style={styles.title}>Users</Text>
          <Table  columns={columns} dataSource={data.users} />
        </View>
      </Layout>
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
    ...Platform.select({
      ios: {
        flex: 1,
        justifyContent : 'center',
        flexDirection: 'row',
        paddingTop: 20
      },
      android: {}
    }),
  },
  title: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center'
  }
});