import styles from "./CountryList.module.css";
import Spinner from "./Spinner.jsx";
import CountryItem from "./CountryItem.jsx";
import Message from "./Message.jsx";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message={"Add a new city by clicking on the Map"} />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { coutry: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => {
        return <CountryItem country={country} />;
      })}
    </ul>
  );
}

export default CountryList;
