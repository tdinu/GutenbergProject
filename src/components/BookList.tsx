import { StyleSheet, Text, View, ScrollView } from 'react-native';

const BookList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Books List</Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.content}>
        <Text>Render List</Text>
      </ScrollView>
    </View>
  );
};

export default BookList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  title: {
    marginLeft: 10,
  },
  content: {
    marginBottom: 10,
  },
});
