const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if(height === '' || height <0 || isNaN(height)){
        results.innerHTML = `please enter a valid height ${height}`;
    }
    else if(weight === '' || weight <0 || isNaN(weight)){
        results.innerHTML = `please enter a valid Weight ${weight}`;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        if(bmi< 18.6){
            results.innerHTML = `<span>The person's BMI is = ${bmi} and they are underWeight</span>`
        }
        else if(bmi>18.6 && bmi< 24.9){
            results.innerHTML = `<span>The person's BMI is = ${bmi} and their bmi is in normal Range</span>`
        }
        else if(bmi>24.9){
            results.innerHTML = `<span>The person's BMI is = ${bmi} and their bmi is overWeight</span>`
        }
        
    }

});