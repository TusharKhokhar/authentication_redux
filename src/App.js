import MainHeader from "./components/MainHeader";
import Routes from "./routes/Routes";
import { store } from '../src/Redux/store'
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <MainHeader />
        <Routes />
      </Provider>
    </>
  );
}

export default App;
