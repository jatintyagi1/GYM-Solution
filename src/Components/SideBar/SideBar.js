import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <h3>Product Categories</h3>
      <ul>
        <li><Link to="/category1">Category 1</Link></li>
        <li><Link to="/category2">Category 2</Link></li>
        <li><Link to="/category3">Category 3</Link></li>
        <li><Link to="/category4">Category 4</Link></li>
      </ul>
    </div>
  );
};

export default SideBar;
