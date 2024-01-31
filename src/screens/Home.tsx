import React, {useState, useContext, useEffect } from 'react';
import {Text, View, StyleSheet, Button, ScrollView, TouchableOpacity} from 'react-native';
import {AuthContext} from "../context/AuthContext"
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from "../config";
import Spinner from 'react-native-loading-spinner-overlay';
import PostView from '../screens/PostView';

const Home = (props) => {
	const { userInfo, logout, isLoading } = useContext(AuthContext);
	const [data, setData] = useState(undefined);
  const navigation = useNavigation();
  const [viewType, setViewType] = useState('list');

  const getAPIData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    getAPIData();
  }, []);

  const handleBlogView = (blogId) => {
    navigation.navigate('PostView', {
      id: blogId,
    });
  };

	return(
		<ScrollView>
			{data ? (
        data.map((post) => (
          <TouchableOpacity
            key={post.id}
            style={{ padding: 10, borderBottomColor: '#ccc', borderBottomWidth: 1 }}
            onPress={() => handleBlogView(post.id)}
          >
            <Text style={{ backgroundColor: '#ddd' }}> ID: {post.id}</Text>
            <Text> Title: {post.title}</Text>
            <Text> Body: {post.description}</Text>
          </TouchableOpacity>
        ))
      ) : (
        null
      )}
      <View style={styles.container}>
        <Spinner visible={isLoading} />
        {userInfo ? (
          <>
            <Text>{console.warn(`** ${JSON.stringify(userInfo)}`)}Welcome </Text>
            <Button title="Logout" color="red" onPress={logout} />
            
          </>
        ) : (
          <Text>Welcome</Text>
        )}
      </View>
		</ScrollView>
	)
};

const styles = StyleSheet.create({
	container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
export default Home;