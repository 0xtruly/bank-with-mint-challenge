export const getRandomDateArray = numItems => {
    // Create random array of objects (with date)
    let data = [];
    let baseTime = new Date().getTime();
    console.log(baseTime);
    let dayMs = 24 * 60 * 60 * 1000;
    for (var i = 0; i < numItems; i++) {
        data.push({
            time: new Date(baseTime + i * dayMs),
            value: Math.round(20 + 80 * Math.random())
        });
    }
    return data;
};

export const getData = () => {
    let data = [];
    data.push({
        title: 'Daily Transaction Volume',
        data: getRandomDateArray(4)
    });
    data.push({
        title: 'Daily Transaction Value',
        data: getRandomDateArray(50)
    });
    data.push({
        title: 'Total Transaction Volume',
        data: getRandomDateArray(5)
    });
    data.push({
        title: 'Total Transaction Value',
        data: getRandomDateArray(5)
    });
    return data;
};