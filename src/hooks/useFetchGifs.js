import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setSatate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category).then(imgs => {

            setSatate({
                data: imgs,
                loading: false
            })

        });

    }, [category])

    return state;

}