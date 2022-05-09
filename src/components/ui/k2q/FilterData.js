import React from 'react'
import { Kq2Select } from '../dashboard/filters/Kq2Select';

export const FilterData = () => {

    return (
        <div className='filter-kq2'>
            <div className='row w-100'>
                <div className='col'>
                    <label>KQ2 Medio Acceso</label>
                    <Kq2Select />
                </div>
            </div>
        </div>
    )
}
