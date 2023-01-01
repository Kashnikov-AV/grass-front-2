function deletedItem(id){
    elem = document.getElementById(id); //находим блок div по его id, который передали в функцию
    state = elem.style.display; //смотрим, включен ли сейчас элемент
    if (state =='') {
        elem.style.display='none';
        document.getElementsByClassName('work')[0].classList.add("sex-grey");
        document.getElementsByClassName('workers')[0].classList.remove("sex-grey");
        document.getElementsByClassName('content')[0].classList.add("content-less");
    }  //если включен, то выключаем
    
    }


function AddItem(id){
    document.getElementsByClassName('workers')[0].classList.add("sex-grey");
    document.getElementsByClassName('work')[0].classList.remove("sex-grey");
    document.getElementsByClassName('content')[0].classList.remove("content-less");
    elem = document.getElementById(id); //находим блок div по его id, который передали в функцию
    state = elem.style.display; //смотрим, включен ли сейчас элемент
    if (state =='none') {
        elem.style.display='';
        
    }  //если включен, то выключаем
    
    }