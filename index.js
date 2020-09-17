//document.getElementById("myForm").onsubmit = function () { myFunction(),  };

function myFunction() {
    x = document.getElementById('username').value;
    alert("Welcome," + ' ' + x + '.');
    location.href = 'Info.html';

    console.log('uh')
}

function logged() {
    location.href = 'logged.html';
}