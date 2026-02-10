function suma(a,b){
    return a + b;
}
document.getElementById('out').textContent = `1 + 2 = ${suma(1, 2)}`;

document.addEventListener('DOMContentLoaded', function() {
    const output = document.getElementById('out');
    const poisonMessages = [
        '💀 Veneno activado...',
        '🧪 Mezcla tóxica preparada',
        '⚗️ Fórmula letal cargando...',
        '🐍 Mordedura venenosa detectada',
        '☠️ Dosis mortal administrada'
    ];
    
    let messageIndex = 0;
    
    setInterval(() => {
        output.textContent = poisonMessages[messageIndex];
        messageIndex = (messageIndex + 1) % poisonMessages.length;
        output.style.color = Math.random() > 0.5 ? '#00ff41' : '#ff0040';
    }, 2000);
    
    // Efecto de partículas tóxicas
    function createToxicParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #00ff41;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${Math.random() * window.innerWidth}px;
            top: -10px;
            animation: fall ${2 + Math.random() * 3}s linear forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 5000);
    }
    
    // Agregar CSS para animación de caída
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(${window.innerHeight + 20}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Crear partículas cada 300ms
    setInterval(createToxicParticle, 300);
});
