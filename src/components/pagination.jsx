import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null; // ------------------------------ источник проблем при удалении пользователй с конца
    const pages = _.range(1, pageCount + 1);

    return (
        <>
            <nav>
                <ul className="pagination">
                    {pages.map((page) => {
                        return (
                            <li
                                className={
                                    "page-item" +
                                    (page === currentPage ? " active" : " ")
                                }
                                key={"page_" + page}
                            >
                                <button
                                    onClick={() => onPageChange(page)}
                                    className="page-link"
                                >
                                    {page}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
