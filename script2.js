
var form = document.createElement('form');
var label1 = label('label','First Name:');
label1.setAttribute('for','firstname');

var br1 = document.createElement('br');

var input1 = document.createElement('input');
input1.setAttribute('type','text');
input1.setAttribute('id','firstname');

form.append(label1,br1,input1);

var br2 = document.createElement('br');

var label2 = label('label','Last Name:');
label2.setAttribute('for','lastname');

var br3 = document.createElement('br');

var input2 = document.createElement('input');
input2.setAttribute('type','text');
input2.setAttribute('id','lastname');

form.append(br2,label2,br3,input2);

var br4 = document.createElement('br');

var label3 = label('label','Address Line 1:');
label3.setAttribute('for','address1');

var br5 = document.createElement('br');

var input3 = document.createElement('input');
input3.setAttribute('type','text');
input3.setAttribute('id','address1');

form.append(br4,label3,br5,input3);

var br5 = document.createElement('br');

var label4 = label('label','Address Line 2:');
label4.setAttribute('for','address2');

var br6 = document.createElement('br');

var input4 = document.createElement('input');
input4.setAttribute('type','text');
input4.setAttribute('id','address2');

form.append(br5,label4,br6,input4);

var br7 = document.createElement('br');

var label5 = label('label','PIN:');
label5.setAttribute('for','pin');

var br8 = document.createElement('br');

var input5 = document.createElement('input');
input5.setAttribute('type','number');
input5.setAttribute('id','pin');

form.append(br7,label5,br8,input5);

var br9 = document.createElement('br');

var label6 = label('label','Gender:');
label6.setAttribute('for','gender');

var br10 = document.createElement('br');

var input6 = document.createElement('input');
input6.setAttribute('type','radio');
input6.setAttribute('name','gender');
input6.setAttribute('value','male');
var label7 = label('label','Male');
input6.setAttribute('id','male');

var input7 = document.createElement('input');
input7.setAttribute('type','radio');
input7.setAttribute('name','gender');
input7.setAttribute('value','female');
var label8 = label('label','Female');
input7.setAttribute('id','female');

form.append(br9,label6,br10,input6,label7,input7,label8);

var br11 = document.createElement('br');

var label9 = label('label','Choice of food:<i>(must choose at least 2 out of 5 options)</i>');
label9.setAttribute('for','food');

var br12 = document.createElement('br');

var input8 = document.createElement('input');
input8.setAttribute('type','checkbox');
input8.setAttribute('class','checkbox');
input8.setAttribute('value','North Indian');
var label10 = label('label','North Indian');

var br13 = document.createElement('br');

var input9 = document.createElement('input');
input9.setAttribute('type','checkbox');
input9.setAttribute('class','checkbox');
input9.setAttribute('value','South Indian');
var label11 = label('label','South Indian');

var br14 = document.createElement('br');

var input10 = document.createElement('input');
input10.setAttribute('type','checkbox');
input10.setAttribute('class','checkbox');
input10.setAttribute('value','Chinese');
var label12 = label('label','Chinese');

var br15 = document.createElement('br');

var input11 = document.createElement('input');
input11.setAttribute('type','checkbox');
input11.setAttribute('class','checkbox');
input11.setAttribute('value','Japanese');
var label13 = label('label','Japanese');

var br16 = document.createElement('br');

var input12 = document.createElement('input');
input12.setAttribute('type','checkbox');
input12.setAttribute('class','checkbox');
input12.setAttribute('value','Sea Food');
var label14 = label('label','Sea Food');

var br17 = document.createElement('br');


form.append(br11,label9,br12,input8,label10,br13,input9,label11,br14,input10,label12,br15);
form.append(input11,label13,br16,input12,label14,br17);

var br18 = document.createElement('br');

var label15 = label('label','State:');
label15.setAttribute('for','state');

var br19 = document.createElement('br');

var input13 = document.createElement('input');
input13.setAttribute('type','text');
input13.setAttribute('id','state');

form.append(br18,label15,br19,input13);

var br20 = document.createElement('br');

var label16 = label('label','Country:');
label16.setAttribute('for','country');

var br21 = document.createElement('br');

var input14 = document.createElement('input');
input14.setAttribute('type','text');
input14.setAttribute('id','country');

var br22 = document.createElement('br');
var br23 = document.createElement('br');
var br24 = document.createElement('br');

form.append(br20,label16,br21,input14,br22,br23,br24);

// var button = document.createElement('button');
// button.innerHTML = "submit";
// button.setAttribute('type','submit');
// button.addEventListener("click",ans);
// form.append(button);


// table

var data = document.createElement('div');
data.innerHTML = "<h2>Temporary Database</h2>";

var table = document.createElement('table');
table.setAttribute('class','table');

var thead = document.createElement('thead');
thead.setAttribute('class','thead-dark');

var tr = document.createElement('tr');
var th1 = label('th','First Name');
var th2 = label('th','Last Name');
var th3 = label('th','Address');
var th4 = label('th','Pincode');
var th5 = label('th','Gender');
var th6 = label('th','Food');
var th7 = label('th','State');
var th8 = label('th','Country');

tr.append(th1,th2,th3,th4,th5,th6,th7,th8);
thead.append(tr);
table.append(thead);

document.body.append(form);
document.body.append(data,table);


function ans() {
    var res1 = document.getElementById('firstname').value;
    console.log(res1);

    var res2 = document.getElementById('lastname').value;
    console.log(res2);

    var res3 = document.getElementById('address1').value;
    console.log(res3);

    var res4 = document.getElementById('address2').value;
    console.log(res4);

    var res5 = document.getElementById('pin').value;
    console.log(res5);

    var res8 = document.getElementById('state').value;
    console.log(res8);

    var res9 = document.getElementById('country').value;
    console.log(res9);

    let checkboxValues = [];
    let checkboxes = document.getElementsByClassName('checkbox');
    for (let i=0; i<checkboxes.length; i++) {
        checkboxes[i].checked == true && checkboxValues.push(checkboxes[i].value);
    }
    console.log(checkboxValues);

    const radioButtonValue = document.querySelector(`input[type="radio"][name=gender]:checked`).value;

    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');
    var td1 = label('td',res1);
    var td2 = label('td',res2);
    var td3 = label('td',res3+ " " +res4);
    var td4 = label('td',res5);
    var td5 = label('td',radioButtonValue);
    var td6 = label('td',checkboxValues.join(','));
    var td7 = label('td',res8);
    var td8 = label('td',res9);
    

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    tbody.append(tr);
    table.append(tbody);

}

function label (element,value) {
    var elename = document.createElement(element);
    elename.innerHTML = value;
    return elename;
}