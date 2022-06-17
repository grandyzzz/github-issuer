import { Routes, Route } from 'react-router-dom'
import { Layout } from 'modules/layout'
import { UsersPage } from 'modules/users'
import { RepositoryPage } from 'modules/repositories'

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
        <Route path="auth" element={<div>Auth</div>} />
        <Route path="/" element={<UsersPage />} />
        <Route path="repositories/:id" element={<RepositoryPage />} />
      </Routes>
    </Layout>
  )
}

export default App
