import React, {useEffect} from 'react';
import {
  Button,
  NativeModules,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {onAccessibilityFocus, onAccessibilityBlur} from './onAccessibility';

export function App(): React.JSX.Element {
  useEffect(() => {
    NativeModules.AccessibilityModule.enableAccessibilityFocusTracking();

    const unsubscribeFocus = onAccessibilityFocus(testID => {
      console.log('focus', testID);
    });

    const unsubscribeBlur = onAccessibilityBlur(testID => {
      console.log('blur', testID);
    });

    return () => {
      unsubscribeFocus();
      unsubscribeBlur();
    };
  }, []);

  return (
    <SafeAreaView>
      <View>
        <View>
          <TouchableOpacity
            testID="hello-button-1"
            accessible
            accessibilityRole="button"
            accessibilityLabel="Hello 1">
            <Text>Hello 1</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            testID="hello-button-2"
            accessible
            accessibilityRole="button"
            accessibilityLabel="Hello 2">
            <Text>Hello 2</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            testID="hello-button-3"
            accessible
            accessibilityRole="button"
            accessibilityLabel="Hello 3">
            <Text>Hello 3</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Button
            testID="send-button-1"
            accessibilityLabel="Send Message 1"
            title="Send Message 1"
            onPress={() =>
              NativeModules.PingPongModule.send('hello').then(console.log)
            }
          />
        </View>
        <View>
          <Button
            testID="send-button-2"
            accessibilityLabel="Send Message 2"
            title="Send Message 2"
            onPress={() =>
              NativeModules.PingPongModule.send('hello').then(console.log)
            }
          />
        </View>
        <View>
          <Button
            testID="send-button-3"
            accessibilityLabel="Send Message 3"
            title="Send Message 3"
            onPress={() =>
              NativeModules.PingPongModule.send('hello').then(console.log)
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
