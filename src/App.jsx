import FixedHeader from './components/FixedHeader';
import Projects from './sections/Projects/Projects';
import Home from './sections/Home/Home'

const App = () => {

  return (
    <>
      <FixedHeader />
      <Home></Home>
      <Projects></Projects>
    </>
  );
};

export default App;
