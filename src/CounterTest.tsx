import { useDispatch, useSelector } from "react-redux";
import { decreasecnt, increasecnt, resetcnt, addvalue } from "./CounterSlice";
import type {RootState } from "./store";
const CounterTest = () => {
    const count = useSelector((state:RootState)=>state?.counter.value)
    const dispatch = useDispatch()
    return (
        <div className="flex justify-center items-center gap-2 flex-col">
            <span>CounterTest</span><br />
            <div>
                <span onClick={()=>dispatch(increasecnt())}>+</span>&emsp;
                <strong>{count}</strong>&emsp;
                <span onClick={()=>dispatch(decreasecnt())}>-</span>&emsp;<br />
                <span onClick={()=>dispatch(resetcnt())}>reset</span>&emsp;
                <span onClick={()=>dispatch(addvalue(10))}>addvalue 10</span>
            </div>

        </div>
    )
}
export default CounterTest;