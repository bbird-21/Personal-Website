import FixedHeader from './components/FixedHeader';
import FirstPage from './sections/Home/Home'
import SecondPage from './sections/Projects/Projects';

const App = () => {

  return (
    <>
      <FixedHeader />
      <FirstPage></FirstPage>
      <SecondPage></SecondPage>
    </>
  );
};

export default App;
