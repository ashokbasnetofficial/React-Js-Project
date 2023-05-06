import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import Footer from './Footer/Footer';

import Header from './Header/Header';
import Form from './Form/Form';
const App =()=>{
  return(
    <>
     <Header/>
     <Form/>
    <Footer />
    </>
  );
}

export default App;
