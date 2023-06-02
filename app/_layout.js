import { Link, Stack } from 'expo-router';
import client from '../src/graphql/client';
import { Provider } from 'urql';
import { AntDesign } from '@expo/vector-icons';

const RootLayout = () => {
  return (
    <Provider value={client}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'Home',
            headerRight: () => (
              <Link href="/search">
                <AntDesign name="search1" size={20} color="dimgray" />
              </Link>
            ),
          }}
        />
        <Stack.Screen name="[id]" options={{ title: 'Question' }} />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
