import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import AppStore from "./utils/AppStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./Components/Watch";
import VideoContainer from "./Components/VideoContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <VideoContainer />
      },
      {
        path: "watch",
        element: <Watch />
      }
    ]
  },
]);

const App = () => {
  return (
    <Provider store={AppStore}>
      <div className="bg-[#212121]">
        <Header />
        <div className="flex">
          <RouterProvider router={appRouter} />
        </div>
      </div>
    </Provider>
  );
}
export default App;