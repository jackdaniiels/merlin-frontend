import React, { useEffect, useRef, useState } from 'react'


interface UseDebounceInputReturn {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    debouncedValue: string;
    inputRef: React.RefObject<HTMLInputElement>;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSetFocus: () => void
}


export const useDebounceInput = (delay = 700): UseDebounceInputReturn => {

    const [inputValue, setInputValue] = useState<string>('');
    const [debouncedValue, setdebouncedValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        handleSetFocus();
    }, []);

    const handleSetFocus = () => {
        inputRef.current?.focus();
    }

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            console.log('buscando.... ', inputValue);
            setdebouncedValue(inputValue);
        }, delay);

        return () => {
            clearTimeout(idTimeOut);
        }

    }, [inputValue, delay]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('e -> ', e.target.name, e.target.value);
        setInputValue(e.target.value);
    }

    return (
        {
            inputValue,
            setInputValue,
            debouncedValue,
            inputRef,
            handleInputChange,
            handleSetFocus
        }
    )
}
