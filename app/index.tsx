import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  const topThree = [...listData].sort((a, b) => b.score - a.score).slice(0, 3);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerTitle}>Leader Board</Text>
        <View style={styles.mainCardContainer}>
          {[1, 0, 2].map((position, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.mainCard, position === 0 && styles.mainCardCenter]}
              onPress={() => {
                router.push({
                  pathname: "/details",
                  params: { userData: encodeURIComponent(JSON.stringify(topThree[position])) }
                });
              }}
            >
              <Image
                source={{ uri: topThree[position].imageUrl }}
                style={styles.mainCardImage}
                resizeMode="cover"
              />
              <Text style={styles.mainCardTitle}>
                {topThree[position].name.split(" ").join("\n")}
              </Text>
              <View style={styles.mainCardRankContainer}>
                <Text style={styles.mainCardRankContainerText}>
                  {position + 1}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity style={styles.card}
            onPress={() => {
              router.push({
                pathname: "/details",
                params: { userData: encodeURIComponent(JSON.stringify(item)) },
              });
            }}
            >
              <View style={styles.cardDataContainer}>
                <Text style={styles.cardIndex}>{index + 1}</Text>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <Text style={styles.cardTitle}>{item.name}</Text>
              </View>
              <View style={styles.cardRankContainer}>
                <Text style={styles.cardRankTitle}>{item.score}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272C35",
  },
  topContainer: {
    backgroundColor: "#1A1F25",
    paddingTop: 40,
    padding: 20,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    gap: 20,
    paddingBottom: 45,
  },
  headerTitle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 21,
    fontWeight: "bold",
  },

  mainCardContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 15,
  },
  mainCard: {
    backgroundColor: "#272C35",
    padding: 15,
    alignItems: "center",
    borderRadius: 20,
    gap: 15,
    height: 175,
  },
  mainCardCenter: {
    height: 175,
    marginBottom: 20, 
  },
  mainCardImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  mainCardTitle: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
  mainCardRankContainer: {
    backgroundColor: "orange",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    position: "absolute",
    bottom: -15,
  },
  mainCardRankContainerText: {
    color: "#fff",
  },
  card: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cardIndex: {
    color: "#fff",
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 10,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 17,
  },
  cardRankContainer: {},
  cardRankTitle: {
    color: "orange",
  },
});

export default Index;

const listData = [
  {
    name: "Ravi Rafaliya",
    score: 100000,
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    age: 28,
    location: "Mumbai, India",
    email: "ravi.patel@example.com",
    phone: "+91 98765 43210",
    rank: 10,
    gamesPlayed: 120,
    winPercentage: 75,
    bio: "Loves gaming and coding.",
  },
  {
    name: "Aisha Khan",
    score: 67890,
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    age: 25,
    location: "Dubai, UAE",
    email: "aisha.khan@example.com",
    phone: "+971 56789 01234",
    rank: 8,
    gamesPlayed: 150,
    winPercentage: 80,
    bio: "Tech enthusiast and coffee addict.",
  },
  {
    name: "Michael Lee",
    score: 51234,
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    age: 30,
    location: "San Francisco, USA",
    email: "michael.lee@example.com",
    phone: "+1 415 678 9012",
    rank: 12,
    gamesPlayed: 100,
    winPercentage: 72,
    bio: "Loves esports and mountain climbing.",
  },
  {
    name: "Sophia Martinez",
    score: 73456,
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    age: 27,
    location: "Madrid, Spain",
    email: "sophia.martinez@example.com",
    phone: "+34 678 901 234",
    rank: 6,
    gamesPlayed: 180,
    winPercentage: 85,
    bio: "Passionate about chess and AI.",
  },
  {
    name: "Daniel Smith",
    score: 84567,
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    age: 29,
    location: "London, UK",
    email: "daniel.smith@example.com",
    phone: "+44 7912 345678",
    rank: 4,
    gamesPlayed: 200,
    winPercentage: 90,
    bio: "Competitive gamer and traveler.",
  },
  {
    name: "Emma Johnson",
    score: 92834,
    imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
    age: 26,
    location: "New York, USA",
    email: "emma.johnson@example.com",
    phone: "+1 212 555 6789",
    rank: 2,
    gamesPlayed: 220,
    winPercentage: 92,
    bio: "Loves streaming and e-sports coaching.",
  },
  {
    name: "Liam Williams",
    score: 56789,
    imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    age: 31,
    location: "Toronto, Canada",
    email: "liam.williams@example.com",
    phone: "+1 647 234 5678",
    rank: 9,
    gamesPlayed: 140,
    winPercentage: 78,
    bio: "Enjoys VR games and tech podcasts.",
  },
  {
    name: "Olivia Brown",
    score: 78945,
    imageUrl: "https://randomuser.me/api/portraits/women/8.jpg",
    age: 24,
    location: "Paris, France",
    email: "olivia.brown@example.com",
    phone: "+33 612 345 678",
    rank: 5,
    gamesPlayed: 190,
    winPercentage: 88,
    bio: "Data scientist and part-time gamer.",
  },
  {
    name: "Noah Davis",
    score: 65432,
    imageUrl: "https://randomuser.me/api/portraits/men/9.jpg",
    age: 32,
    location: "Sydney, Australia",
    email: "noah.davis@example.com",
    phone: "+61 423 567 890",
    rank: 7,
    gamesPlayed: 160,
    winPercentage: 82,
    bio: "Loves FPS games and surfing.",
  },
  {
    name: "Isabella Wilson",
    score: 81234,
    imageUrl: "https://randomuser.me/api/portraits/women/10.jpg",
    age: 23,
    location: "Berlin, Germany",
    email: "isabella.wilson@example.com",
    phone: "+49 170 234 5678",
    rank: 3,
    gamesPlayed: 210,
    winPercentage: 91,
    bio: "AI researcher and esports analyst.",
  },
];
