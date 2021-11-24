import './App.css';
import './components/style/navbar.css';
import './components/style/navitem.css';
import Navbar from "./components/Navbar";
import NavbarItem from "./components/NavItem";
import {ReactComponent as BoltIcon} from './components/icons/bolt.svg';
import {ReactComponent as BellIcon} from './components/icons/bell.svg';

import {ReactComponent as PlusIcon} from './components/icons/plus.svg';
import {ReactComponent as MessengerIcon} from './components/icons/messenger.svg';


function App() {
  return (
    <Navbar>
        <NavbarItem icon={<PlusIcon/>}/>
        <NavbarItem icon={<MessengerIcon/>}/>
        <NavbarItem icon={<BellIcon/>}/>
    </Navbar>

  );
}



export default App;
