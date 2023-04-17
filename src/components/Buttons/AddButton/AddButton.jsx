import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import './AddButton.css'
const AddButton = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }

    const renderButton = () => {
        if (count === 0) {
            return (
                <div className='add-button-initial' onClick={handleIncrement}>ADD</div>
            )
        } else {
            return (
                <div className='add-button-clik'>
                    <div className='icon' onClick={handleDecrement}>
                        <FaMinus size='8px'/>
                    </div>
                    <div>{count}</div>
                    <div className='icon' onClick={handleIncrement} >
                        <FaPlus size='8px'/>
                    </div>
                </div>
            )
        }
    }
    return <div>{renderButton()}</div>
}

export default AddButton;
