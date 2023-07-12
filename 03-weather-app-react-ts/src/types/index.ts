export type optionType = {
    name: string;
    country: string;
    lat: number;
    lon: number;
};

export type forecastType = {
    name: string;
    dt: number;
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_min: number;
        temp_max: number;
    };
    weather: [
        {
            main: string;
            description: string;
            icon: string;
        }
    ];
    wind: {
        speed: number;
        deg: number;
    };
    clouds: {
        all: number;
    };
    visibility: number;
};
