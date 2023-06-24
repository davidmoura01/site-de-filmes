import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getTopMovies } from "../../services/getData"
 
import Slider from "../../components/Slider"
import { Container } from "./Styles"








function Movies() {

    const { id } = useParams()

    const [topFilmesFilmes, setTopFilmesFilmes] = useState()
    const [TopFilmes,setTopFilmes]= useState()

    useEffect(() => {
        async function getAlldata() {

            Promise.all([
                getTopMovies(id),
                

            ])

                .then(([filmes,filmesPopulares]) => {
                    console.log({ filmesPopulares })

                    setTopFilmesFilmes(filmes)
                    setTopFilmes(filmesPopulares)

                })

                .catch((error) => console.error)
        }

        getAlldata()



    }, [])




    return (
<>
            <Container>
                <h1>filmes</h1>
                <p></p>



            </Container>
            {topFilmesFilmes && <Slider info={topFilmesFilmes} title={'Top filmes'} />}
            
            
            </>

)

            
        
        
        }
        
        export default Movies