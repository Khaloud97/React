import logo from './logo.svg';
//React Imports 

//Styling Imports 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//Componenets Imports 
import Navbar from './Components/nav/Navbar';
import Footer from './Components/footer/Footer';
import Home from './Pages/Home/Home';

//import CreateTodo from './Components/CreateTodo/CreateTodo';
//import CreateTodo from './CreateTodo';
//routing Imports 
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import { useSelector } from 'react-redux';
import CreateTodo from './Components/CreateTodo/CreateTodo';
import TodoList from './Components/TodoList/TodoList';


function App() {  
  const lang  = useSelector((state) => state.language.lang);
  const handleTodoCreation = (newTodo) => {
    // Handle the creation of the new todo, e.g., update the state
    console.log('Todo created:', newTodo);
  };
  
  return (
  <>
  <div className='' dir={lang == "en" ? "ltr" :"rtl"}>
   <Router>
   <Navbar />
      <Routes>
        
         {/*<Route path="/" element={<TodoList />} /> 
        <Route path="/create-todo" element={<CreateTodo onCreate={handleTodoCreation} />} />*/}
     
        <Route path="/create-todo" element={<CreateTodo/>} />
        <Route path='/listTodo' element={<TodoList/>} />
       {/*  params through the Url is Accessed Through the useParams() --> hook   */}
       
        <Route path='*' element= {<NotFound />}  />
      </Routes>
      <Footer />
   </Router>
  </div>
  
  </>
  );
}

export default App;
/*
Configuring Routing inside our Application 
1.npm install react-router-dom 
2. configure the component Store "App.js"
  1.import nesscary Imports 
      import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
  then create the Structure 
  Router 
    static elements over the WebSite
    Routes
      Route path ="url" element={<Component />} />
      Route path ="url" element={<Component />} />
      Route path ="url" element={<Component />} />
    Routes
    Static Element over Website 
  Router  

*/