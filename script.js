function convertLength() {
    const fromValue = parseFloat(document.getElementById('from').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    const conversionTable = {
        mm: {
            cm: 0.1,
            dm: 0.01,
            m: 0.001,
            ft: 0.00328084,
            in: 0.0393701,
            km: 0.000001,
        },
        cm: {
            mm: 10,
            dm: 0.1,
            m: 0.01,
            ft: 0.0328084,
            in: 0.393701,
            km: 0.00001,
        },
        dm: {
            mm: 100,
            cm: 10,
            m: 0.1,
            ft: 0.328084,
            in: 3.93701,
            km: 0.0001,
        },
        m: {
            mm: 1000,
            cm: 100,
            dm: 10,
            ft: 3.28084,
            in: 39.3701,
            km: 0.001,
        },
        ft: {
            mm: 304.8,
            cm: 30.48,
            dm: 3.048,
            m: 0.3048,
            in: 12,
            km: 0.0003048,
        },
        in: {
            mm: 25.4,
            cm: 2.54,
            dm: 0.254,
            m: 0.0254,
            ft: 0.0833333,
            km: 0.0000254,
        },
        km: {
            mm: 1000000,
            cm: 100000,
            dm: 10000,
            m: 1000,
            ft: 3280.84,
            in: 39370.1,
        },
    };

    const convertedValue = fromValue * conversionTable[fromUnit][toUnit];
    document.getElementById('to').value = convertedValue;
}
