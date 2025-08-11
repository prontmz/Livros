 // Ativar animações quando a página carrega
        document.addEventListener('DOMContentLoaded', function() {
            // Adicionar classe de animação aos elementos
            const animateElements = document.querySelectorAll('.fade-in');
            
            animateElements.forEach(element => {
                element.style.opacity = '0';
            });
            
            setTimeout(() => {
                animateElements.forEach(element => {
                    element.style.opacity = '1';
                });
            }, 100);
            
            // Suavizar rolagem para links âncora
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Adicionar sombra à navbar quando rolar a página
            window.addEventListener('scroll', function() {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
                } else {
                    navbar.style.boxShadow = 'none';
                }
            });
        });