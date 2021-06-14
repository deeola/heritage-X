import React,{useState, useMemo} from 'react';
import countryList from 'react-select-country-list';
import Select from 'react-select'

function SelectForm() {

    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
    setValue(value)
    }

    
    return (
        <div>
            <form>
            <select>
                    <option>Country</option>
                    <option>Rountry</option>
                    <option>Country</option>
            </select>
            <Select options={options} value={value} onChange={changeHandler} />
                
            <button>Search</button>
                
            </form>
            
        </div>
    )
}

export default SelectForm;
