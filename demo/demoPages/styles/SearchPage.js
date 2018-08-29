import React from 'react';

const eight = {paddingLeft: 8};
const sixtn = {paddingLeft: 16};
const twntyFr = {paddingLeft: 24};
const thrtytwo = {paddingLeft: 32};
const forty = {paddingLeft: 40};

const SearchPage = () => (
    <div className='elementContainer'>
    <p className="code">
    {`<form className="pe-search pe-search--rounded">`}
      <div style={eight}>{`<div>`}</div>
        <div style={sixtn}>{`<input className="pe-label" type="search" placeholder="Search"/>`}</div>
        <div style={sixtn}>{`<button type="submit" className="pe-icon--btn pe-label--secondary" aria-label="search" title="search">`}</div>
          <div style={twntyFr}>{`<svg aria-hidden="true"`}</div>
            <div style={thrtytwo}>{`focusable="false"`}</div>
            <div style={thrtytwo}>{`className="pe-icon--search-lg-18">`}</div>
          <div style={twntyFr}>{`<use xlinkHref="#search-lg-18"></use>`}</div>
          <div style={twntyFr}>{`</svg>`}</div>
        <div style={sixtn}>{`</button>`}</div>
      <div style={eight}>{`</div>`}</div>
    {`</form>`}
    </p>
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
    <p className="code">
    {`<form className="pe-search pe-search--square">`}
      <div style={eight}>{`<div>`}</div>
        <div style={sixtn}>{`<input className="pe-label" type="search" placeholder="Search"/>`}</div>
        <div style={sixtn}>{`<button type="submit" className="pe-icon--btn pe-label--secondary" aria-label="search" title="search">`}</div>
          <div style={twntyFr}>{`<svg aria-hidden="true"`}</div>
            <div style={thrtytwo}>{`focusable="false"`}</div>
            <div style={thrtytwo}>{`className="pe-icon--search-lg-18">`}</div>
          <div style={twntyFr}>{`<use xlinkHref="#search-lg-18"></use>`}</div>
          <div style={twntyFr}>{`</svg>`}</div>
        <div style={sixtn}>{`</button>`}</div>
      <div style={eight}>{`</div>`}</div>
    {`</form>`}
    </p>
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
