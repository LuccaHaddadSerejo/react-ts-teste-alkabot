import { PostProvider } from './providers/postContext';
import { UserProvider } from './providers/userContext';
import { RoutesMain as Routes } from './routes';
import Global from './styles/global';

function App() {
  return (
    <>
      <Global />
      <UserProvider>
        <PostProvider>
          <Routes />
        </PostProvider>
      </UserProvider>
    </>
  );
}

export default App;
