import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = props => (
  <div className="expenselist">
    <div className="expenselist-header">
      <div className="expenselist-header-item">Expense</div>
      <div className="expenselist-header-item">Amount</div>
    </div>

    {props.expenses.length === 0 ? (
      <div className="expenselist-no-expense">
        <div className="no-expense">No expenses</div>
      </div>
    ) : (
      props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
