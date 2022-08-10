// Your code here
let emptyArray = []
// /*function createEmployeeRecord(array){
//     const obj = {}
//     obj['firstName'] = array[0] 
//     obj['familyName'] = array[1] 
//     obj['title'] = array[2] 
//     obj['payPerHour'] = array[3] 
//     obj['timeInEvents'] = []
//     obj['timeOutEvents'] = []
//     return obj
// }*/
let exampleEmployee = {firstName: "Peter", familyName:"Baskakov", title: "Mr", payPerHour:"27",timeInEvents:[{type: "TimeIn", date:"2022-08-04", hour: "0900"},{type: "TimeIn", date:"2022-08-04", hour: "0900"}],timeOutEvents:[{type: "TimeOut", date:"2022-08-04", hour: "2100"},{type: "TimeOut", date:"2022-08-04", hour: "1100"}]}
let employeeArray = [exampleEmployee, {firstName: "Peter", familyName:"Baskakov", title: "Mr", payPerHour:"27",timeInEvents:[{type: "TimeIn", date:"2022-08-04", hour: "0900"},{type: "TimeIn", date:"2022-08-04", hour: "0900"}],timeOutEvents:[{type: "TimeOut", date:"2022-08-04", hour: "2100"},{type: "TimeOut", date:"2022-08-04", hour: "1100"}]}]
const createEmployeeRecord = (array)=>{
    const obj = {}
    obj['firstName'] = array[0] 
    obj['familyName'] = array[1] 
    obj['title'] = array[2] 
    obj['payPerHour'] = array[3] 
    obj['timeInEvents'] = []
    obj['timeOutEvents'] = []
    return obj
}

function createEmployeeRecords(array){
    return array.map((employee)=>createEmployeeRecord(employee))
}
function hoursWorkedOnDate(array){
    let worked
    console.log(array.timeInEvents)
    console.log(array.timeOutEvents)
    for(let i = 0; i < array.timeInEvents.length; i++){
        if(array.timeInEvents[i].date)
        console.log(array.timeInEvents[i].date)
        console.log(array.timeOutEvents[i].date)
        if(array.timeInEvents[i].date == array.timeOutEvents[i].date){
            return  worked = (array.timeOutEvents[i].hour/100 - array.timeInEvents[i].hour/100)
        }
    }

}
function createTimeInEvent(array, timeRecord){
    let splitTimeRecord = timeRecord.split(" ")
    let hours = parseFloat(splitTimeRecord[1])
    array.timeInEvents = [{type: "TimeIn", date: splitTimeRecord[0], hour: hours}]
    return array
}

function createTimeOutEvent(array, timeRecord){
    let splitTimeRecord = timeRecord.split(" ")
    let hours = parseFloat(splitTimeRecord[1])
    array.timeOutEvents = [{type: "TimeOut", date: splitTimeRecord[0], hour: hours}]
    return array 
}
function calculatePayroll(array){
    let timeRanges = []
    for(let eventIn of array.timeInEvents){
        for(let eventOut of array.timeOutEvents){
            console.log(eventOut)
            let timeRange = eventOut.hour - eventIn.hour
            timeRanges = [...timeRanges, timeRange/100]
            console.log(timeRanges)
        }
    }
    let timeRangesSum = timeRanges.reduce((previousValue, currentValue)=> previousValue+currentValue)
    let totalOwed = timeRangesSum * array.payPerHour
    console.log(timeRangesSum)
    return(totalOwed)
}

function wagesEarnedOnDate(array){
    return hoursWorkedOnDate(array) * array.payPerHour
}


function allWagesFor(array){
    let total = 0
    console.log(array)
    let timeRanges = []
    for(let i = 0; i < array.timeInEvents.length; i++){
        if(array.timeInEvents[i].date == array.timeOutEvents[i].date){
            timeRanges = [...timeRanges, (array.timeOutEvents[i].hour/100 - array.timeInEvents[i].hour/100)]
        }
    }
    console.log(timeRanges)
    const totalTimeRanges = timeRanges.reduce((x,y)=>x+y)
    console.log(totalTimeRanges)
    let totalOwed = totalTimeRanges * array.payPerHour
    console.log(totalOwed)
    total = total + totalOwed
    console.log(total)
    return(total)
}

function calculatePayroll(array){
    array.map((employee)=>{
        allWagesFor(employee)
    })
    return parseInt(total)
}