gotodashboard=(id)=>{
document.getElementById(id).classList.remove('hidden');
document.getElementById('issue-books-content').classList.add('hidden');
document.getElementById('add-books-content').classList.add('hidden');

}

gotoaddbooks=(id)=>{
    document.getElementById(id).classList.remove('hidden');
    document.getElementById('dashboard-content').classList.add('hidden');
    document.getElementById('issue-books-content').classList.add('hidden');


}

gotoissuebooks=(id)=>{
    document.getElementById(id).classList.remove('hidden');
    document.getElementById('dashboard-content').classList.add('hidden');
    document.getElementById('add-books-content').classList.add('hidden');
}