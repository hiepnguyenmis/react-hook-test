import { Fragment, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from './components/Layout';
import { publicRouter } from "./route";
import { useStore } from "./store";

function App() {
  const [state, dispatch] = useStore();
  console.log( state);
  return (
    <>
      <Routes>
        {
          publicRouter.map(
            (route, index) => {
              const Page = route.component;

              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                ></Route>
              );

            }
          )
        }
      </Routes>
    </>
  );
}

export default App;
