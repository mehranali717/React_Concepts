import './App.css';
import Routes from './Routes/routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping, faHeart,  } from '@fortawesome/free-solid-svg-icons'
library.add(faHeart, faCartShopping)

function App() {
  return <Routes />
}

export default App;
