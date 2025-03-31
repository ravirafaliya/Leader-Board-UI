import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Bar } from "react-native-progress";
import ReactNativeModal from "react-native-modal";

const TopThreeDetails = () => {
  const { userData } = useLocalSearchParams();
  const user = JSON.parse(decodeURIComponent(userData)); // Convert string back to JSON

  const [visible, setVisible] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Image source={{ uri: user.imageUrl }} style={styles.profileImage} />
          <ReactNativeModal
            isVisible={visible}
            onBackdropPress={() => setVisible(false)}
            animationIn={"slideInUp"}
            animationOut={"slideOutDown"}
            animationOutTiming={400}
            animationInTiming={400}
            useNativeDriver={true}
          >
            <View style={styles.modalContent}>
              <Image
                source={{ uri: user.imageUrl }}
                style={styles.modalProfileImage}
              />
              <Text style={styles.modelName}>{user.name}</Text>
              <Text style={styles.rank}>Rank: #{user.rank}</Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </ReactNativeModal>
        </TouchableOpacity>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.rank}>Rank: #{user.rank}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.headerTitle}>Player Details</Text>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Score:</Text>
          <Text style={styles.detailText}>{user.score}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Age:</Text>
          <Text style={styles.detailText}>{user.age}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.detailText}>{user.location}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.detailText}>{user.email}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.detailText}>{user.phone}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Games Played:</Text>
          <Text style={styles.detailText}>{user.gamesPlayed}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Bio:</Text>
          <Text style={styles.detailText}>{user.bio}</Text>
        </View>
        <View style={styles.winPercentage}>
          <Text style={styles.label}>Win %: </Text>
          <Bar
            progress={user.winPercentage / 100}
            width={200}
            height={15}
            color="orange"
            borderWidth={1}
            borderRadius={10}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1F25",
  },
  topContainer: {
    backgroundColor: "#272C35",
    paddingTop: 60,
    padding: 20,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "orange",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  rank: {
    fontSize: 16,
    color: "orange",
    marginTop: 10,
  },
  detailsContainer: {
    backgroundColor: "#272C35",
    borderRadius: 20,
    padding: 30,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  headerTitle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 30,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    color: "orange",
    fontSize: 16,
  },
  detailText: {
    color: "#fff",
    fontSize: 16,
  },
  winPercentage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#272C35",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    fontSize: 18,
    fontWeight: 500,
     color: "black",
     marginTop: 25,
     backgroundColor: "orange",
     padding: 10,
     borderRadius: 10,
     boxShadow: "0 0 10px rgba(0,0,0,0.2)", 
    },
  modalProfileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "orange",
  },
  modelName: {
    color: "white",
    fontSize: 24,  
    fontWeight: "bold", 
  },
});

export default TopThreeDetails;
