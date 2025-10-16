import selectStyles from '@styles/select.module.scss';


interface SelectFilterProps {
    label: string;
    name: string;
    options: string[];
    value: string;
    handleOnChange: (value: string) => void;
    cleanValue?: boolean;
}

export const SelectFilter = ({ label, options, handleOnChange, value, name, cleanValue = true }: SelectFilterProps) => {
    return (
        <div className={selectStyles.filter}>
            <label className={selectStyles.filter__label} htmlFor={name}>{label}:</label>
            <select className={selectStyles.filter__select}
                name={name}
                onChange={(e) => handleOnChange(e.target.value)}
                value={value}>
                <option value="" disabled>Seleccione</option>
                {cleanValue && <option value="">Todos</option>}
                {
                    options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))
                }
            </select>
        </div>
    )
}
