import Layout from '../Components/Layout/Layout'
<<<<<<< HEAD
import '../styles/globals.css'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
=======
import 'tailwindcss/tailwind.css'
// import '../styles/globals.css'
>>>>>>> 0618d45530d19f163dd6b293451bc57cde359bfa

function MyApp({ Component, pageProps }) {

  return (
<<<<<<< HEAD
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    
  )
=======
    <Layout>
    <Component {...pageProps} />
  </Layout>
    )
>>>>>>> 0618d45530d19f163dd6b293451bc57cde359bfa
}

export default MyApp
