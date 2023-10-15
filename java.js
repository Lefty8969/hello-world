
function askName(){
    let userName=prompt('Hello! What is your name?');
            document.write('Hello, '+ userName +'.');
}

function wantTrucks(){
    let usrTrucks=prompt('Do you want a truck?');
            if (usrTrucks == 'yes'){
                document.write("Looks like you are buying a truck today.")
            } else if (usrTrucks == 'Yes'){
                document.write("Looks like you are buying a truck today.")
            } else if (usrTrucks == 'no') {
                usrTrucks=prompt('Do you have money for a truck?')
                if (usrTrucks == 'yes'){
                    document.write("you aint leaving with out buying a truck.")
                } else {
                    document.write(' you aint leaving with out buying a truck :). ')
                } 
            } else if (usrTrucks == 'No') {
                usrTrucks=prompt('Are you ram ford or chevy guy?')
                if (usrTrucks == 'yes'){
                    document.write("Excelent choice.")
                } else {
                    document.write(' sorry, youre here, you must buy :). ')
                } 
            } else {
                document.write(' looks like youre taking this truck :). ')
            }
 }

function moreTrucks(){
    let usrCount=prompt('do you have any trucks??');
            if(usrCount > 5){
                document.write('you could never have eough trucks :).')
            } else if(usrCount < 3){
                document.write('Lets get you this truck.')
            } else {
                document.write('Lets get you this truck.')
            }
}


function guessTrucks(){
    let userGame = prompt("I have so mnay trucks, wana guess how many?");
    while (userGame != 5){
        userGame = prompt('Nope! try again :)')
    }
    alert (" You need to catch up like me!.")
}


 function ourService(){
     let theAns = prompt('rate our service 0-5, what do you think?')
      if (theAns === '0'){
        document.write('Sounds great! <img class="Thank you for stopping by" src="https://preview.redd.it/r9chymovvhu21.jpg?auto=webp&s=74c152eb6b259be76c234b4fc7b058b757140823">')
     } else {
        for (let  i = 1; i <= theAns; i++) {
            document.write('<img class="kick rocks" src="https://media.tenor.com/Lj8F3WG4AsMAAAAC/angry-poker-face.gif">');
        }
    }
     
}
