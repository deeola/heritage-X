import React, {
  useState,
  useMemo,
  useContext,
  useEffect,
  forwardRef,
} from "react";
import countryList from "react-select-country-list";
import Select from "react-select";
import heritageContext from "../context/Heritage/heritageContext";
import { useHistory } from "react-router";

function SelectForm(props, ref) {
  //REACT HISTORY
  const history = useHistory();

  const HeritageContext = useContext(heritageContext);

  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  //ONCHANGE
  const [selection, setSelection] = useState("select");

  //onSubmit

  const [country, setCountry] = useState(false);
  const [select, setSelect] = useState(false);
  const [region, setRegion] = useState(false);
  const [category, setCategory] = useState(false);

  //SET STYLE

  const showCountry = () => {
    return country ? {} : { display: "none" };
  };

  const showSelect = () => {
    return select ? {} : { display: "none" };
  };

  const showRegion = () => {
    return region ? {} : { display: "none" };
  };

  const showCategory = () => {
    return category ? {} : { display: "none" };
  };

  const handleChange = (e) => {
    const newselection = e.target.value;
    setSelection(newselection);
  };

  useEffect(() => {
    if (selection === "Region") {
      setRegion(true);
      setCategory(false);
      setSelect(false);
      setCountry(false);
    } else if (selection === "Category") {
      setRegion(false);
      setCategory(true);
      setSelect(false);
      setCountry(false);
    } else if (selection === "Country") {
      setRegion(false);
      setCategory(false);
      setSelect(false);
      setCountry(true);
    } else {
      setRegion(false);
      setCategory(false);
      setSelect(true);
      setCountry(false);
    }
  }, [selection]);

  //SUBMIT FORM

  const handleSubmit = (e) => {
    if (selection === "Region") {
      HeritageContext.getRegion(e.target[2].value);
      history.push({
        pathname: "/regions",
      });
    } else if (selection === "Country") {
      HeritageContext.getCountry(value.label);
      history.push({
        pathname: "/countries",
      });
    } else if (selection === "Category") {
      HeritageContext.getCategory(e.target[4].value);
      history.push({
        pathname: "/categories",
      });
    }
    e.preventDefault();
  };

  return (
    <div className="formDiv" ref={ref} {...props}>
      <form onSubmit={handleSubmit}>
        <select className="mainSelect" onChange={handleChange}>
          <option value="select">Select</option>
          <option value="Country">Country</option>
          <option value="Region">Region</option>
          <option value="Category">Category</option>
        </select>
        <select className="subSelect" style={showSelect()}>
          <option>Choose</option>
        </select>
        <select className="subSelect" style={showRegion()}>
          <option>Africa</option>
          <option>Arab States</option>
          <option>Asia and the Pacific</option>
          <option>Europe and North America</option>
          <option>Latin America and the Caribbean</option>
        </select>
        <div className="subSelect" style={showCountry()}>
          <Select
            className="subSelectCountry"
            options={options}
            value={value}
            onChange={changeHandler}
          />
        </div>

        <select className="subSelect" style={showCategory()}>
          <option>Mixed</option>
          <option>Cultural</option>
          <option>Natural</option>
        </select>
        <button>search</button>
      </form>
    </div>
  );
}

export default forwardRef(SelectForm);
