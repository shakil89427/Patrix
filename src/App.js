import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Trusted from "./Components/Trusted/Trusted";
import Ourservice from "./Components/Ourservice/Ourservice";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Trusted></Trusted>
      <Ourservice></Ourservice>
    </>
  );
}

export default App;
