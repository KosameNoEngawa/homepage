document.getElementById("button").onclick =
function performSignUp() {
    var id = document.getElementById("id").value;
    var pass = document.getElementById("password").value;

    if(id == 'KosameNoEngawa') {
        if(pass == 'parapara') {
            location.href = "file:///Users/yanakashun/homepage/succes.html"
        }
        else {
            alert('パスワードが違います')
        }
    }
    else {
        alert('IDが違います')
    }

};