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
  const homepageDataDiv = document.querySelector(".uspHomePageData");

  console.log(data);
  console.log(data[0]);
  const USPPitch = data[0].USPPitch;
  // console.log(USPPitch)

  const callToAction = []
  data.map((d,i)=>(
    // console.log(d.CallToAction ,i)
    callToAction[i] = d.CallToAction
  ))
  console.log(callToAction)

  homepageDataDiv.innerHTML= `
  <h1>
    ${USPPitch}
  </h1>
  <p>
  <ul>
`;
      for(i=0;i<callToAction.length;i++){
        homepageDataDiv.innerHTML+=`<li>${callToAction[i]}</li>`
      }
    homepageDataDiv.innerHTML+=`
    </ul>
    </p>
    `
    
}
