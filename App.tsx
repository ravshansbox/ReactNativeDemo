import { useRef, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Video, { type VideoRef } from 'react-native-video';

const uris = [
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
];

function App() {
  const [currentUri, setCurrentUri] = useState(0);
  const videoRef = useRef<VideoRef>(null);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{ uri: uris[currentUri] }}
        controls
        playInBackground
        enterPictureInPictureOnLeave
        onEnd={() => {
          if (currentUri === uris.length - 1) return;
          setCurrentUri(currentUri + 1);
        }}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Picture in Picture"
          onPress={() => videoRef.current?.enterPictureInPicture()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  video: { width: '100%', aspectRatio: 16 / 9 },
  buttonContainer: { padding: 16 },
});

export default App;
