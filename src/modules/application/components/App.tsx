import { Routes, Route } from 'react-router-dom'
import { Layout } from 'modules/layout/components'

// import { Login } from 'modules/auth';
//
// import config from 'config';
//
// const routes = [
//     {
//         path: config.routes.home,
//         render: () => 'Home Page',
//         exact: true,
//     },
//     {
//         path: config.routes.auth,
//         component: Login,
//     },
//     {
//         render: () => <Navigate to="/" />,
//     },
// ];

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div>Hello world!</div>} />
        <Route path="about" element={<div>About</div>} />
      </Routes>
    </Layout>
  )
}

export default App
