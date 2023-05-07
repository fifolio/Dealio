import Heading from '../../Heading';
import { blog } from '../../../../assets/data/data'

export default function Blog() {
    return (
        <>
            <section className="blog">
                <Heading title="LATEST BLOG POSTS" desc="Latest marketplace news, success stories and tutorials" />

                <div className="posts">
                    {blog.slice(0, 3).map((items, i) => (
                        <div className='post' key={i}>
                            <div className="content">
                                <div className="img">
                                    <img src={items.cover} alt="" />
                                </div>
                                <div className="text">
                                    <button className="button" style={{ marginBottom: '1px' }}>
                                        {items.category}
                                    </button>
                                    <p>
                                        Post Date : <span>{items.date}</span>
                                    </p>
                                    <h3>
                                        {items.title.slice(0, 35)} ...
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}
