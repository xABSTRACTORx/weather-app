export const CreateTime = () => {
    const time = new Date()
    const monthsList = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const dayList = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let dayNumber = time.getDate();
    let month = monthsList[time.getMonth()]
    let day = dayList[time.getDay()]
    return(
      `${day} ${dayNumber} ${month}`
    )
  }
  

  export const transformTime = (sec) => {
    var date = new Date(sec * 1000);
    var timestr = date.toLocaleTimeString();
    return timestr
  }
  
  export const changeUnit = (unit) => {
    return Math.round(unit * 3.6)
  } 
  
  export const getTime = (time) => {
    let timeList = time.split(" ")
    let newTimeList = timeList[1].split(":")
  
    return(`${newTimeList[0]}:${newTimeList[1]}`)
  } 

  export const getDay = (time) => {
    let timeList = time.split(" ")
    let day = timeList[0].split("-")
    let newDay = day[1] + "/" + day[2]

    let days =  ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let d = new Date(newDay);

    return days[d.getDay()];
  }
  export const getOnlyDay = (time) => {
    let timeList = time.split(" ")
    let day = timeList[0].split("-")

    return day[2]
  }

  export const frequentElement = arr => {
    let frequency = {};
    let maxEl = arr[0], maxCount = 1;

    arr.forEach(el => {
        frequency[el] = frequency[el] ? frequency[el] + 1 : 1;
        if(frequency[el] > maxCount) {
            maxEl = el;
            maxCount = frequency[el];
        }
    });
    return maxEl;
}

export const averageElement = (arr) => {
  let summ = 0;
  arr.forEach(elem => {
    summ = summ + elem
  })
  return summ/arr.length
}
