// for loop is needed in order to go by every li one by one and giving them all an eventListener. 


// function strikethrough(passMe){
//     if(passMe.style.textDecoration === ""){
//         passMe.style.textDecoration = "line-through"
//     } else {
//         passMe.style.textDecoration = ""
//     }
// }

let crossout = document.querySelectorAll('#crossout-ol li');

for (let i = 0; i < crossout.length; i++) {
    crossout[i].addEventListener('click', function () {
        console.log(crossout[i]);
        //console.log(event.target);

        // strikethrough(crossout[i]); 
        if (crossout[i].style.textDecoration === "") {
            crossout[i].style.textDecoration = "line-through"
        } else {
            crossout[i].style.textDecoration = ""
        }

    })
}


let faded = document.querySelectorAll('#faded-ul li');

for (let i = 0; i < faded.length; i++) {
    faded[i].addEventListener('click', function () {
        console.log(faded[i]);

        if (faded[i].style.opacity === '') {
            faded[i].style.opacity = '0.2'
        } else {
            faded[i].style.opacity = ''
        }
    })
}

let row = document.querySelectorAll('#row img');

for (let i = 0; i < row.length; i++) {
    row[i].addEventListener('click', function () {
        console.log(row[i]);

        row[i].style.width = '0px';
    })
}


/*****************

    METEOR ME BUTTON
    
******************/





let meteor = document.querySelector('#destroy-all');

meteor.addEventListener('click', function () {

    // crossout ol
    for (let i = 0; i < crossout.length; i++) {
        console.log(crossout[i]);
        crossout[i].style.textDecoration = "line-through";
    }
    // faded ul
    for (let i = 0; i < faded.length; i++) {
        console.log(faded[i]);
        faded[i].style.opacity = '0'
    }


    // row
    for (let i = 0; i < row.length; i++) {
        console.log(row[i]);
        row[i].style.width = '0px';

    }


})