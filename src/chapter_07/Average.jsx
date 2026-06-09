import { useCallback, useMemo, useRef, useState } from "react";

const getAverage=(aveList)=> {
    if(aveList.length===0) {
        return 0;
    }

    let sum=0;

    aveList.map((value)=>(sum+=value));
    const avg = sum/aveList.length;
    return avg;
};

function Average() {
    const [list, setList] = useState([]);

    const [number,setNumber] = useState("");

    const inputElement = useRef(null);

    const onChange = useCallback((e) => {
        setNumber(e.target.value)
    }, []);

    const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputElement.current.focus();
    },[number,list]);

    const avg = useMemo(() => getAverage(list),[list]);

    return(
        <div>
            <input
            type="text"
            value={number}
            onChange={onChange}
            ref={inputElement}
            onSubmit={onInsert}
            />

            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((value,idx) => (
                    <li key={idx} style={styles.number}>
                        {value.toString()}
                    </li>
                ))}
            </ul>
            <p>평균걊:{avg}</p>
        </div>
    );
}

const styles ={
    number:{
        color:"red",
    },
};


export default Average;