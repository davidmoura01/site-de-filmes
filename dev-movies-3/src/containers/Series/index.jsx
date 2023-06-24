import { useState } from "react"

import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPopularSeries, getTopSeries } from "../../services/getData"
import Slider from "../../components/Slider"
import { Container } from "./styles"



function Series() {

    const { id } = useParams()

    const [topSeriesSeries, setTopSeriesSeries] = useState(id)
    const [topPopularesSeries, setTopPopularesSeries] = useState(id)
    

    useEffect(() => {

        async function getAllData() {


            Promise.all([
                getTopSeries(id),
                getPopularSeries(id),
                


            ])



                .then(([serie, popular,]) => {


                    setTopSeriesSeries(serie)
                    setTopPopularesSeries(popular)
                    

                })


                .catch((error) => console.error)


        }
        getAllData()


    }, [])





    return (

        <>
            <Container>


            </Container>



            {topSeriesSeries && <Slider info={topSeriesSeries} title={'top series'} />}
            {topPopularesSeries && <Slider info={topPopularesSeries} title={'Series populares'} />}

            




        </>


    )
}

export default Series