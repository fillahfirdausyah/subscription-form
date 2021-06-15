import React, {useState, useEffect} from 'react'
import Template from '../../component/Template'
import Navbar from '../../component/Navbar'
import { useParams } from 'react-router'

import './style.css'
import axios from 'axios'

function PreviewPage(props) {

    const [data, setData] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://subsform-buana-default-rtdb.asia-southeast1.firebasedatabase.app/data.json?id=${id}`)
        .then(res => {
            setData([res])
        })
    }, [])

    return (
        <div>
            <Template data={data} id={id}/>
        </div>
    )
}

export default PreviewPage
