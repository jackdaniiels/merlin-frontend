import { useState, useEffect } from "react";
import type { AxiosError } from "axios";

export function useFetchData<T>(fetchFn: () => Promise<T>) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;
        setLoading(true);

        fetchFn()
            .then((res) => {
                if (mounted) setData(res);
            })
            .catch((err: unknown) => {
                if (!mounted) return;

                let message = "Error al cargar datos";

                if (err instanceof Error) {
                    message = err.message;
                }

                // 👉 Si es un error de Axios, accedemos de forma segura
                const axiosError = err as AxiosError<{ message?: string }>;
                if (axiosError?.response?.data?.message) {
                    message = axiosError.response.data.message;
                }

                setError(message);
            })
            .finally(() => {
                if (mounted) setLoading(false);
            });

        return () => {
            mounted = false;
        };
    }, [fetchFn]);

    return { data, loading, error };
}
