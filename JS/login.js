function userlogin(formId){
    document.getElementById(formId).classList.remove('hidden');
    document.getElementById('buttonform').classList.add('hidden');
}

function adminlogin(formId){
    document.getElementById(formId).classList.remove('hidden');
    document.getElementById('buttonform').classList.add('hidden');
}

function usersignup(formID)
{
    document.getElementById(formID).classList.remove('hidden');
    document.getElementById('userloginform').classList.add('hidden');
}
function librariansignup(formID)
{
    document.getElementById(formID).classList.remove('hidden');
    document.getElementById('adminloginform').classList.add('hidden');
}

function gotoform(formID){
    if(formID === 'buttonform'){
    document.getElementById(formID).classList.remove('hidden');
    document.getElementById('userloginform').classList.add('hidden');
    }
    else{
        document.getElementById(formID).classList.add('hidden');
        document.getElementById('buttonform').classList.remove('hidden');
    }
}

function gotoUlogin(formID){
    document.getElementById(formID).classList.remove('hidden');
    document.getElementById('Usignup').classList.add('hidden');
}

function gotoAlogin(formID){
    document.getElementById(formID).classList.remove('hidden');
    document.getElementById('Lsignup').classList.add('hidden');
}