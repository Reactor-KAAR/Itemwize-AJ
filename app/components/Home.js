import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

export default class Home extends React.Component {

  render () {

    return (
      <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
        <Text
          style={{
            marginTop: 64,
            padding: 16,
            fontSize: 24,
            textAlign: 'center',
            fontFamily: 'HelveticaNeue-Light',
            color: '#7F7F7F',
          }}
        >
          Hey!
        </Text>
        <Text
          style={{
            padding: 16,
            paddingTop: 0,
            fontSize: 18,
            textAlign: 'center',
            fontFamily: 'HelveticaNeue-Light',
            color: '#7F7F7F',
          }}
        >
          Do Something.
        </Text>        
        <Button
          raised
          backgroundColor='blue'
          title='Buy'
          onPress={Actions.camera} />
        <View style={{ height: 20 }}/>
        <Button
          raised
          backgroundColor='red'
          title='Sell' 
          onPress={Actions.camera} />

      </View>
    )
  }
}
