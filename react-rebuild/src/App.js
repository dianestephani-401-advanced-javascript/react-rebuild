import React from 'react'
import Header from './components/header/header';
// import Footer from './components/header/footer';
import ToDo from './components/to-do/to-do.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Settings from './context/settings/settings-context.js'

function App() {

  // const [itemList, setItemList] = useState([])
  
//   function updateList(arr){
// setItemList(arr)
// }

  return (
    <Settings>
      <Header/>
      <ToDo />
    
    </Settings>

  );
}
          
export default App;
