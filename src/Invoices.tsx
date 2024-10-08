import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { selectInvoice } from './redux/invoiceSlice';
import { RootState, AppDispatch } from './redux/store';

const Invoices: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const invoices = useSelector((state: RootState) => state.invoices.invoices);


  const handleRowClick = (invoice: any) => {
    dispatch(selectInvoice(invoice));
  };

  return (
    <table className="invoice-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Payee</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice, index) => (
          <tr key={index} onClick={() => handleRowClick(invoice)}>
            <td>{moment(invoice.date).format("MM/DD/YY")}</td>
            <td>{invoice.payee}</td>
            <td>{invoice.description}</td>
            <td>{moment(invoice.dueDate).format("MM/DD/YY")}</td>
            <td>{"$"+invoice.amount}</td>
            <td style={{textAlign: "left", color: "purple"}}>{invoice.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Invoices;