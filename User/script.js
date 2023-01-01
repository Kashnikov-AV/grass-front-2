




function deletedItem(id){
    elem = document.getElementById(id); //находим блок div по его id, который передали в функцию
    state = elem.style.display; //смотрим, включен ли сейчас элемент
    if (state =='') {
        elem.style.display='none';
    }  //если включен, то выключаем
    
    }


function AddItem(id){
    
    elem = document.getElementById(id); //находим блок div по его id, который передали в функцию
    state = elem.style.display; //смотрим, включен ли сейчас элемент
    if (state =='none') {
        elem.style.display='';
        
    }  //если включен, то выключаем
    
    }



function menItem(){
    
        document.getElementsByClassName('work')[0].classList.add("sex-grey");
        document.getElementsByClassName('workers')[0].classList.remove("sex-grey");
        document.getElementsByClassName('workers')[0].classList.add("sex-white");
        document.getElementsByClassName('work')[0].classList.remove("sex-white");
     //если включен, то выключаем
    
    }


function womenItem(){
    document.getElementsByClassName('workers')[0].classList.add("sex-grey");
    document.getElementsByClassName('work')[0].classList.remove("sex-grey");
    document.getElementsByClassName('work')[0].classList.add("sex-white");
    document.getElementsByClassName('workers')[0].classList.remove("sex-white");
    
    }