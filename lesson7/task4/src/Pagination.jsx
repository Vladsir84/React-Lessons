import React from 'react';


const Pagination = props => {
    
    const disabled1 = props.currentPage === 0
        ? 'disabled'
        : '';

    const disabled2 = (props.currentPage + 1) * 3 >= props.totalItems
        ? 'disabled'
        : '';



    return (
        <div className="pagination">
            <button className="btn"
                onClick={props.goPrev}
                disabled={disabled1}>
                {
                    props.currentPage === 0
                        ? ''
                        : '←'
                }
            </button>
            <span className="pagination__page">{props.currentPage + 1}</span>

            <button className="btn"
                onClick={props.goNext}
                disabled={disabled2}>
                {(props.currentPage + 1) * 3 >= props.totalItems
                    ? ''
                    : '→'

                }
            </button>
        </div>

    );
};

export default Pagination;