import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import  useSWR  from 'swr';
import 'react-loading-skeleton/dist/skeleton.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import NewProducts from './component/NewProducts';
import FeaturesProduct from './component/FeaturesProducts'
import Error from './component/Error'
import NavBars from './component/NavBars';
import 'font-awesome/css/font-awesome.min.css'
function App() {
  const fetcher =async (url)=> {
    try{
      const response= await axios.get(url)
      console.log(response.data)
      return response.data
      
    }
    catch(error){
      console.log(error)
    }
  }
  const {data,error,isLoading}=useSWR('https://fakestoreapi.com/products',fetcher)
  return (
   <>
    
    <Router>
    <NavBars/>
      <Routes>
       <Route>
       
       </Route>
        <Route path='/' element={<Home data={data} isLoading={isLoading} name='PRODUCTS'/>}/>
        <Route path='/newproducts' element={<NewProducts/>}/>
        <Route path='/featuresproducts' element={<FeaturesProduct data={data} isLoading={isLoading}/>}/>
        <Route path='*' element={<Error/>}/>
        
      </Routes>
    </Router>
   </>
  );
}

export default App;
