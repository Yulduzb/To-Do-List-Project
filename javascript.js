    const inputBox = document.getElementById('input-box');
    const listContainer = document.getElementById('list-container');


  
  

    function addTask() {
        if(inputBox.value===''){
            alert("Lütfen bir yapilacak görev yaziniz!");

        }
        else{
            let li=document.createElement("li");
            li.innerHTML=inputBox.value;
            listContainer.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
        inputBox.value="";
        SaveData()
    }

    listContainer.addEventListener("click", function(e){
        console.log(e);
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            SaveData();
            e.stopPropagation(); // Olayın yayılmasını durdur.

        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            SaveData();
            e.stopPropagation(); // Olayın yayılmasını durdur.
        }
          
    
        
    }, false );


    function SaveData(){
        localStorage.setItem("data",listContainer.inert)
    }
      
 
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();

