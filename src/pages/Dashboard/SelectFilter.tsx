import selectStyles from '@styles/select.module.scss';


interface SelectFilterProps {
    label: string;
    name: string;
    options: string[];
    value: string;
    handleOnChange: (value: string) => void;
}

export const SelectFilter = ({ label, options, handleOnChange, value, name }: SelectFilterProps) => {
    return (
        <div className={selectStyles.filter}>
            <label className={selectStyles.filter__label} htmlFor={name}>{label}:</label>
            <select className={selectStyles.filter__select}
                name={name}
                onChange={(e) => handleOnChange(e.target.value)}
                value={value}>
                <option value="" disabled>Seleccione</option>
                {
                    options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))
                }
            </select>
        </div>
    )
}
