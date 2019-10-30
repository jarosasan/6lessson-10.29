const label = document.getElementById('sub-label');
const input = document.getElementById('field');
console.log(label)
console.log(input)
label.addEventListener("click", function () {
    label.classList.add("active");
    input.focus();
});
input.addEventListener("focusout",function () {
    label.classList.remove("active");
    input.value='';
});
