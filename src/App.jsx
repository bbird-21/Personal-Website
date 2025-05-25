import FixedHeader from './components/FixedHeader';
import Projects from './sections/Projects/Projects';
import Home from './sections/Home/Home'
import Footer from "./sections/Footer/Footer"

const App = () => {

  return (
    <>
      <FixedHeader />
      <Home></Home>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
};

export default App;
