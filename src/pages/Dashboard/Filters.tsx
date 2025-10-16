import { CleanFilters } from './CleanFilters';
import { SelectFilter } from './SelectFilter';

import filtesStyles from '@styles/filters.module.scss';
import {
    setType, setVertical, setArea, setInitiative, setService, clearFilters
} from '../../store/slices/filterSlice';

import { FiltersState } from '../../models/filters.interface';
import { Spinner } from './Spinner';
import useFilters from '../../hooks/useFilters';


export const Filters = () => {
    const { type, vertical, area, initiative, service, options, loading, dispatch } = useFilters();
    if (loading) return <Spinner />;

    return (
        <div className={filtesStyles.filters}>
            <SelectFilter
                cleanValue={false}
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
                label='Área'
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
