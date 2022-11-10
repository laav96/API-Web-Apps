function fetchActivity(){
    container.classList.replace('invisible', 'visible')
    header.classList.replace('visible', 'invisible')
    button.style.top = '75%'
    button.style.transform = 'translate(-50%, -50%) scale 1.4'
    fetch("http://www.boredapi.com/api/activity/")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.link){
            activity.innerHTML = `<span class='poppins'>Activity:</span><a href= ${data.link}><span class='poppins bold animation'>${data.activity}</span>(Learn More)</a>`
        }
        else
        activity.innerHTML = `<span class='poppins'>Activity:</span><span class='poppins'>${data.activity}</span>`


        type.innerHTML = `<span class='poppins'>Activity:</span><span class='poppins'>${data.type}</span>`


        participants.innerHTML = `<span class='poppins'>Activity:</span><span class='poppins'>${data.participants}</span>`


        accesibility.innerHTML = `<span class='poppins'>Activity:</span><span class='poppins'>${data.accesibiltiy}</span>`
    })

}

button.addEventListener('click', fetchActivity)



// const typeButton = document.getElementById('type-button')
// typeButton.addEventListener('click', typeButtonClicked)


// function typeButtonClicked(){
// fetch("http://www.boredapi.com/api/activity")
//     .then(res => {
//         return res.json()) // parse response as JSON
//     }
//     .then(data => {
//       data.forEach(activity => {
//           const markup = `<div>${activity.name}</div>`

//           document.querySelector('div').insertAdjacentHTML()
//       })
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });

// // function displayActivity(data) {
// //     // const activity = data.activity;
// //     const activityDiv = document.getElementById("activity");
// //     activities.forEach(activity => {
// //         const activityElement = document.createElement("h1");
// //         heading.innerHTML = activityName;
// //         activityDiv.appendChild(heading);
// //         // activityElement.innerHTML = `Activity Name: ${activity.name}`;
// //         // activityDiv.appendChild(activityElement);
// //     })
// //     // const activityName = activity.activity;
// //     // const heading = document.createElement("h1");
// //     // heading.innerHTML = activityName;
// //     // activityDiv.appendChild(heading);
// //   }   

 
 
