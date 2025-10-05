const speed_hight = document.getElementById('speed_hight')
const reset_btn = document.getElementById('reset_btn')
const speed_lower = document.getElementById('speed_lower')


speed_hight.addEventListener('click', function(){
    counter.style.color = "#CD5C5C"
    document.body.style.backgroundColor = "#90EE90"
})
speed_lower.addEventListener('click', function(){
    counter.style.color = "#90EE90"
    document.body.style.backgroundColor = "#CD5C5C"
})
reset_btn.addEventListener('click', function() {
    counter.style.color = "black"; 
    document.body.style.backgroundColor = "gray"; 
});