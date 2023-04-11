import React from 'react';
import {filterCreator} from "../reducers/filterReducer";
import {useDispatch} from "react-redux";

const Filter = () => {
    const dispatch = useDispatch()

    const handleFilter = ({target}) => {
        dispatch(filterCreator(target.value))
    }

    return (
        <div>
            filter
            <input onChange={handleFilter} type="text" name="filter"/>
        </div>
    );
};

export default Filter;