import { Pressable, StyleSheet, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useVideoPlayer, VideoView } from "expo-video";

export default function TabTwoScreen() {
  const player = useVideoPlayer(
    "https://d1a0mm0kd3u3qz.cloudfront.net/7fe3cd0a-2941-4c7b-becb-7f1ec3c4ac38/posts/5f04ab6415c64f12b1d0304fd830e413-1732870959047.mp4",
    (player) => {
      player.showNowPlayingNotification = false;
      player.staysActiveInBackground = false;
    }
  );
  const ss = useStyles(unistyles);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <Pressable>
        <VideoView
          style={{
            flex: 1,
            height: 300,
            backgroundColor: "blue",
          }}
          contentFit="contain"
          player={player}
          nativeControls={false}
          startsPictureInPictureAutomatically={false}
          allowsVideoFrameAnalysis={false}
        />
      </Pressable>

      <View style={ss.styles.root} />
    </ParallaxScrollView>
  );
}

const unistyles = createStyleSheet((theme, rt) => ({
  root: {
    height: rt.insets.bottom,
    width: "100%",
    backgroundColor: "red",
  },
}));
const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
