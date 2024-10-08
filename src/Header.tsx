import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getInvoices, searchInvoices } from './api/invoiceServices';
import { setInvoices } from './redux/invoiceSlice';
import { AppDispatch } from './redux/store';

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    getInvoices('').then((data) => {
      dispatch(setInvoices(data));
    });
  }, [dispatch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchInvoices(e.target.value).then((data) => {
      dispatch(setInvoices(data));
    });
  }

  return (
    <header className="header">
      <div className="breadcrumbs">Home / Invoices</div>
      <div className="actions">
        <input type="text" onChange={handleSearch} placeholder="Search" />
        <div className="icons">
          <i className="notification-icon"></i>
          <i className="settings-icon"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;