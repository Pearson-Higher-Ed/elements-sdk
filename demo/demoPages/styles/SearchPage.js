import React from 'react';

const eight = {paddingLeft: 8};
const sixtn = {paddingLeft: 16};
const twntyfr = {paddingLeft: 24};
const thrtytwo = {paddingLeft: 32};
const forty = {paddingLeft: 40};

const SearchPage = () => (
    <div className='elementContainer'>
        <form className="pe-search pe-search--rounded" onsubmit="return false;">
            <div>
                <input className="pe-label" type="search" placeholder="Search"/>
                <button type="submit" className="pe-icon--btn pe-label--secondary" aria-label="search" title="search">
                    <svg aria-hidden="true"
                        focusable="false"
                        className="pe-icon--search-lg-18">
                    <use xlinkHref="#search-lg-18"></use>
                    </svg>
                </button>
            </div>
        </form>
        <form className="pe-search pe-search--square" onsubmit="return false;">
            <div>
                <input className="pe-label" type="search" placeholder="Search"/>
                <button type="submit" className="pe-icon--btn pe-label--secondary" aria-label="search" title="search">
                    <svg aria-hidden="true"
                        focusable="false"
                        className="pe-icon--search-lg-18">
                    <use xlinkHref="#search-lg-18"></use>
                    </svg>
                </button>
            </div>
        </form>
    </div>
);

export default SearchPage;
