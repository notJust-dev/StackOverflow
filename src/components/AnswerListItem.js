import { View, Text, StyleSheet } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { decode } from 'html-entities';
import Markdown from 'react-native-markdown-display';

const AnswerListItem = ({ answer }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <AntDesign name="upcircleo" size={24} color="dimgray" />
        <Text style={styles.score}>{answer.score}</Text>
        <AntDesign name="downcircleo" size={24} color="dimgray" />
        {answer.is_accepted && (
          <Entypo
            name="check"
            size={22}
            color="limegreen"
            style={{ marginTop: 10 }}
          />
        )}
      </View>
      <View style={styles.bodyContainer}>
        <Markdown>{decode(answer.body_markdown)}</Markdown>

        <Text style={styles.time}>
          answered {new Date(answer.creation_date * 1000).toDateString()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 25,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
    padding: 10,
  },
  leftContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  score: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
  },
  bodyContainer: {
    flex: 1,
  },
  body: {
    lineHeight: 18,
    color: '#232629',
  },
  time: {
    marginLeft: 'auto',
    fontSize: 12,
    color: '#6a737c',
    marginTop: 10,
  },
});

export default AnswerListItem;
