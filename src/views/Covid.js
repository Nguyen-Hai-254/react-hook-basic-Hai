import useFetch from "../customize/fetch";

const Covid = () => {
    
    const url = 'https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z';
    const {data: dataCovid, loading, isError} = useFetch(url);

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