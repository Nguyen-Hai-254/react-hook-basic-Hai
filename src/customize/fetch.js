import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await axios.get(url)
                const data = res && res.data ? res.data : [];
                setData(data);
                setLoading(false);
                setIsError(false);
            }
            catch (e) {
                setIsError(true);
                setLoading(false);
                console.log('error: ', e.message);
            }
        }

        setTimeout(() => {
            loadData();
        }, 2000);

    }, [url]);

    return {
        data, loading, isError
    }
}

export default useFetch;