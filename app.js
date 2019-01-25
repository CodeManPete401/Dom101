var titles = document.getelementsByClassName('title');

// console.log(Array.isArray(titles));
// Console.log(Array.isArray(Array.from(titles)));


Array.from(titles).forEach(function(item){
    console.log(item);
    
})