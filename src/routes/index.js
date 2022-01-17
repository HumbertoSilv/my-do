import { Routes as Router, Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';

export const Routes = () => {
    return(
        <Router>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/dashboard' element={<Dashboard />}/>
        </Router>
    );
};