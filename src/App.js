import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Trusted from "./Components/Trusted/Trusted";
import Ourservice from "./Components/Ourservice/Ourservice";
import Marketing from "./Components/Marketing/Marketing";
import Webdevelopment from "./Components/Webdevelopment/Webdevelopment";
import Cloud from "./Components/Cloud/Cloud";
import Faq from "./Components/Faq/Faq";
import Testimonials from "./Components/Testimonials/Testimonials";
import Getstarted from "./Components/Getstarted/Getstarted";
import Footer from "./Components/Footer/Footer";
import BackTop from "./Components/BackTop/BackTop";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Trusted></Trusted>
      <Ourservice></Ourservice>
      <Marketing></Marketing>
      <Webdevelopment></Webdevelopment>
      <Cloud></Cloud>
      <Testimonials></Testimonials>
      <Faq></Faq>
      <Getstarted></Getstarted>
      <Footer></Footer>
      <BackTop></BackTop>
    </>
  );
}

export default App;
