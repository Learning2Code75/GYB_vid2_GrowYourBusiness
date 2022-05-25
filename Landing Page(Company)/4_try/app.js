let USP_homepage =[];
const testDataInput = ()=>{

  // const url = "https://script.google.com/macros/s/AKfycbxnkKijEj4WRTZOyt29oWqTmMKzBlb25lRpT6SSQivfusALTRYfkIQKJOTbcmkfqoT00g/exec"
  // const url = "https://script.google.com/macros/s/AKfycbyzZy8ZrhRdTx-yEQZNIvhZNW7pZcZAzFObQmShYQH9cTvPAFYfcS43jrQitkNjD7DfGQ/exec"
  // const url = "https://script.google.com/macros/s/AKfycbzAMObkKfmBYMdUHMTM4FKJRntbPBxLweLdyZKvX2Ut3vhqrzeiqyVvBQlROiZyxXVilQ/exec"
  const url = "https://script.google.com/macros/s/AKfycbzNF4DJVb_gBvo8-SEi8bOYNy1-EBa2YvG8DuYECtPD6ImfkWwNYCNzPtbaRceraIaoSA/exec"
  fetch(url)
    .then(d=>d.json())
    .then(d=>{
        // document.getElementById("dataInputFromClient").textContent = d[0].data;
        console.log(d)
        // console.log(d[0].data);
        USP_homepage = d[0].data;
        // console.log(USP_homepage)
        generateUSPHomePage(USP_homepage);

        projectPage = d[0].projectPage;
        generateProjectPage(projectPage);

        aboutPage = d[0].aboutPage;
        generateAboutPage(aboutPage);
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
  const howToUseVideoLink = data[0].howToUseVideoLink;
  const pitcherPageLink = data[0].PitcherPageLink;
  const googleFormLink = data[0].googleFormLink;

  const email = data[0].email;
  const github = data[0].GithubLink;
  const youtube = data[0].YoutubeLink;


  // console.log(USPPitch)

  const callToAction = []
  data.map((d,i)=>(
    // console.log(d.CallToAction ,i)
    callToAction[i] = d.CallToAction
  ))
  console.log(callToAction)

  homepageDataDivIHTML= `
  <h1 class="headerUtil">
    ${USPPitch}
  </h1>

`;
    homepageDataDivIHTML +='  <div class="grid1">';
      for(i=0;i<callToAction.length;i++){

        if(callToAction[i]!==""){
          homepageDataDivIHTML+=`<div class="grid1-item">${callToAction[i]}</div>`
        }
      }
      homepageDataDivIHTML+=`
    </div>
    `

    homepageDataDivIHTML+=`
    <div>
      <iframe width="auto" height="auto" src="${howToUseVideoLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    `;

    homepageDataDivIHTML+=`
    <div class="pitcherPage">
      <a target="__blank" class="pitcherPageLink" href="${pitcherPageLink}">
        Pitcher Page for Grow Your Business
      </a>
    </div>
    `
    homepageDataDivIHTML+=`
    <div class="googleForm">
      <a target="__blank" class="googleFormLink" href="${googleFormLink}">
        Click on the google form to build your landing page with us.
      </a>
    </div>
    `

    homepageDataDivIHTML+=`
    <div class="email">
      <a target="__blank" class="emailLink" href="${email}">
      email icon
      </a>
    </div>
    `

    homepageDataDivIHTML+=`
    <div class="yt">
      <a target="__blank" class="ytLink" href="${youtube}">
      youtube icon
      </a>
    </div>
    `

    homepageDataDivIHTML+=`
    <div class="github">
      <a target="__blank" class="githubLink" href="${github}">
      github icon
      </a>
    </div>
    `






    homepageDataDiv.innerHTML=homepageDataDivIHTML;
}

const generateProjectPage = (data)=>{
  console.log(data)
  const projectPageDataDiv = document.querySelector(".projectPage");

  let projectPageDivIHTML = ``
  projectPageDivIHTML += `
    <div class="grid-2">
  `

  for(let i=0; i<data.length;i++){
    projectPageDivIHTML += `
      <h2>${data[i].projectName}</h2>
      <img width="250" height="250" src="${data[i].imgUrl}" />
      <h3>${data[i].purpose}</h3>
      <p>
        ${data[i].achievement}
      </p>
      <div class="links">
        <a target="__blank" href="${data[i].projectGithub}">Github</a>
        <a target="__blank" href="${data[i].projectLiveLink}">Live</a>
        <a target="__blank" href="${data[i].projectPitcherPage}">PitcherPage</a>
      </div>

      <div class="tech">
        <p>${data[i].projectTech}</p>
      </div>

    `
  }

  projectPageDivIHTML+=`
    </div>
  `
  projectPageDataDiv.innerHTML = projectPageDivIHTML;

}



const generateAboutPage=(data)=>{
  console.log(data)
  const aboutPageDataDiv = document.querySelector(".aboutPage");

  let aboutPageDivIHTML = ``
  aboutPageDivIHTML += `
    <div class="grid-2">
  `

  for(let i=0; i<data.length;i++){
    aboutPageDivIHTML += `
      <h2>${data[i].name}</h2>
      <img src="${data[i].imgUrl}" />
      <div><p>${data[i].about}</p></div>
      <div class="links">
        <a target="__blank" href="${data[i].instagram}">Instagram</a>
        <a target="__blank" href="${data[i].linkedin}">LinkedIn</a>
        <a target="__blank" href="${data[i].github}">GitHub</a>
      </div>


    `
  }

  aboutPageDivIHTML+=`
    </div>
  `
  aboutPageDataDiv.innerHTML = aboutPageDivIHTML;

}
