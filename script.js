const submit = document.querySelector ('button')
const result = document.querySelector('p')




const loveCalculator = ()=>{

    const randomNumber = function(){
        let loveScore = Math.floor(Math.random() * 100);
        return loveScore
    }
    
    const totalResult = randomNumber()
    
    if (totalResult < 20){
        result.textContent = (`${totalResult}% Your Love is like Oil and Water. Winter got to you` )
    }else if(totalResult  > 20 && totalResult < 40){
        result.textContent = (`${totalResult}% Your Love is at it's fall period Watch out for winter`)
    }else if (totalResult > 40 && totalResult < 60){
        result.textContent = (`${totalResult}% Your Love is at it's Blooming season "Summer smells nice". Nurture properly to avoid Winter `)
    }else if(totalResult > 60 && totalResult < 80){
        result.textContent = (`${totalResult}% Your Love is growing towards summer "Spring looks good" but summer is better...Keep working hard`)
    }else{
        result.textContent = (`${totalResult}% Your love is at its highest form "Spring does look good on You`)
    }

}



// submit.addEventListener('click', loveCalculator)
// submit.addEventListener('click', function(){
//     checkInput();
//     loveCalculator();
// })

submit.addEventListener('click', function(){

    const yourName = document.getElementById('yourName').value
    const yourPartnersName = document.getElementById('yourPartnersName').value
    console.log(yourName, yourPartnersName);
    
    if (yourName === '' && yourPartnersName === ""){
        alert("Input field cannot be empty")
        result.textContent = " "
    } else {
        loveCalculator();

    }
})
   




// console.log(randomNumber()