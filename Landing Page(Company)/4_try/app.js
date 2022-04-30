let USP_homepage =[];
const testDataInput = ()=>{

  // const url = "https://script.google.com/macros/s/AKfycbxnkKijEj4WRTZOyt29oWqTmMKzBlb25lRpT6SSQivfusALTRYfkIQKJOTbcmkfqoT00g/exec"
  const url = "https://script.google.com/macros/s/AKfycbyzZy8ZrhRdTx-yEQZNIvhZNW7pZcZAzFObQmShYQH9cTvPAFYfcS43jrQitkNjD7DfGQ/exec"
  fetch(url)
    .then(d=>d.json())
    .then(d=>{
        document.getElementById("dataInputFromClient").textContent = d[0].data;
        // console.log(d[0].data);
        USP_homepage = d[0].data;
        // console.log(USP_homepage)
        generateUSPHomePage(USP_homepage);
    })

}

// testDataInput();

// document.getElementById("btn").addEventListener("click",testDataInput);

const getDataBtn = document.getElementById("btn");
// console.log(getDataBtn)
getDataBtn.addEventListener("click",testDataInput);



const generateUSPHomePage =(data)=>{
  console.log(data);
}
