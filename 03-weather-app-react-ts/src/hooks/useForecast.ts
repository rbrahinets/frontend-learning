import { ChangeEvent, useEffect, useState } from 'react';
import { optionType, forecastType } from '../types';

const useForecast = () => {
    const [term, setTerm] = useState<string>('');
    const [options, setOptions] = useState<[]>([]);
    const [city, setCity] = useState<optionType | null>(null);
    const [forecast, setForecast] = useState<forecastType | null>(null);

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();

        setTerm(value);

        if (!value) {
            return;
        }

        getSearchOptions(value);
    };

    const getSearchOptions = (value: string) => {
        fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
                process.env.REACT_APP_API_KEY
            }`
        )
            .then((res) => res.json())
            .then((data) => setOptions(data))
            .catch((error) => console.error(error));
    };

    const getForecast = (city: optionType) => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                setForecast(data);
            })
            .catch((error) => console.error(error));
    };

    const onSubmit = () => {
        if (!city) {
            return;
        }

        getForecast(city);
    };

    const onOptionSelect = (option: optionType) => {
        setCity(option);
    };

    useEffect(() => {
        if (city) {
            setTerm(city.name);
            setOptions([]);
        }
    }, [city]);

    return {
        term,
        options,
        forecast,
        onInputChange,
        onOptionSelect,
        onSubmit,
    };
};

export default useForecast;
