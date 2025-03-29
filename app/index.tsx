import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerTitle}>Leader Board</Text>
        <View style={styles.mainCardContainer}>
          {[3, 1, 2].map((item, Index) => {
            return (
              <View key={Index} style={styles.mainCard}>
                <Image
                  source={{ uri: "" }}
                  style={styles.mainCardImage}
                  resizeMode="cover"
                />
                <Text style={styles.mainCardTitle}>Ravi</Text>
                <View style={styles.mainCardRankContainer}>
                  <Text style={styles.mainCardRankContainerText}>1</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
      <FlatList 
      data={[1,2,3,4]}
      renderItem={({item, index})=>{
        return(
          <View style={styles.card}>
            <View style={styles.cardDataContainer}>
              <Text style={styles.cardIndex}>{index+1}</Text>
              <Image source={{uri:""}} style={styles.cardImage} resizeMode="cover"/>
              <Text style={styles.cardTitle}>Ravi Rafaliya</Text>
            </View>
            <View style={styles.cardRankContainer}>
              <Text style={styles.cardRankTitle}>345678</Text>
            </View>
          </View>
        )
      }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  topContainer: {},
  headerTitle: {},
  mainCard: {},
  mainCardContainer: {},
  mainCardImage: {},
  mainCardTitle: {},
  mainCardRankContainer: {},
  mainCardRankContainerText: {},
  card: {},
  cardIndex: {},
  cardImage: {},
  cardTitle: {},
  cardRankTitle: {},
  cardDataContainer: {},
  cardRankContainer: {},
});

export default Index;
