import cleanStyles from '@styles/clean_filters.module.scss';

interface CleanFiltersProps {
    btnText?: string;
    disabled?: boolean;
    handleClick: () => void;
}


export const CleanFilters = ({ btnText = 'Limpiar filtros', disabled = false, handleClick }: CleanFiltersProps) => {
    return (
        <button className={cleanStyles.clean} disabled={disabled} onClick={handleClick}>
            {btnText}
            <img className={cleanStyles.clean__icon} src="/times_circle_icon.svg" alt="Clean" />
        </button>
    )
}
