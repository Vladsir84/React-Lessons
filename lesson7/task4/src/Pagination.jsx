import React from 'react';


const Pagination = props => {
    const disabled1 = props.currentPage === 0
        ? 'disabled'
        : '';

    const disabled2 = (props.currentPage + 1) * 3 >= props.totalItems
        ? 'disabled'
        : '';

    const arrow1 = props.currentPage === 0
        ? ''
        : '←';

    const arrow2 = (props.currentPage + 1) * 3 >= props.totalItems
        ? ''
        : '→'


    return (
        <div className="pagination">
            <button className="btn"
                onClick={props.goPrev}
                disabled={disabled1}>
                {arrow1}
            </button>
            <span className="pagination__page">{props.currentPage + 1}</span>

            <button className="btn"
                onClick={props.goNext}
                disabled={disabled2}>
                {arrow2}
            </button>
        </div>

    );
};

export default Pagination;