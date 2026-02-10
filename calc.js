// Calcula la nota ponderada a partir de un arreglo de objetos {score, weight}
function calcWeightedGrade(grades) {
    let totalWeight = 0;
    let weightedSum = 0;
    
    // Recorre cada nota y suma el producto de la nota por su peso
    for (const grade of grades) {
        weightedSum += grade.score * grade.weight;
        totalWeight += grade.weight;
    }
    
    // Retorna la nota ponderada
    return weightedSum / totalWeight;
}

// Calcula el percentil p de un arreglo de puntajes
function percentile(p, scores) {
    if (scores.length === 0) return 0; // Si el arreglo está vacío, retorna 0
    
    // Ordena los puntajes de menor a mayor
    const sortedScores = [...scores].sort((a, b) => a - b);
    
    // Maneja casos extremos
    if (p <= 0) return sortedScores[0];
    if (p >= 100) return sortedScores[sortedScores.length - 1];
    
    // Calcula el índice usando el método de rango más cercano
    // n * (p/100) redondeado hacia arriba menos 1
    const index = Math.ceil((sortedScores.length * p) / 100) - 1;
    
    // Retorna el valor en el índice calculado
    return sortedScores[index];
}

module.exports = { calcWeightedGrade, percentile };