import {useDispatch, useSelector} from "react-redux";
import '@components/styles/counter.css';
import {decrement, increment} from "@redux/reducers/countReducer";
import React from "react";

interface CounterProps {

}

const Counter: React.FC<CounterProps> = (props: CounterProps) => {

    const count = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="counter_wrapper">
            <div className="display">
                <span>COUNT : {count}</span>
            </div>
            <div className="controls">
                <button className="up" onClick={() => dispatch(increment())}> UP</button>
                <button className="down" onClick={() => dispatch(decrement())}> DOWN</button>
            </div>
        </div>
    );
}

export default Counter;