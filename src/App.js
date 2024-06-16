import Body from "./Components/Body";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <div className="bg-[#212121]">
      <Header />
      <div className="flex">
      <Sidebar />
        <Body />
        </div>
    </div>
  );
}
export default App;