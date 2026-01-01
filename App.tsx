import { useRef } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Video, { VideoRef } from 'react-native-video';

const uris = [
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
];

function App() {
  const currentUriIndex = useRef(0);
  const videoRef = useRef<VideoRef>(null);
  const isInPipRef = useRef(false);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri: uris[currentUriIndex.current] }}
        controls
        enterPictureInPictureOnLeave
        onPictureInPictureStatusChanged={({ isActive }) => {
          isInPipRef.current = isActive;
        }}
        onEnd={() => {
          if (currentUriIndex.current < uris.length - 1) {
            currentUriIndex.current++;
          }
          videoRef.current?.setSource({ uri: uris[currentUriIndex.current] });
          videoRef.current?.resume();
        }}
      />
      <Button
        title="PiP"
        onPress={() => videoRef.current?.enterPictureInPicture()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  video: { width: '100%', aspectRatio: 16 / 9 },
});

export default App;
