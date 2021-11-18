import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Appointment from './pages/Appointment/Appointment/Appointment';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import DashBoard from './pages/DashBoard/DashBoard/DashBoard';
import DashBoardHome from './pages/DashBoard/DashBoardHome/DashBoardHome';
import AdminRoute from './pages/Login/AdminRoute/AdminRoute';
import Payment from './pages/DashBoard/Payment/Payment';
import MakeAdmin from './pages/DashBoard/MakeAdmin/MakeAdmin';
import AddDoctor from './pages/DashBoard/AddDoctor/AddDoctor';

function App() {
  return (
    <div className="App">
        <AuthProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}>
                        
                    </Route>
                    <Route path="/home" element={<Home/>}>
                        
                    </Route>
                    <Route path="/appointment" element={<PrivateRoute><Appointment/></PrivateRoute>}>
                        
                    </Route>
                    <Route path="/dashboard" element={<PrivateRoute><DashBoard/></PrivateRoute>}>
                        <Route exact path="/dashboard" element={<DashBoardHome></DashBoardHome>}>
            
                        </Route>
                        <Route path={`/dashboard/payment/:appointmentId`} element={<AdminRoute><Payment/></AdminRoute>}>
                        
                        </Route>
                        <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin/></AdminRoute>}>
                        
                        </Route>
                        <Route path={`/dashboard/addDoctor`} element={<AdminRoute><AddDoctor/></AdminRoute>}>
                        
                        </Route>
                    </Route>
                    <Route path="/login" element={<Login/>}>

                    </Route>
                    <Route path="/register" element={<Register/>}>
                        
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
