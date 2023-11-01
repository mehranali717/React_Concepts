import './App.css';
import Routes from './Routes/routes';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping, faHeart, faXmark,  } from '@fortawesome/free-solid-svg-icons'
library.add(faHeart, faCartShopping, faXmark)

function App() {
  return <Routes />
}

export default App;
