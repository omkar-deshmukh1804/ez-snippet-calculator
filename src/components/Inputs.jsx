export const Inputs = ({currentOperator,updateOperator,inputOne, inputTwo, updateInputs, results, updateResult }) => {
    
    
    
    const changeInputs = (e) => {
        let currentNumOne = 0
        let currentNumTwo = 0
        if (e.target.className === 'inputs-one') {
            currentNumOne = e.target.value
            currentNumTwo = inputTwo
        } else if (e.target.className === 'inputs-two') {
            currentNumTwo = e.target.value
            currentNumOne = inputOne
        }
        updateInputs(currentNumOne, currentNumTwo)
    }

    const changeOperator = (e) => {
        let operator = e.target.innerText
        updateOperator(operator)
    }

    return (
        <div className='input-operator'>
            <div className='inputs'>
                <input value={inputOne}  onChange={changeInputs} className='inputs-one' type="number" />
                <span className='current-operator'>{currentOperator}</span>
                <input value={inputTwo} onChange={changeInputs} className='inputs-two' type="number" />
            </div>
            <div className="operations">
                <button onClick={changeOperator} className="operations-add">+</button>
                <button onClick={changeOperator} className="operations-subtract">-</button>
                <button onClick={changeOperator} className="operations-multiply">*</button>
                <button onClick={changeOperator} className="operations-divide">/</button>
            </div>
            <div className='results'>Results:{results} </div>
        </div>
    )
}