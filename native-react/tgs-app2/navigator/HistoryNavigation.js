import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import  History from '../pages/History';
import Home from '../pages/Home';
import Feature from '../pages/Feature';
import Session from '../pages/Session';
import Notice from '../pages/Notice';
import Contact from '../pages/Contact';


const HistoryNavigator = createStackNavigator({
    Home: Home,
    History: History,
    Feature: Feature,
    Session: Session,
    Notice: Notice,
    Contact: Contact

});

export default createAppContainer(HistoryNavigator);