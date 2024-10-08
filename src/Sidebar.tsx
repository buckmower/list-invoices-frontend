import './Sidebar.css'; // Import the CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-placeholder">LOGO</div>
      </div>
      <nav className="menu">
        <p>Menu</p>
        <ul>
          <li>Home</li>
          <li className="active">&#x3009; Invoices</li>
          <li>&#x3009; Bills</li>
          <li>&#x3009; Expenses</li>
          <li>&#x3009; Reports</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
