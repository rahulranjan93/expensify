import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div className="expenselist-item-container">
    <div className="expenselist-item">
      <div>
        <div className="expenselist-item-name-container">
          <Link to={`/edit/${id}`} className="expenselist-item-name">
            {description}
          </Link>
        </div>
        <div className="expenselist-item-date">
          {moment(createdAt).format('MMMM Do, YYYY')}
        </div>
      </div>
      <div className="expenselist-item-amount">
        {numeral(amount / 100).format('$0,0.00')}
      </div>
    </div>
  </div>
);

export default ExpenseListItem;
