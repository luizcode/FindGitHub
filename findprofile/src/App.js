import Routes from './Routes';
import { ContextProvider } from './Components/Context/Context';

const App = () => (
    <ContextProvider>
        <Routes />
    </ContextProvider>
);

export default App;