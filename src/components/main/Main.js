import { useState, useEffect } from 'react';
import Card from "../card/Card";
import PokeInfo from '../pokeInfo/PokeInfo';
import styles from './Main.module.css';


const Main = () => {
    let [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=16')
    let [nextUrl, setNextUrl] = useState()
    let [prevUrl, setPrevUrl] = useState()
    let [pokeData, setPokeData] = useState([])
    let [pokeDex, setPokeDex] = useState()
    let [inputValue, setInputValue] = useState('')

    let pokeFun = () => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setNextUrl(data.next)
                setPrevUrl(data.previous)
                getPokemon(data.results)
            })
    }

    let getPokemon = async (res) => {
        res.map(async (item) => {
            await fetch(item.url)
                .then((res) => res.json())
                .then((data) => setPokeData(state => {
                    state = [...state, data]
                    state.sort((a, b) => a.id > b.id ? 1 : -1)
                    return state
                }))
        })
    }

    useEffect(() => {
        pokeFun();
    }, [url])



    let handleChange = (e) => {
        setInputValue(e.target.value)
    }


    {/* Search Pokemon */}
    useEffect(() => {
        if (inputValue !== '' && inputValue.length > 3) {
            let newPokerData = pokeData.filter((el) => el.name.slice(0, 3) == inputValue.toLowerCase().slice(0, 3))
            setPokeData(newPokerData)
        }
    }, [inputValue])


    return (
        <>
            <section className={styles.section}>
                                
            {/* Input for search*/}
                <input onChange={handleChange} />

                <div className={styles.content}>
                    <div className={styles.left_content}>
                        <Card pokemon={pokeData} infoPokeMon={poke => setPokeDex(poke)} />
                    </div>

                    <div className={styles.right_content}>
                        <PokeInfo data={pokeDex} />
                    </div>
                </div>



            {/* Next, Previous buttons*/}     

                <div className={styles.btn_group}>
                    <button onClick={() => {
                        setPokeData([])
                        setUrl(prevUrl)
                    }}> Previous</button>
                    <button onClick={() => {
                        setPokeData([])
                        setUrl(nextUrl)
                    }} > Next </button>
                </div>

            </section>

        </>
    )
};

export default Main