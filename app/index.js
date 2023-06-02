import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import QuestionListItem from '../src/components/QuestionListItem';
import { useQuery } from 'urql';
import { questionsQuery } from '../src/graphql/queries';

export default function Page() {
  const [response] = useQuery({
    query: questionsQuery,
    variables: { sort: 'votes' },
  });

  if (response.fetching) {
    return <ActivityIndicator />;
  }

  if (response.error) {
    return <Text>Error: {response.error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={response.data.questions.items}
        renderItem={({ item }) => <QuestionListItem question={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
