const i18next = require('i18next');

i18next.init({
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                key: '{{what}} is {{-how}}',
                look: {
                    deeper: 'some deep key',
                },
                error: {
                    404: 'Not found!',
                    unknown: 'Some strange thing happend',
                },
                cake_one: 'cake',
                cake_two: 'two cakes',
                cake_many: 'many cakes',
                cake_few: 'few cakes',
                cake_other: '{{count, number(minimumFractionDigits: 6)}} cakes',
                cake_zero: 'no cake {{where, uppercase}}',
                dessert_cake_one: 'I like to eat a cake',
                dessert_cake_other: 'I like to eat {{count}} cakes',
                dessert_muffin_one: 'I realy like a muffin',
                dessert_muffin_other: 'I have {{count}} muffins',
                dessert_one: 'I like just one dessert',
                dessert_other: 'I like all desserts',
            },
            common: {
                save: 'Save',
                cancel: 'Cancel',
            },
        },
        de: {
            translation: {
                key: 'hallo welt',
                error: {
                    404: 'Not f!',
                    unknown: 'Some strange thing h',
                },
            },
            common: {
                save: 'Speichern',
                cancel: 'Abbrechen',
            },
        },
        'de-CH': {
            translation: {
                key: 'hoi walt',
            },
        },
    },
});

i18next.services.formatter.add('uppercase', (value, lng, options) => {
    return value.toUpperCase();
});

const ret = i18next.t('dessert', { context: 'muffin', count: 2 });

console.log(ret);
