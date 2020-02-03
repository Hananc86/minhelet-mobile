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
    var { data, singup, navigation }: any = this.props;
    return (
      <Layout style={[styles.container]}>
        <View>
          <Button onPress={() => navigation.navigate('HomeNavigator')}>navigate</Button>
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
export const singupMutation = gql`
  mutation singup(
    $email: String!
    $password: String!
  ) {
    singup(
      email: $email
      password: $password
    ) {
      id
    }
  }
`

// const signupEnhancer = graphql<{}, {}, {}, {}>(singupMutation, {
// 	props (props) {
// 		return {
// 			singup ({ email, password }) {
// 				return props.mutate({
// 					variables: {
// 						password: '123456',
// 						email: 'Hanancohen86@gmail.com'
//           },
// 				});
//       }
// 		};
// 	}
// });

const signupEnhancer = graphql(singupMutation, {
  name: 'singup'
})
module.exports = compose(
  graphql(users),
  signupEnhancer
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