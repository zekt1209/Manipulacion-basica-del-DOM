// In this file, we will be practicing some basic Algorithms

//BubbleSort

// function bubblesort() {

// }

const bubblesort = (array) => {
    console.log("Arreglo Desordenado: " + array);

    for(var i = 0; i < array.length; i++) {
        for(var j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                var aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    console.log("Arreglo Ordenado: " + array);
    return array;
}

bubblesort([3,2,6,4,5,2,5]);

// Fibonacci


// Selection Sort










// Presupuesto:

Pasaje = 1080 // Ida y vuelta por persona
Hotel = 400 // Total
Comida = 600 // Por persona
Antojos = 100 // Por persona

3460 // Total






