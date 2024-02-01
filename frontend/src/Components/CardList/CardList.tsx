import React, { SyntheticEvent } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";

interface Props {
    searchResults: CompanySearch[];
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({ searchResults, onPortfolioCreate }: Props): JSX.Element => {
    return (
        <div className="relative flex items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-2 md:flex-col">
            {searchResults.length > 0 ? (
                searchResults.map((result) => {
                    return (
                        <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate} />
                    );
                })
            ) : (
                <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
                    No results!
                </p>
            )}
        </div>);
};

export default CardList;