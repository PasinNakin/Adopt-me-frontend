import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Pagination({ pageNumbers, paginate, currentPage }) {
    const buttonNext = `btn text-white py-2 px-3 rounded-2xl bg-orange-500 hover:bg-orange-600 hover:text-white  border-none text-base`;
    const buttonPage = `btn text-black py-2 px-5 rounded-badge bg-white hover:bg-orange-500 hover:text-white active:bg-orange-600 focus:text-white focus:bg-orange-600  border-none text-base `;
    const activePageButton = `btn text-white py-2 px-5 rounded-badge bg-orange-600 hover:bg-orange-500  border-none text-base `;

    const [activePage, setActivePage] = useState(currentPage || 1);

    const nextPage = () => {
        if (currentPage < pageNumbers.length) {
            paginate(currentPage + 1);
            setActivePage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            paginate(currentPage - 1);
            setActivePage(currentPage - 1);
        }
    };
    //
    return (
        <div className="bg-orange-400 rounded-badge m-auto p-3 ">
            <ul className="flex justify-center items-center gap-2">
                <button className={buttonNext} onClick={() => prevPage()}>
                    Prev
                </button>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <Link to={`/allDog/${number}`}>
                            <button
                                className={
                                    activePage === number
                                        ? activePageButton
                                        : buttonPage
                                }
                                onClick={() => {
                                    paginate(number);
                                    setActivePage(number);
                                }}
                            >
                                {number}
                            </button>
                        </Link>
                    </li>
                ))}
                <button className={buttonNext} onClick={() => nextPage()}>
                    Next
                </button>
            </ul>
        </div>
    );
}

export default Pagination;
