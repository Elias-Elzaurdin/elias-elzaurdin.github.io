const profilePic = document.getElementById('profilePic');
        
        document.addEventListener('DOMContentLoaded', () => {
            if (profilePic) {
                // Forzar un reflow para asegurar que la transición se aplique
                profilePic.getBoundingClientRect(); 
                profilePic.style.opacity = '1';
            }
        });
		// Crear líneas de conexión
        function createLines() {
            const linesContainer = document.getElementById('lines');
            for (let i = 0; i < 20; i++) {
                const line = document.createElement('div');
                line.className = 'line';
                line.style.top = Math.random() * 100 + '%';
                line.style.left = Math.random() * 100 + '%';
                line.style.width = Math.random() * 200 + 100 + 'px';
                line.style.animationDelay = Math.random() * 3 + 's';
                line.style.opacity = Math.random() * 0.5;
                linesContainer.appendChild(line);
            }
        }

        // Crear partículas
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.width = Math.random() * 8 + 2 + 'px';
                particle.style.height = particle.style.width;
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = Math.random() * 4 + 4 + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Crear hexágonos
        function createHexagons() {
            const hexContainer = document.getElementById('hexagons');
            for (let i = 0; i < 15; i++) {
                const hex = document.createElement('div');
                hex.className = 'hexagon';
                hex.style.left = Math.random() * 100 + '%';
                hex.style.top = Math.random() * 100 + '%';
                hex.style.animationDelay = Math.random() * 8 + 's';
                hexContainer.appendChild(hex);
            }
        }

        // Inicializar animaciones
        document.addEventListener('DOMContentLoaded', function() {
            createLines();
            createParticles();
            createHexagons();
        });
		