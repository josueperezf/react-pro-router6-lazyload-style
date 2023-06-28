import { useState } from 'react'

export const useProduct = () => {
    const [counter, setCounter] = useState<number>(0);

    const incrementarPor = (value : number) => {
        if (value < 1) return;
        setCounter(counter + value);
    }
    const decrementarPor = (value : number) => {
        if (counter < 1) return;
        setCounter(counter - value);
    }
    return {
        //*Properties
        counter,
        //* Methods
        incrementarPor,
        decrementarPor,
    }
}
