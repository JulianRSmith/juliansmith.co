import React from "react";
import "../../css/Pagination.css";

function PaginationItem({ dir, title, nextWork }) {
    return (
        <div onClick={nextWork} className="pagination-item">
            <div className="pagination-dir">{dir}</div>
            <div className="pagination-title">{title}</div>
        </div>
    );
}

function Pagination({ index, data, nextWork }) {
    return (
        <div className="pagination">
            <div className="pagination-inner prev">
                {index !== 0 && (
                    <PaginationItem
                        dir="Previous"
                        title={data[index - 1].title}
                        nextWork={() => nextWork(index - 1)}
                    />
                )}
            </div>
            <div className="pagination-inner next">
                {index !== data.length - 1 && (
                    <PaginationItem
                        dir="Next"
                        title={data[index + 1].title}
                        nextWork={() => nextWork(index + 1)}
                    />
                )}
            </div>
        </div>
    );
}

export default Pagination;
