import { View, Text, Image, StyleSheet } from 'react-native';
import { Experience } from '../types';

type ExperienceListItemProps = {
  experience: Experience;
};
const ExperienceListItem = ({ experience }: ExperienceListItemProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: experience.companyImage }} />
      <View>
        <Text>{experience.title}</Text>
        <Text>{experience.companyName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
    alignItems: 'center',
  },
  image: {
    width: 50,
    aspectRatio: 1,
    marginRight: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default ExperienceListItem;
