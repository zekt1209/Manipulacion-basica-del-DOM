var array = ['Juanita', 'Rigoberto', 'Rubi'];

var obj = {
	nombre: 'Fulanito',
	edad: 3,
	grupos: ['itil', 'admin', 'consumer'],
};

const printFirstElement = (array) => {
        console.log(array[0]);
        console.log(typeof(array[0]));
        return;
}

const printAllElements = (array) => {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    return;
}

const printAllObjectElements = (obj) => {

    const arrObj = Object.values(obj);

    for (i = 0; i < arrObj.length; i++) {
        console.log('Obj value: ' + arrObj[i]);
    }

    return;
}

//printFirstElement(array);
printAllObjectElements(obj);