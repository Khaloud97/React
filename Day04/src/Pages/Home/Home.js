import React from 'react'
//import logo from './Home/todolist.jpg'
import logo from './todolist.jpg'
import './Home.css'
import { useLocation , useNavigate, useParams } from 'react-router-dom'

export default function Home() {
    // const Navigate = useNavigate();
    const location  = useLocation();
    const params = useParams();
    console.log(params);
    console.log(location);
    const navigate = useNavigate();

    const handleCreateTodoClick = () => {
        // Navigate to the CreateTodo page when the button is clicked
        navigate('/create-todo');
    };

  return (
    <>
        <div className='container main-sec'>
            <div className='row justify-content-around align-items-center'>
                <div className='col-auto text-container'>
                    <h2> Hello My Name is Khaloud  </h2>
                    <p>"Welcome to MyToDo App, your personal task manager. 
                      Stay organized, boost your productivity, and accomplish your goals effortlessly.
                       Let's start making your to-do list!"</p>
                       
                       <button className='btn btn-primary' onClick={handleCreateTodoClick}>
                        Create your Todo
                       </button>
                </div>
                <div className='col-auto image-container'>
                    <img src={logo} alt='Logo  for joonguini'  className='custom mt-5'  />
                </div>

            </div>

        </div>
    
    
    </>
  )
}
