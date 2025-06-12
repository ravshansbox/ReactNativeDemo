import React from 'react';
import {Button, NativeModules, Text, View, SafeAreaView} from 'react-native';

export function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
        <Button
          title="Send Message"
          onPress={() =>
            NativeModules.PingPongModule.send('hello').then(console.log)
          }
        />
      </View>
    </SafeAreaView>
  );
}
