import { View, Text, Image, FlatList} from "react-native";
import React from "react";
import { StyleSheet } from 'react-native';


const Index = () => {
  const topThree = [...listData].sort((a,b)=>b.score-a.score).slice(0,3);
  console.log(topThree);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerTitle}>Leader Board</Text>
        <View style={styles.mainCardContainer}>
        {[1, 0, 2].map((position, index) => (
            <View
              key={index}
              style={[
                styles.mainCard,
                position === 0 && styles.mainCardCenter
              ]}
            >
              <Image source={{ uri: topThree[position].imageUrl }} style={styles.mainCardImage} resizeMode="cover" />
              <Text style={styles.mainCardTitle}>{topThree[position].name.split(" ").join("\n")}</Text>
              <View style={styles.mainCardRankContainer}>
                <Text style={styles.mainCardRankContainerText}>{position + 1}</Text>
              </View>
            </View>
          ))}
          
        </View>
      </View>
      <FlatList 
      data={listData}
      renderItem={({item, index})=>{
        return(
          <View style={styles.card}>
            <View style={styles.cardDataContainer}>
              <Text style={styles.cardIndex}>{index+1}</Text>
              <Image source={{uri:item.imageUrl}} style={styles.cardImage} resizeMode="cover"/>
              <Text style={styles.cardTitle}>{item.name}</Text>
            </View>
            <View style={styles.cardRankContainer}>
              <Text style={styles.cardRankTitle}>{item.score}</Text>
            </View>
          </View>
        )
      }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
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
    marginBottom:20 // Higher position for 1st rank
  },
  mainCardImage: {
    width:80,
    height:80,
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
    color:"#fff",
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
  
  
})

export default Index;

const listData = [
  {
    name: "Ravi Patel",
    score: 54321,
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Aisha Khan",
    score: 67890,
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Michael Lee",
    score: 51234,
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Sophia Martinez",
    score: 73456,
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Daniel Smith",
    score: 84567,
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Emma Johnson",
    score: 92834,
    imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Liam Williams",
    score: 56789,
    imageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Olivia Brown",
    score: 78945,
    imageUrl: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Noah Davis",
    score: 65432,
    imageUrl: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Isabella Wilson",
    score: 81234,
    imageUrl: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Ethan Anderson",
    score: 74567,
    imageUrl: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Mia Thomas",
    score: 89345,
    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "James Taylor",
    score: 91023,
    imageUrl: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    name: "Charlotte Moore",
    score: 67891,
    imageUrl: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    name: "Benjamin White",
    score: 78912,
    imageUrl: "https://randomuser.me/api/portraits/men/15.jpg",
  },
];


