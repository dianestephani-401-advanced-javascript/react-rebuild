import Header from './components/header/header';
// import Footer from './components/header/footer';
import MyMainForm from './components/to-do/form.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/to-do/list.js';

function App() {
  return (
    <>
    <Header/>
    <MyMainForm/>
    <List/>
    </>
  );
}

export default App;
