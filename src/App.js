import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import AppStore from "./utils/AppStore";



const App = () => {
  return (
    <Provider store={AppStore}>
      <div className="bg-[#212121]">
        <Header />
        <div className="flex">
          <Body />
        </div>
      </div>
    </Provider>
  );
}
export default App;