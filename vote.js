function vote() {
    var name= document.getElementById("name").value;
    var age= document.getElementById("age").value;
    var Answer= document.getElementById("Answer");
    if(age>=18){
        Answer.innerHtml=name + "is eligible to vote";
    }
    else{
        Answer.innerHtml=name + "is not eligible to vote";      
    }

}