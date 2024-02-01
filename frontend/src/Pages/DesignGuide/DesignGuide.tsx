import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'
import { TestDataCompany } from '../../Components/Table/testData';

type Props = {}

const data = TestDataCompany;

const tableConfig = [
    {
        label: "symbol",
        render: (company: any) => company.symbol,
    },
];

const DesignGuide = (props: Props) => {
    return (
        <>
            <h1>AEFinance Design Page</h1>
            <h2>
                Table - Table takes in a configuration object and company data as
                params. Use the config to style your table.
            </h2>
            <RatioList config={tableConfig} data={data} />
            <Table config={tableConfig} data={data} />
        </>
    )
}

export default DesignGuide