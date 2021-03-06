import React from 'react'
import { breakerTypes } from './breakerValidator/breakerTypes'
import { breakerValidator } from './breakerValidator/breakerValidator'
import { DataTableBreaker } from './DataTableBreaker'

export const ReportBreaker = ({ data }) => {
    return (
        <>
        {
            data.map((msm, index) => (
                <div key={index} className='breaker-info'>
                    <div className='row m-2'>
                        <h3>Mensaje No. {index + 1}</h3>
                        <div className='col'>
                            <label><b>Mensaje:</b></label><br />
                            <textarea disabled className='text-message'>{msm.message}</textarea>
                        </div>
                    </div>
                    <div className='row m-2'>
                        <div className='col'>
                            <label><b>Header:</b></label><br />
                            <textarea disabled className={breakerValidator(breakerTypes.header, msm.header)}>{msm.header}</textarea>
                        </div>
                        <div className='col'>
                            <label><b>Type:</b></label><br />
                            <textarea disabled className={breakerValidator(breakerTypes.type, msm.type)}>{msm.type}</textarea>
                        </div>
                        <div className='col'>
                            <label><b>BitMap:</b></label><br />
                            <textarea disabled className={breakerValidator(breakerTypes.BitMap, msm.bitmap)}>{msm.bitmap}</textarea>
                        </div>
                    </div>
                    <DataTableBreaker msm={msm} index={index}/>
                </div>
            ))
        }
        </>
    )
}
