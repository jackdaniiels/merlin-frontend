import { useDispatch } from 'react-redux';
import { CleanFilters } from './CleanFilters';
import { SelectFilter } from './SelectFilter';

import filtesStyles from '@styles/filters.module.scss';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
    FiltersState, setType, setVertical, setArea, setInitiative, setService, clearFilters,
    // fetchVerticals, fetchAreas, fetchInitiatives, fetchServices
} from '../../store/slices/filterSlice';
import { RootState } from '../../store/store';


export const Filters = () => {

    const dispatch = useDispatch();
    const { type, vertical, area, initiative, service, options, loading } = useSelector((state: RootState) => state.filters);

    useEffect(() => {
        // dispatch(fetchVertical());
        // dispatch(fetchAreas());
        // dispatch(fetchInitiatives());
        // dispatch(fetchServices());
    }, [dispatch]);

    if (loading) return <div>Loading filters...</div>;

    return (
        <div className={filtesStyles.filters}>
            <SelectFilter
                label='Tipo'
                name='type'
                options={['Histórico', 'Proyección', 'Histórico y Proyección']}
                handleOnChange={(value) => dispatch(setType(value as FiltersState['type']))}
                value={type} />
            <SelectFilter
                label='Vertical'
                name='vertical'
                options={options?.verticals || ['']}
                handleOnChange={(value) => dispatch(setVertical(value))}
                value={vertical}
            />
            <SelectFilter
                label='Area'
                name='area'
                options={options?.areas || ['']}
                handleOnChange={(value) => dispatch(setArea(value))}
                value={area} />
            <SelectFilter
                label='Iniciativa'
                name='initiative'
                options={options?.initiatives || ['']}
                handleOnChange={(value) => dispatch(setInitiative(value))}
                value={initiative} />
            <SelectFilter
                label='Servicio'
                name='service'
                options={options?.services || ['']}
                handleOnChange={(value) => dispatch(setService(value))}
                value={service} />
            <CleanFilters handleClick={() => dispatch(clearFilters())} />
        </div>
    )
}
