import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import userJson from '../../assets/data/user.json';
import { User } from '../../types';
import ExperienceListItem from '../../components/ExperienceListItem';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query MyQuery($id: ID!) {
    profile(id: $id) {
      id
      name
      image
      position
      about
      experience {
        id
        companyname
        companyimage
        title
        userid
      }
      backimage
    }
  }
`;

const UserProfile = () => {
  const { id } = useLocalSearchParams();
  const { loading, error, data } = useQuery(query, { variables: { id } });
  const user = data?.profile;
  const navigation = useNavigation();

  const onConnect = () => {
    console.warn('Connect Press');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: user?.name || 'User',
    });
  }, [user?.name]);

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    console.log(error);
    return <Text>Something went wrong...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* BG Image */}
        <Image source={{ uri: user.backimage }} style={styles.backImage} />
        <View style={styles.headerContent}>
          {/* Profile Image */}
          <Image source={{ uri: user.image }} style={styles.image} />

          {/* Name and Position */}
          <Text style={styles.name}>{user.name}</Text>
          <Text>{user.position}</Text>
        </View>

        {/* Connect Button */}
        <Pressable onPress={onConnect} style={styles.button}>
          <Text style={styles.buttonText}>Connect</Text>
        </Pressable>
      </View>
      {/* About */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.paragraph}>{user.about}</Text>
      </View>
      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {user.experience?.map((experience) => (
          <ExperienceListItem key={experience.id} experience={experience} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: 'white',
    marginBottom: 5,
  },
  backImage: {
    width: '100%',
    aspectRatio: 5 / 2,
    marginBottom: -60,
  },
  headerContent: {
    padding: 10,
    paddingTop: 0,
  },
  image: {
    aspectRatio: 1,
    borderRadius: 60,
    width: 120,
    borderWidth: 3,
    borderColor: 'white',
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
  },
  button: {
    backgroundColor: 'royalblue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  section: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 5,
  },
  paragraph: {
    lineHeight: 20,
  },
});

export default UserProfile;
