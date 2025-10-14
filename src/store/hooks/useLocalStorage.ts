import { useEffect, useState } from "react"

export const useLocalStorage = (key: string) => {
    const [stored, setStored] = useState(() => localStorage.getItem(key) || '');

    useEffect(() => {
        if (stored) {
            localStorage.setItem(key, stored);
        }
    }, [key, stored]);

    return (
        {
            stored,
            setStored
        }
    )
}

