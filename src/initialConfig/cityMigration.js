import async from 'async';
import citiesModel from '../models/City.js';
import CountryModel from '../models/others/Country.js';
import citiesList from './colombian-cities.json' assert { type: 'json' };
import countriesList from './countries.json' assert { type: 'json' };

async function CreateCities() {
    let existCities;

    try {
        existCities = await citiesModel.countDocuments({});
        console.log({ existCities });
    } catch (error) {
        console.log(error);
    }

    if (existCities) return

    async.each(
        citiesList,
        async (city) => {
            try {
                await citiesModel({ ...city, pais:'640cdbe8e5d075e0cd0800ec' }).save();
                return;
            } catch (error) {
                console.log(error);
                return null;
            }
        },
        (err, response) => {
            if (err) throw new Error(err);
            console.log(response, 'Ciudades creadas ✅');
        }
    )
}

async function CreateCountries() {
    let existCountries;

    try {
        existCountries = await CountryModel.countDocuments({});
    } catch (error) {
        console.error(error);
    }

    if (existCountries) return;

    async.each(
        countriesList,
        async (country) => {
            try {
                await CountryModel({ ...country }).save();
                return;
            } catch (error) {
                console.error(error);
                return null;
            }
        },
        (err, response) => {
            if (err) throw new Error(err);

            console.log(response, 'Paises creados ✅');
        }
    );
}

export { CreateCities, CreateCountries };
