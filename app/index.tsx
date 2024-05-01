import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const Page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);

  return (
    <View style={styles.container}>
      {assets && (
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: assets[0].uri }}
            style={styles.video}
            isLooping
            shouldPlay
            isMuted
            resizeMode={ResizeMode.COVER}
            useNativeControls={false}
          />
          <View style={styles.overlay} />
        </View>
      )}
      <View style={styles.content}>
        <View style={{ marginTop: 60 }}>
          <Text style={styles.header}>Ready to change the way you trade!</Text>
        </View>
        <View style={styles.buttons}>
          <Link
            // href={"/login"}
            href={"/(authenticated)/(tabs)/home"}
            asChild
            style={[
              defaultStyles.pillButton,
              { flex: 1, backgroundColor: Colors.dark },
            ]}
          >
            <TouchableOpacity>
              <Text style={{ color: "#fff", fontSize: 22, fontWeight: "500" }}>
                Login
              </Text>
            </TouchableOpacity>
          </Link>
          <Link
            href={"/(authenticated)/(tabs)/home"}
            // href={"/signup"}
            asChild
            style={[
              defaultStyles.pillButton,
              { flex: 1, backgroundColor: "#fff" },
            ]}
          >
            <TouchableOpacity>
              <Text style={{ fontSize: 22, fontWeight: "500" }}>Signup</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    position: "relative",
    flex: 1,
  },
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#fff",
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 50,
    paddingHorizontal: 10,
  },
});

export default Page;
