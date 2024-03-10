import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

function News() {
  const [news, setNews] = useState([]);
  const navigation = useNavigation([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=keyword&apiKey=fb74dc0144164a069c9bb2b87b6b1c62');
        setNews(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  const renderNewsItem = ({ item }) => (
    <View style={styles.articleContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('MainScreen')} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </Pressable>
      <View>
        <Text style={styles.news}>
          Hot News
        </Text>
      </View>
      <FlatList
        data={news}
        renderItem={renderNewsItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  articleContainer: {
    marginVertical: 20,
    marginHorizontal: 5,
    borderBottomColor: "#3b3b3b",
    borderBottomWidth: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff'
  },
  news: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff'
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10
  },
  closeButton: {
    position: 'absolute',
    top: 25,
    right: 10,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default News;
