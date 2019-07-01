import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap';
// import 'font-awesome/css/font-awesome.css';
// import './app.scss';
import Navbar from './components/Navbar';
import Chat from './components/chat/Chat';

class App extends React.Component{

    render(){
        return(
                <Fragment>
                <Navbar/>
                <Chat/>
                </Fragment>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);