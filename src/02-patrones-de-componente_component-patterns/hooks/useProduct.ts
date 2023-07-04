import { useState, useEffect } from 'react';
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product,
    value?: number,
    initialValues?: InitialValues
    onChange?: (args: onChangeArgs) => void
}
export const useProduct = ({ onChange, product, value = 0, initialValues}: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    useEffect(() => {
        if (initialValues?.count) return; // si tiene data del initialValues, entonces no necesito que utilice el value para nada, con esto evito que haga set del value
        setCounter(value);
    }, [value, initialValues?.count])
    

    const incrementarPor = (value : number) => {
        if (initialValues?.maxCount && (initialValues?.maxCount === counter)) return;
        actualizarValue(+value);
    }
    const decrementarPor = (value : number) => {
        actualizarValue(-value);
    }
    const actualizarValue = (value: number) => {

        // las tres siguientes  lineas la hice yo y funcionan, pero fernando las realizo con Math y quedo mejor, asi que comente lo mio
        // const newValue = counter + value; // esto seria algo como  (2 + (+1)) 0 (2 + (-1)) donde signos iguales se suman y diferentes se restan
        // if (newValue < 0) return;

        // con el Math.max  lo que se hace es que se pasa el resultado de (counter + value) y un cero, y con el max se le dice que retorne el mayor de esos resultados, con ello garantizamos que jamas sera menor a cero el valor, de esta forma se evita colocar el 'if (newValue < 0) return;' que coloque yo
        const newValue = Math.max(counter + value, 0); // (counter + value) esto seria algo como  (2 + (+1)) 0 (2 + (-1)) donde signos iguales se suman y diferentes se restan.
        setCounter(newValue);
        onChange && onChange({count: newValue, product});
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    return {
        //*Properties
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter, // es para saber si alcanzo el valor maximo el contador, si en el initialValues no vandaron el count, entonces es como si este campo no existiera, como un falso
        //* Methods
        decrementarPor,
        incrementarPor,
        reset,
    }
}
