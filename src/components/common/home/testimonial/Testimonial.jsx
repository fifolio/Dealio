import { ImQuotesRight } from 'react-icons/im';
import Heading from '../../Heading'
import { customer } from '../../../../assets/data/data'

export default function Testimonial() {
    return (
        <section className='customer'>
            <Heading title="Choose The Plan" desc='Meet our newbies! The latest templates uploaded to the marketplace.' />

            <div className="content">
                {customer.map((items) => (
                    <div className="card">
                        <button>
                            <ImQuotesRight />
                        </button>
                        <p>{items.desc}</p>
                        <h3>{items.name}</h3>
                        <span>{items.post}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
