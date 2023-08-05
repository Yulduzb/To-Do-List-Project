document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('input-box');
    const addButton = document.getElementById('btnEkle');
    const DeleteButton = document.getElementById('btnSil');
   const listContainer = document.getElementById('list-container');


    addButton.addEventListener('click', addTask);
    listContainer.addEventListener('click', toggleTask);
    listContainer.addEventListener('click', deleteTask);

    function addTask() {
        const taskText = inputBox.value.trim();      //  "inputBox" değişkenine atanmış olan giriş kutusundan metin değerini 
                                                       //alır ve başındaki ve sonundaki boşlukları kaldırır.
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;
            listContainer.appendChild(li);
            inputBox.value = '';
        }
    }

    function toggleTask(event) {
        // Eğer tıklanan eleman bir "li" etiketi ise (yani liste öğesine tıklandıysa), işlemlere devam eder.
        if (event.target.tagName === 'LI') {
            // Tıklanan liste öğesinin sınıf listesine "checked" adlı bir sınıf ekler veya çıkarır (toggle).
            // Yani, eğer liste öğesinde "checked" sınıfı yoksa ekler, varsa çıkarır.
            event.target.classList.toggle('checked');
        }
    }



   /* function deleteTask(event){
        if (event.target.classList.contains('delete-btn')) {
            const listItem = event.target.parentElement;
            listContainer.removeChild(listItem);
        }
    }*/
});  


 
 


