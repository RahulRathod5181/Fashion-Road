import "./App.css";
import CartEmpty from "./component/Rahul/Cart/CartEmpty";
import CartPage from "./component/Rahul/Cart/CartPage";
import AddressForm from "./component/Rahul/PaymentPage/AddressForm";
import CreditCard from "./component/Rahul/PaymentPage/CreditCard";
import DebitCard from "./component/Rahul/PaymentPage/DebitCard";
import OrderSucess from "./component/Rahul/PaymentPage/OrderSucess";
import PaymentPage from "./component/Rahul/PaymentPage/PaymentPage";
import { textTospeechFun } from "./component/Rahul/VoiceFun";
import AllRoutes from "./component/utility/AllRoutes";
import Footer from "./component/utility/Footer";

function App() {
  return (
    <div className="App">
  
      <CartPage />
<PaymentPage />
 
 
     
      <AllRoutes />
      <Footer />
    </div> 
  );
}

export default App;
