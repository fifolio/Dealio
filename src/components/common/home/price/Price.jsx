import Heading from '../../Heading'
import { price } from '../../../../assets/data/data'

export default function Price() {
    return (
        <>
            <section className="price">
                <Heading title="Choose The Plans" desc="Meet our newbies! The latest templates uploaded to the marketplace" />

                <div className="content">
                    {price.map((item, i) => (
                        <div className="box" key={i}>
                            <h3>{item.name}</h3>
                            <h1>
                                <span>$</span>
                                {item.price}
                                <label htmlFor="">/user per month</label>
                            </h1>
                            <p>{item.desc}</p>
                            <button className="button">
                                GET STARTED
                            </button>

                            <ul>
                                {item.list.map((lists, i) => (
                                    <li key={i}>
                                        <span>{lists.icon} </span>
                                        <span>{lists.para}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
