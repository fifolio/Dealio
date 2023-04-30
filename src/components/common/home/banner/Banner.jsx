import { banner } from '../../../../assets/data/data'

export default function Banner() {
    return (
        <>
            <section className='banner'>
                <div className="posts">
                    {banner.map((items) => (
                        <div className="post" key={items.id}>
                            <div className="content">
                                <div className="img">
                                    <img src={items.cover} width="100%" />
                                </div>
                                <div className="text">
                                    <h2>{items.title}</h2>
                                    {/* <p>{items.desc}</p> */}
                                    <button className="button">
                                        SHOP NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
