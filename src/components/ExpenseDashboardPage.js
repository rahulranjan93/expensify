import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import { NavLink } from 'react-router-dom';

const ExpenseDashboardPage = () => (
  <div className="content-container">
    <ExpensesSummary />
    <div className="button">
      <NavLink to="/create" className="navlink__button">
        Add Expense
      </NavLink>
    </div>
    <ExpenseListFilters className="expenselist_filters" />
    <ExpenseList className="expenselist-container" />
  </div>
);

export default ExpenseDashboardPage;
