import "./App.css";
import CartEmpty from "./component/Rahul/Cart/CartEmpty";
import CartPage from "./component/Rahul/Cart/CartPage";
import AllRoutes from "./component/utility/AllRoutes";
import Footer from "./component/utility/Footer";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#eeeeee" }}>
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
