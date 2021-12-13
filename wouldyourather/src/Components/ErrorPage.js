import { Component } from "react";
import {Link} from 'react-router-dom';

class ErrorPage extends Component {
    render() {
        return (
            <div>
               <h1> Error 404: Page not found. </h1>
                Please go back to                                         
                <Link className='btn btn-info' to='/' exact> Homepage</Link>
            </div>
        )
    }
}
export default ErrorPage