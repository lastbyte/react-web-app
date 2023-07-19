import {useDispatch, useSelector} from "react-redux";
import '@components/styles/counter.css';
import {decrement, increment, setStep} from "@redux/reducers/countReducer";
import React, {createRef} from "react";

interface CounterProps {

}

const Counter: React.FC<CounterProps> = (props: CounterProps) => {

    const count = useSelector((state: any) => state.counter.value);
    const step = useSelector((state: any) => state.counter.step);

    const dispatch = useDispatch();
    const stepInputRef = createRef<HTMLInputElement>();
    return (
        <div className="counter_wrapper">
            <div>
                <div className="display_step">
                    <input placeholder="counter step" style={{height: "2rem", padding: "4px 10px"}} ref={stepInputRef}/>
                </div>
            </div>
            <div>
                <div className="controls_step">
                    <button className="up"
                            onClick={() => dispatch(setStep(stepInputRef.current?.value && parseInt(stepInputRef.current?.value)))}> Set
                    </button>
                </div>
                <div className="display">
                    <span>COUNT : {count}</span>
                </div>
                <div className="controls">
                    <button className="up" onClick={() => dispatch(increment())}> Up</button>
                    <button className="down" onClick={() => dispatch(decrement())}> Down</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;