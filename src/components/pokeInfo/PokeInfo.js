import styles from './PokeInfo.module.css';


function PokeInfo(props) {

    return (
        (!props.data) ? "" : (
            <>

                {/* Species*/}
                <h1> {props.data.species.name.toUpperCase()}</h1>


                {/* Abilities*/}
                <div>
                    {props.data.abilities.map(poke => {
                        return (
                            <>
                                <div className={styles.abilities}>
                                    <p> {poke.ability.name}</p>
                                </div>
                            </>
                        )
                    })}
                </div>


                {/* Stats*/}
                <div>
                    {props.data.stats.map(poke => {
                        return (
                            <>
                                <div>
                                    <p> {poke.stat.name}:{poke.base_stat}</p>
                                </div>
                            </>
                        )
                    })}
                </div>


                {/* Type*/}
                <div>
                    {props.data.types.map(poke => {
                        return (
                            <>
                                <div>
                                    <p> type: {poke.type.name}</p>
                                </div>
                            </>
                        )
                    })}
                </div>


                {/* Weight*/}
                <h4> weight:{props.data.weight}</h4>


                {/* Moves*/}
                <div>
                    {props.data.moves.map(poke => { 
                        return (
                            <>
                                <div>
                                    <p> Move: {poke.move.name}</p>
                                </div>
                            </>
                        )
                    })}
                </div>

            </>
        )
    )
};


export default PokeInfo