import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Main/>
    </Provider>
  )
}

export default App
