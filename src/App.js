import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Public from './components/Public';
import Login from './features/auth/Login';
import DashLayout from './components/DashLayout';
import Welcome from './features/auth/Welcome';
import NotesList from './features/notes/NotesList';
import UserList from './features/users/UserList';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />
          <Route path='dash' element={<DashLayout/>}>
            <Route index element={<Welcome/>}/> 
            <Route path='notes'>
              <Route index element={<NotesList/>}/>
            </Route> 
            <Route path='users'>
            <Route index element={<UserList/>}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
