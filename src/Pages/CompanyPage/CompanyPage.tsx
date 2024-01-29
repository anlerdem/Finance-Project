import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCompanyProfile } from '../../api';
import { CompanyProfile } from '../../company';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Tile from '../../Components/Tile/Tile';

interface Props { }

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    }
    getProfileInit();
  }, [])
  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="Price" subTitle={company.price.toString()} />
            <Tile title="Sector" subTitle={company.sector} />
            <Tile title="Market Cap" subTitle={company.mktCap.toString()} />
          </CompanyDashboard>
        </div>
      ) : (
        <div>Company not found!</div>
      )}
    </>
  );
};

export default CompanyPage