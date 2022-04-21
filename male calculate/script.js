let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const waistline = parseInt(document.getElementById('waistline').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let waistline_status=false, weight_status=false;

    if(waistline === '' || isNaN(waistline) || (waistline <= 0)){
        document.getElementById('waistline_error').innerHTML = 'Please provide a valid waistline';
    }else{
        document.getElementById('waistline_error').innerHTML = '';
        waistline_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(waistline_status && weight_status){
        const BodyFat = (((weight*2.20462262)-((weight*2.20462262*1.082+94.42)-(waistline*4.15)))*100/(weight*2.20462262)).toFixed(2);

        if(BodyFat >= 2 && BodyFat < 6){
            result.innerHTML = 'Essential fat : ' + BodyFat;
        }else if(BodyFat >= 6 && BodyFat < 14){
            result.innerHTML = 'Athletes : ' + BodyFat;
        }else if(BodyFat >= 14 && BodyFat <18){
            result.innerHTML = 'Fitness : ' + BodyFat;
        }else if(BodyFat >= 18 && BodyFat < 26){
            result.innerHTML = 'Acceptable : ' + BodyFat;
        }else{
            result.innerHTML = 'Obese : ' + BodyFat;
        }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});
