import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'

type Props = {}

const DesignPage = (props: Props) => {
    return (
        <>
            <h1>AEFinance Design Page</h1>
            <h2>
                Table - Table takes in a configuration object and company data as
                params. Use the config to style your table.
            </h2>
            <RatioList />
            <Table />
        </>
    )
}

export default DesignPage