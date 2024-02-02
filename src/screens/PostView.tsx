import React, {useState, useContext, useEffect }from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { BASE_URL } from "../config";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from "../context/AuthContext"

const PostView = ({ route }) => {
  const { id } = route.params;
  const [blogDetail, setBlog] = useState(null);
  const {userInfo, logout, isLoading} = useContext(AuthContext);

  const getAPIData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts/${id}`);
      setBlog(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);
  
  if (blogDetail === null) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
      
    <ScrollView contentContainerStyle={styles.container}>
      {/*<Image source={{ uri: blogDetail.data.blog_image.url }} style={styles.blogImage} />*/}
      <Text style={styles.blogTitle}>{blogDetail.post.title}</Text>
      <Text style={styles.blogBody}>{blogDetail.post.description}</Text>
    {/*<Text>{console.warn(blogDetail)}</Text>
    <Text>{console.log(blogDetail)}</Text>*/}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blogImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  blogTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  blogBody: {
    fontSize: 18,
    lineHeight: 24,
  },
});
export default PostView;