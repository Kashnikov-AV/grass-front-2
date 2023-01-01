function deletedItem(id){
    elem = document.getElementById(id); //находим блок div по его id, который передали в функцию
    state = elem.style.display; //смотрим, включен ли сейчас элемент
    if (state =='') {
        elem.style.display='none';
        document.getElementById('close-eye').classList.remove('open-eye');
        
        
    }  //если включен, то выключаем
    
    }


function AddItem(id){
    
    elem = document.getElementById(id); //находим блок div по его id, который передали в функцию
    state = elem.style.display; //смотрим, включен ли сейчас элемент
    if (state =='none') {
        elem.style.display='';
        document.getElementById('close-eye').classList.add('open-eye');
        
    }  //если включен, то выключаем
    
    }