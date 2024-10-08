import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Invoice {
  date: string;
  payee: string;
  description: string;
  dueDate: string;
  amount: string;
  status: string;
}

interface InvoiceState {
  invoices: Invoice[];
  selectedInvoice: Invoice | null;
}

const initialState: InvoiceState = {
  invoices: [],
  selectedInvoice: null,
};

const invoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    setInvoices: (state, action: PayloadAction<Invoice[]>) => {
      state.invoices = action.payload;
    },
    selectInvoice: (state, action: PayloadAction<Invoice>) => {
      state.selectedInvoice = action.payload;
    },
    clearSelectedInvoice: (state) => {
      state.selectedInvoice = null;
    }
  }
});

export const { setInvoices, selectInvoice, clearSelectedInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;