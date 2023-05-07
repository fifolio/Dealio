import "./style/main.scss"
import Pages from './components/common/home/pages/Pages'
import { Provider } from 'react-redux';
import store from "./controller/store";

export default function App() {

  return (
    <>
      <Provider store={store}>
        <Pages />
      </Provider>
    </>
  )
}
