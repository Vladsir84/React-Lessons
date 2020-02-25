import React from 'react';


const Pagination = props => {
    return (
        <div className="pagination">
            <button className="btn"
                onClick={props.goPrev}
                disabled={props.disabled}
            >←</button>
            <span className="pagination__page">{props.currentPage + 1}</span>

            <button className="btn"
                onClick={props.goNext}
                disabled={props.disabled}
            >→</button>
        </div>

    );
};

export default Pagination;