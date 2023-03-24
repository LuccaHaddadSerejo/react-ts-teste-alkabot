import { PostProvider } from './providers/postContext';
import { UserProvider } from './providers/userContext';
import { RoutesMain as Routes } from './routes';

function App() {
  return (
    <>
      <UserProvider>
        <PostProvider>
          <Routes />
        </PostProvider>
      </UserProvider>
    </>
  );
}

export default App;
