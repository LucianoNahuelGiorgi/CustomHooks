import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoadig: true,
        hasError: null
    })

    const getFetch = async () => {
        setState({
            ...state,
            isLoadig: true
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoadig: false,
            hasError: null
        });
    }

    useEffect(() => {
        getFetch();
    }, [url])

    return {
        data: state.data,
        isLoadig: state.isLoadig,
        hasError: state.hasError
    };
}
