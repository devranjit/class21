let inputOne = document. getElementById("inputOne");
let inputTwo = document. getElementById("inputTwo");

let heading = document. getElementById("heading")

let result = document. getElementById("result")

console. log(inputOne.value)
console. log(inputTwo.value)

console. log(heading.innerHTML)




function add(){
    if( inputOne.value && inputTwo.value) {let add = parseInt(inputOne.value) + parseInt(inputTwo.value);

        console. log(add);
        result.innerHTML = add;
        clearInput()

    } else{
        alert(
            " please enter all of you add data"
        )
    }
    
}

add()


function substract(){
    if( inputOne.value && inputTwo.value){let substract = parseInt(inputOne.value) - parseInt(inputTwo.value);

        console. log(substract);
        
        result.innerHTML = substract;
        clearInput()

    } else{
        alert(
            "please enter all of your substract data"
        )
    }
    
}



function division(){
    if(inputOne.value && inputTwo.value){let division = parseInt(inputOne.value) / parseInt(inputTwo.value);

    console. log(division);
    
    result.innerHTML = division.toFixed(3);
    clearInput()

    } else{
        alert(
            " please enter all of your division data"
        )
    }
    
}




function multification(){
    if( inputOne.value && inputTwo.value){let multification = parseInt(inputOne.value) * parseInt(inputTwo.value);

        console. log(multification);
        
        result.innerHTML = multification;
        clearInput()
        } else{
            alert(" please enter your all multification data")
        }}
    

function clearInput(){ inputOne.value =""
inputTwo.value = ""}
   


