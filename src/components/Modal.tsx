import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { clearSelectedInvoice } from '../redux/invoiceSlice';
import './modal.css';

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const selectedInvoice = useSelector((state: RootState) => state.invoices.selectedInvoice);

  if (!selectedInvoice) return null;

  const handleClose = () => {
    dispatch(clearSelectedInvoice());
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Invoice Details</h2>
        <p><strong>Date:</strong> {selectedInvoice.date}</p>
        <p><strong>Payee:</strong> {selectedInvoice.payee}</p>
        <p><strong>Description:</strong> {selectedInvoice.description}</p>
        <p><strong>Due Date:</strong> {selectedInvoice.dueDate}</p>
        <p><strong>Amount:</strong> {selectedInvoice.amount}</p>
        <p><strong>Status:</strong> {selectedInvoice.status}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;