import { ChakraProvider } from "@chakra-ui/react"
import HomePage from './pages/HomePage';
import theme from './theme';
import {UserDetailsProvider} from './state';

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <UserDetailsProvider>
        <HomePage/>
      </UserDetailsProvider>
    </ChakraProvider>
  );
}

export default App;
