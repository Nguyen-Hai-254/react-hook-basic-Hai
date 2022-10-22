import { useEffect, useState } from "react";
import axios from "axios";

const Covid = () => {
    const [dataCovid, setDataCovid] = useState([]);

    // useEffect(() => {
    //     let res = axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z')
    //     .then(res => {
    //         console.log(res.data);
    //         let data = res && res.data ? res.data : []
    //         console.log("data", data);
    //         setDataCovid(data);
    //         console.log("check", dataCovid);
    //     })
    //     // let data = res && res.data ? res.data : [];
    //     // setDataCovid(data);
    //     // console.log(dataCovid);})
    //     // .then(setDataCovid(res.data))
    // }, []);

    useEffect(() => {
        const loadData = async () => {
            const res = await axios.get('https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z')
            const data = res && res.data ? res.data : [];
            setDataCovid(data);
        }

        loadData();
    }, [])

    return (
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
                {dataCovid && dataCovid.length > 0 &&
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
            </tbody>
        </table>
    )
}

export default Covid;