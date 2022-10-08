
function superbowlWin(records){
    // for(const record of records){
    // console.log('record', record)
    //     if(record.result === "W"){
    //     return record.year   
    // }
    // }
    const found = records.find(function(record){
        console.log('record', record)
        return record.result === "W"
    });
    if (found){
        return found.year
    }
    console.log('found', found)
    //[record].find(superbowlWin).year;
}
