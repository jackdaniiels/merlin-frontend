import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { fetchFilters } from '../store/thunks/filters-thunk';
import { fetchFiltersDependent } from '../store/thunks/filters-dependent-thunk';
import { UnknownAction } from '@reduxjs/toolkit';
import { fetchHistoric } from '../store/thunks/historic-thunk';
import { fetchProjection } from '../store/thunks/projection-thunk';
import { HISTORIC, HISTORIC_AND_PROJECTION, PROJECTION } from '../constants/FILTERS';

const useFilters = () => {
    const dispatch = useDispatch();
    const { type, vertical, area, initiative, service, options, loading } = useSelector((state: RootState) => state.filters);

    useEffect(() => {
        dispatch(fetchFilters() as unknown as UnknownAction);
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchFiltersDependent({ field: 'area', vertical }) as unknown as UnknownAction);
    }, [dispatch, vertical]);

    useEffect(() => {
        if (type === HISTORIC || type === HISTORIC_AND_PROJECTION) {
            dispatch(fetchHistoric({ vertical, area, initiative, service }) as unknown as UnknownAction);
        }
    }, [dispatch, vertical, area, initiative, service, type]);

    useEffect(() => {
        if (type === PROJECTION || type === HISTORIC_AND_PROJECTION) {
            dispatch(fetchProjection({ vertical, area, initiative, service }) as unknown as UnknownAction);
        }
    }, [dispatch, vertical, area, initiative, service, type]);

    return { type, vertical, area, initiative, service, options, loading, dispatch };
}

export default useFilters