const { useState } = React //解構

const App = () => {
    const [num, setNum] = useState([0,0,0]);

    const AddNum = (i) => {
        setNum(prevNum => {
            const newNum = [...prevNum];
            newNum[i] += 1;
            return newNum;
        });
    }
    
    const AddAll = () => {
        setNum(prevNum => {
            const newNum = prevNum.map(num => num + 1);
            return newNum;
        });
    }

    const AddCounter = () => {
        setNum([...num,0])
    }

    const counter = num.map((num ,i)=>{
        return (
            <div key={i} style={{display:"flex"}}>
                <button type="button" className="btn btn-outline-primary m-1" onClick={() => AddNum(i)}>+1</button>
                <p className="m-2" >{num}</p>
            </div>
        )
    });
    return (<>
        <button className="btn btn-primary" type="button" onClick={AddAll}>All + 1</button>        
        <div className="m-2" >
            {counter}
        </div>
        <button className="btn btn-primary" type="button" onClick={AddCounter}>Add a Counter</button>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />)