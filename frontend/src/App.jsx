import React, { useEffect } from "react";
import { LoadS, InputSide, TableSide, Footer } from "./components";

const App = () => {
  const [loading, setLoading] = React.useState(true);

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  async function getLoading() {
    await delay(1500);
    fetch('http://127.0.0.1:8080/demo/awake')
            .then((response) => response.json())
            .then((data) => {
                setLoading(data.some(resp => {
                  if (resp === "Online") {
                    console.log("Online!");
                    return false;
                  }
                  console.log("Offline!");
                  return getLoading();
                }));
            })
            .catch((err) => {
                console.log("Retrying Connection...");
                getLoading();
            })
  }

  useEffect(() => {
    getLoading();
  }, []);

  return (
    <>
      <div className="backgroundAnim overflow-hidden">
        <div className="absolute w-full h-full bg-black/50">
          { loading ? <LoadS /> : null}
          <div className="h-full">
            { loading ? null : <div className="flex flex-row h-full overflow-hidden">
              <div className="basis-1/3">
                <InputSide />
              </div>
              <div className="basis-2/3">
                <TableSide />
              </div>
            </div> }
            <div className="">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;