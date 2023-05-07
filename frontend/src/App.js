import "./App.css";
import AllRoutes from "./component/utility/AllRoutes";
import Footer from "./component/utility/Footer";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#eeeeee" }}>
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
