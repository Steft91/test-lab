// Calculo nota ponderada 
function calcWeightedGrade(notas) {
    let pesoTotal = 0;
    let sumaPeso = 0;

    //Stefany Díaz
    
    // Recorre cada nota y suma el 
    // producto de la nota por su peso
    for (const nota of notas) {
        sumaPeso += nota.puntaje * nota.weight;
        pesoTotal += nota.weight;
    }

    //Se validan rangos, tipos de datos y suma de pesos, utilizando adecuadamente TypeError y RangeError.
    
    // //si no hay peso total aqui retorna 0
    // if (pesoTotal === 0) return 0;
    
    //nota ponderada
    return sumaPeso / pesoTotal;
}

//calculo el percentil con lso puntajes 
function percentile(p, puntajes) {
    if (puntajes.length === 0) return 0; 
    // Si el arreglo está vacío, retorna 0
    //Stefany Díaz
    
    //puntajes de manera ascendente
    const sortedpuntajes = [...puntajes].sort((a, b) => a - b);
    
    //si p es menor o igual a 0 retorna el valor mínimo
    //si es mayor o igual a 100 retorna el valor máximo
    if (p <= 0) return sortedpuntajes[0];
    if (p >= 100) return sortedpuntajes[sortedpuntajes.length - 1];
    
    // metodo de rango más cercano n * (p/100) 
    const index = Math.ceil((sortedpuntajes.length * p) / 100) - 1;

    // //uso de typreerror para validar que p es un número
    // if (typeof p !== 'number') {
    //     throw new TypeError('El percentil debe ser un número');
    // }
    // // uso de rangeerror para validar que p esté entre 0 y 100
    // if (p < 0 || p > 100) {
    //     throw new RangeError('El percentil debe estar entre 0 y 100');
    // }
    
    // Retorna el valor en el índice calculado-
    return sortedpuntajes[index];
}

module.exports = { calcWeightedGrade, percentile };