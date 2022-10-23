import { useEffect, useState } from "react";
import axios from "axios";

const Covid = () => {
    const [dataCovid, setDataCovid] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z')
                const data = res && res.data ? res.data : [];
                setDataCovid(data);
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

    }, [])

    return (
        <>
            <h3>Covid 19 in VietNam</h3>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                </thead>
                <tbody>
                    {isError === false && loading === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map((item, index) => {
                            const date = new Date(item.Date)
                            return (
                                <tr key={index}>
                                    <td>{date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                </tr>
                            )
                        })
                    }
                    {loading &&
                        <tr>
                            <td>Loading data....</td>
                        </tr>
                    }
                    {isError &&
                        <tr>
                            <td>Error....</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default Covid;