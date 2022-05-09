import React from 'react';
import { EntryModeSelect }  from '../dashboard/filters/EntryModeSelect';

export const FilterDataEntryMode = () => {

    return (
        <div className='filter-entrymode'>
            <div className='row w-100'>
                <div className='col'>
                <label>Entry Mode:</label>
                <EntryModeSelect />
                </div>
            </div>
        </div>
    )
}
