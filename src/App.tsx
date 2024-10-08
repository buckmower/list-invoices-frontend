import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Modal from './components/Modal';
import Header from './Header';
import Sidebar from './Sidebar';
import Invoices from './Invoices';
// import Bills from './Bills';
// import Expenses from './Expenses';
// import Reports from './Reports';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
          <Route path="/" element={<Invoices />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/bills" element={<Invoices />} /> // Change this to Bills
            <Route path="/expenses" element={<Invoices />} /> // Change this to Expenses
            <Route path="/reports" element={<Invoices />} /> // Change this to Reports
          </Routes>
          <Modal />
        </div>
      </div>
    </Router>
  );
};

export default App;
