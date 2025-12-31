import { useRef, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Video, { VideoRef } from 'react-native-video';

const uris = [
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
];

function App() {
  const [currentUriIndex, setCurrentUriIndex] = useState(0);
  const videoRef = useRef<VideoRef>(null);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: uris[currentUriIndex] }}
        style={{ width: '100%', aspectRatio: 16 / 9 }}
        controls
        enterPictureInPictureOnLeave
        onEnd={() => {
          setCurrentUriIndex(
            index => index + (index < uris.length - 1 ? 1 : 0),
          );
        }}
      />
      <Button
        title="PiP"
        onPress={() => videoRef.current?.enterPictureInPicture()}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });

export default App;
