function HandlePassword(id,idClass) {
    var x = document.getElementById(id);
    var y = document.getElementById(idClass);
    if (x.type === "password") {
        x.type = "text";
        y.classList.add("eye-class-open")
    } else {
        x.type = "password";
        y.classList.remove("eye-class-open")
    }
}
