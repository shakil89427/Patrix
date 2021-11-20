import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Trusted from "./Components/Trusted/Trusted";
import Ourservice from "./Components/Ourservice/Ourservice";
import Marketing from "./Components/Marketing/Marketing";
import Webdevelopment from "./Components/Webdevelopment/Webdevelopment";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Trusted></Trusted>
      <Ourservice></Ourservice>
      <Marketing></Marketing>
      <Webdevelopment></Webdevelopment>
    </>
  );
}

export default App;
