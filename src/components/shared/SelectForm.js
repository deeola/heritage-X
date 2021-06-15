import React,{useState, useMemo, useContext, useEffect} from 'react';
import countryList from 'react-select-country-list';
import Select from 'react-select';
import heritageContext from '../context/Heritage/heritageContext';
import Test from '../home/Test';

function SelectForm(props) {

    const HeritageContext = useContext(heritageContext);

    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = value => {
    setValue(value)
    }
    const Naturals = HeritageContext.Naturals;
    const Culture = HeritageContext.Culture;


    //ONCHANGE
    const [selection, setSelection] = useState('select');


    //onSubmit


    const [country, setCountry] = useState(false);
    const [select, setSelect] = useState(false);
    const [region, setRegion] = useState(false);
    const [category, setCategory] = useState(false);

    //SET STYLE

    const showCountry = () =>{
        return country ? {} : {display:'none'}
    }

    const showSelect = () =>{
        return select ? {} : {display:'none'}
    }

    const showRegion = () =>{
        return region ? {} : {display:'none'}
    }

    const showCategory = () =>{
        return category ? {} : {display:'none'}
    }

    const handleChange = (e) =>{
        const newselection = e.target.value;
        setSelection(newselection )

    }
    



    useEffect(() => { 
            if(selection === 'Region'){
                 setRegion(true);
                 setCategory(false);
                 setSelect(false);
                 setCountry(false);
     
             } else if (selection === 'Category'){
                 setRegion(false);
                 setCategory(true);
                 setSelect(false);
                 setCountry(false)
             } else if (selection === 'Country'){
                 setRegion(false);
                 setCategory(false);
                 setSelect(false);
                 setCountry(true)
             } else{
     
                 setRegion(false);
                 setCategory(false);
                 setSelect(true);
                 setCountry(false)
     
             }

    },[selection])

    //SUBMIT FORM

    const handleSubmit = e => {

        if(selection === 'Region'){
            HeritageContext.getRegion(e.target[2].value);
            
        } else if(selection === 'Country'){
            HeritageContext.getCountry(value.label);
        } else if(selection === 'Category'){
            HeritageContext.getCategory(e.target[4].value);
        }
        e.preventDefault();
    }

    return (
        <div>
            <form  onSubmit={handleSubmit}>
            <select onChange={handleChange}>
                    <option value='select'>select</option>
                    <option value='Country'>Country</option>
                    <option value='Region'>Region</option>
                    <option value='Category'>Category</option>
            </select>
            <select style={showSelect()}>
                <option>Choose</option>
            </select>
            <select style={showRegion()}>
                    <option>Africa</option>
                    <option>Arab States</option>
                    <option>Asia and Pacific</option>
                    <option>Europe and North America</option>
                    <option>Latin America and the Caribbean</option>
            </select>
            <div style={showCountry()}>
                <Select  options={options} value={value} onChange={changeHandler} />
            </div>

            <select style={showCategory()}>
                    <option>Mixed</option>
                    <option>Cultural</option>
                    <option>Natural</option>
            </select>



            <button>Search</button>

            </form>
            <p onClick={HeritageContext.getNatural}>Natural</p>
            <p onClick={HeritageContext.getMixed}>Mixed</p>
            <p onClick={HeritageContext.getCulture}>Culture</p>
            <p onClick={HeritageContext.getDatas}>All</p>
            <Test />


        </div>
    )
}

export default SelectForm;
