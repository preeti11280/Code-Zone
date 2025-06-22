let editor = document.querySelector("#editor")
ace.edit(editor ,{
    theme:"ace/theme/coblat",
    mode:'ace/mode/javascript'
});

let textarea = document.getElementById('myTextarea');
console.log(textarea); // This will output the entire HTML element, something like: <textarea id="myTextarea"></textarea>
