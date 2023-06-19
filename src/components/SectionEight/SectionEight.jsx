import React from 'react'
import SectionEigthHead from './Article/SectionEigthHead'
import EightCard from './Article/EightCard'
import EightBtn from './Article/EightBtn'

const SectionEight = () => {
    return (
        <div>
            <div className='mb-3'>
                <SectionEigthHead />
            </div>
            <div>
                <EightCard />
            </div>
            <div>
                <EightBtn />
            </div>
        </div>
    )
}

export default SectionEight
