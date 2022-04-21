let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const weight = parseInt(document.getElementById('weight').value);
    const wrist = parseInt(document.getElementById('wrist').value);
    const brachium = parseInt(document.getElementById('brachium').value);
    const waistline = parseInt(document.getElementById('waistline').value);
    const hip = parseInt(document.getElementById('hip').value);
    const result = document.getElementById('output');
    let weight_status=false, wrist_status=false, brachium_status=false, waistline_status=false, hip_status=false;

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(wrist === '' || isNaN(wrist) || (wrist <= 0)){
        document.getElementById('wrist_error').innerHTML = 'Please provide a valid wrist';
    }else{
        document.getElementById('wrist_error').innerHTML = '';
        รอบข้อมือ_status=true;
    }

    if(brachium === '' || isNaN(brachium) || (brachium <= 0)){
        document.getElementById('brachium_error').innerHTML = 'Please provide a valid brachium';
    }else{
        document.getElementById('brachium_error').innerHTML = '';
        brachium_status=true;
    }

    if(waistline === '' || isNaN(waistline) || (waistline <= 0)){
        document.getElementById('waistline_error').innerHTML = 'Please provide a valid waistline';
    }else{
        document.getElementById('waistline_error').innerHTML = '';
        waistline_status=true;
    }

    if(hip === '' || isNaN(hip) || (hip <= 0)){
        document.getElementById('hip_error').innerHTML = 'Please provide a valid hip';
    }else{
        document.getElementById('hip_error').innerHTML = '';
        hip_status=true;
    }

    if(weight_status && waistline_status)
    {
        const BodyFat = (((weight* 2.20462262) - ((weight * 2.20462262*0.732+8.987)+(wrist/3.14)-(waistline*0.157)-(hip*0.249)+(brachium*0.434))) * 100 / (weight* 2.20462262)).toFixed(5);

        if(BodyFat >= 10 && BodyFat < 14){
            result.innerHTML = 'Essential fat : ' + BodyFat;
        }else if(BodyFat >= 14 && BodyFat < 21){
            result.innerHTML = 'Athletes : ' + BodyFat;
        }else if(BodyFat >= 21 && BodyFat <25){
            result.innerHTML = 'Fitness : ' + BodyFat;
        }else if(BodyFat >= 25 && BodyFat < 32){
            result.innerHTML = 'Acceptable : ' + BodyFat;
        }else{
            result.innerHTML = 'Obese : ' + BodyFat;
        }
    }else{
        alert('The form has errors');
        result.innerHTML = '';
    }
});