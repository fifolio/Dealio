import { hero } from '../../../../assets/data/data'

export default function Card() {
    return (
        <>
            <section className='cards'>
                {hero.map((item) => (
                    <div className="card" key={item.id}>
                        <div className="left">
                            <img src={item.cover} />
                        </div>
                        <div className="right">
                            <h4>{item.name}</h4>
                            <p>{item.items} items</p>
                        </div>
                    </div>
                ))}
            </section> 
        </>
    )
}
