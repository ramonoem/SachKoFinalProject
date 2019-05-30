export function pushToArray (docs){
    arrayData = [];
    docs.forEach(d => {
    const all = d.data()
        arrayData.push({
            ...all
        })
    })
    return(arrayData);
}
