import {NativeEventEmitter, NativeModules} from 'react-native';

const eventEmitter = new NativeEventEmitter(NativeModules.AccessibilityModule);

type EventHandler = (testID: string) => void;

export function onAccessibilityFocus(handler: EventHandler) {
  const subscription = eventEmitter.addListener('focus', handler);

  return () => subscription.remove();
}

export function onAccessibilityBlur(handler: EventHandler) {
  const subscription = eventEmitter.addListener('blur', handler);

  return () => subscription.remove();
}
