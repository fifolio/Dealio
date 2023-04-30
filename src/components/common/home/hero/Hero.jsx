import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import SearchItems from './SearchItems';
import { products } from '../../../../assets/data/data'

export default function Hero() {

    const [value, setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value)
    };

    const onSearch = (value) => {
        setValue(value)
    }

    return (
        <>
            <section className='hero'>
                <div className="container">
                    <h1>
                        <label>
                            Over <span>12,500</span> Curated Design <br />
                        </label>
                        <label>
                            Resources, <span>Graphic & Website</span> Templates
                        </label>
                    </h1>
                    <p>
                        Our design themes library offers 6k+ high-quality items in 100 categories for personal or commercial use.
                    </p>
                    <div className="search">
                        <span>All Categories</span>
                        <hr />
                        <input type="text" placeholder='Search Products...' onChange={onChange} value={value} />
                        <button onClick={() => onSearch(value)}>
                            <BiSearch className="searchIcon heIcon" />
                        </button>
                    </div>
                    <SearchItems products={products} value={value} onSearch={onSearch} />
                    <p>
                        Examples: Mockup, PSD, Theme Design, Image...
                    </p>
                </div>
            </section>
        </>
    )
}
