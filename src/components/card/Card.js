import styles from './Card.module.css';


function Card(props) {
    return (
        <>

            {props.pokemon.map((item, i) => {
                return (
                    <div key={item.id} onClick={() => props.infoPokeMon(item)} className={styles.cards}>
                        <div>  {item.id} </div>
                        <div>  <img src={item.sprites.front_default} /></div>
                        <div> {item.name} </div>
                    </div>
                )
            })}
        </>
    )
};

export default Card