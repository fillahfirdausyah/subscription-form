import React from 'react'
import {useParams} from 'react-router'

// Component
import FormMarketing from '../../component/Form/Marketing'

function LengkapiPage() {

    const {id} = useParams()

    return (
        <div>
            <FormMarketing id={id}/>
        </div>
    )
}

export default LengkapiPage
