import { getHumidityValue, getSunTime, getWindDirection } from '../helpers';
import { forecastType } from '../types';
import Sunrise from './Icons/Sunrise';
import Sunset from './Icons/Sunset';
import Tile from './Tile';

type Props = {
    data: forecastType;
};

const Degree = ({ temp }: { temp: number }): JSX.Element => {
    return (
        <span>
            {temp}
            <sup>o</sup>
        </span>
    );
};

const Forecast = ({ data }: Props): JSX.Element => {
    return (
        <div
            className="w-full md:max-w-[500px]
    py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-auto
    bg-white bg-opacity-20 backdrop-blur-ls
    rounded drop-shadow-lg"
        >
            <div className="mx-auto w-[300px]">
                <section className="text-center">
                    <h2 className="text-2xl from-black">
                        {data.name}
                        <span className="font-thin"></span>
                    </h2>
                    <h1 className="text-4xl font-extrabold">
                        <Degree temp={Math.round(data.main.temp)} />
                    </h1>
                    <p className="text-sm">
                        {data.weather[0].main} {data.weather[0].description}
                    </p>
                    <p className="text-sm">
                        H: <Degree temp={Math.ceil(data.main.temp_max)} /> L:{' '}
                        <Degree temp={Math.floor(data.main.temp_min)} />
                    </p>
                </section>

                <section className="flex overflow-x-scroll mt-4 pb-2 mb-5">
                    <div className="inline-block text-center w-[50px flex-shrink-0">
                        <p className="text-sm">
                            {new Date(data.dt * 1000).getHours()}
                        </p>
                        <img
                            alt={`weather-icon-${data.weather[0].description}`}
                            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        />
                        <p className="text-sm font-bold">
                            <Degree temp={Math.round(data.main.temp)} />
                        </p>
                    </div>
                </section>

                <section className="flex justify-between text-zinc-700">
                    <div
                        className="w-[140px] text-xs font-bold flex flex-col
                    items-center bg-white/20 backdrop-blur-lg
                    rounded drop-shadow-lg py-4 mb-5"
                    >
                        <Sunrise />
                        <span className="mt-2">
                            {getSunTime(data.sys.sunrise)}
                        </span>
                    </div>
                    <div
                        className="w-[140px] text-xs font-bold flex flex-col
                    items-center bg-white/20 backdrop-blur-lg
                    rounded drop-shadow-lg py-4 mb-5"
                    >
                        <Sunset />
                        <span className="mt-2">
                            {getSunTime(data.sys.sunset)}
                        </span>
                    </div>

                    <Tile
                        icon="wind"
                        title="Wind"
                        info={`${Math.round(data.wind.speed)} km/h`}
                        description={`${getWindDirection(
                            Math.round(data.wind.deg)
                        )}`}
                    />

                    <Tile
                        icon="feels"
                        title="Feels like"
                        info={
                            <Degree temp={Math.round(data.main.feels_like)} />
                        }
                        description={`Feels ${
                            Math.round(data.main.feels_like) <
                            Math.round(data.main.temp)
                                ? 'colder'
                                : 'warmer'
                        }`}
                    />

                    <Tile
                        icon="humidity"
                        title="Humidity"
                        info={`${Math.round(data.main.humidity)} %`}
                        description={getHumidityValue(data.main.humidity)}
                    />

                    <Tile
                        icon="pressure"
                        title="Pressure"
                        info={`${data.main.pressure} hPa`}
                        description={`${
                            Math.round(data.main.pressure) < 1013
                                ? 'Lower'
                                : 'Higher'
                        } than standard`}
                    />
                </section>
            </div>
        </div>
    );
};

export default Forecast;
