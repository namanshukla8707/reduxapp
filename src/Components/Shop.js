/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import actionCreators from '../State/index'
import { useSelector } from "react-redux";

import { depositMoney, withdrawMoney } from '../State/action-creators';
const Shop = () => {
  const dispatch = useDispatch();
    const balance = useSelector((state) => state.amount);

  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <h2>Deposit/Withdraw money</h2>
      {/* <button
        className="btn btn-primary mx-2"
        onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}
      >
        -
      </button>
      Update Balance
      <button
        className="btn btn-primary mx-2"
        onClick={() => { dispatch(actionCreators.depositMoney(100)) }}
      >
        +
      </button> */}
      <button
        className="btn btn-primary mx-2"
        onClick={()=>{withdrawMoney(100)}
        }
      >
        -
      </button>
      Update Balance ({balance})
      <button
        className="btn btn-primary mx-2"
        onClick={
         ()=>{depositMoney(100)}
        }
      >
        +
      </button>
    </div>
  );
}

export default Shop
