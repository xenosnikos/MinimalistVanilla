document.addEventListener('DOMContentLoaded', function() {
    const terminalContent = document.getElementById('terminal-content');
    const logo = document.getElementById('logo');
    const terminalBox = document.querySelector('.terminal');
    const enterSiteButton = document.getElementById('enter-site');
    const mainContent = document.getElementById('main-content');
    const animatedItems = document.querySelectorAll('.animated-item');
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarLogo = document.getElementById('sidebar-logo');
    const fixedLogo = document.querySelector('#fixed-logo img');
    const darkModeToggle = document.querySelector('.tdnn');

    const loadingText = [
        "Gathering Requirements...",
        "Planning Architecture and Designs...",
        "Assembling Expert Team ...",
        "Building Software and Integrations..",
        "Deploying On Cloud...",
        "Securing...",
        "Testing For Bugs And Traffic...",
        "Formulating Launch Strategy...",
        "Monitoring Usage and Analytics...",
        "Optimizing ...",
        "Done!"
        
    ];

    let index = 0;

    function typeText() {
        let charIndex = 0;
        const currentText = loadingText[index];
        
        function typeChar() {
            if (charIndex < currentText.length) {
                terminalContent.innerHTML += currentText[charIndex];
                charIndex++;
                setTimeout(typeChar, 10); // Adjust typing speed here
            } else {
                terminalContent.innerHTML += '\n';
                index++;
                if (index < loadingText.length) {
                    setTimeout(typeText, 100); // Delay before next line
                } else {
                    setTimeout(hideTerminal, 1000);
                }
            }
        }
        typeChar();
    }

    function hideTerminal() {
        terminalBox.style.opacity = '0';
        terminalBox.style.transform = 'scale(0.9)';
        setTimeout(showLogo, 1000);
    }

    function showLogo() {
        terminalBox.style.display = 'none';
        logo.classList.remove('hidden');
        setTimeout(() => {
            logo.style.opacity = 1;
            enterSiteButton.classList.remove('hidden');
            setTimeout(() => {
                enterSiteButton.style.opacity = 1;
            }, 100);
        }, 100);
    }

    enterSiteButton.addEventListener('click', () => {
        console.log("Enter Site button clicked");
        logo.style.opacity = '0';
        setTimeout(() => {
            logo.style.display = 'none';
            mainContent.classList.remove('hidden');
            setTimeout(() => {
                mainContent.style.opacity = 1;
                animatedItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('show-item');
                    }, index * 300);
                });
            }, 100);
        }, 1000);
    });

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    $(document).ready(function() {
        $('.tdnn').click(function () {
            $("body").toggleClass('dark-mode');
            $(".moon").toggleClass('sun');
            $(".tdnn").toggleClass('day');
            
            if ($("body").hasClass('dark-mode')) {
                sidebarLogo.src = 'Assets/WhiteSquere.png';
                fixedLogo.src = 'Assets/WhiteSquere.png';
            } else {
                sidebarLogo.src = 'Assets/ICON BLACK AND WHITE.png';
                fixedLogo.src = 'Assets/ICON BLACK AND WHITE.png';
            }
        });
    });

    document.addEventListener('mousemove', function(e) {
        const homeImage = document.getElementById('home-image');
        const x = (window.innerWidth - e.pageX) / 50;
        const y = (window.innerHeight - e.pageY) / 50;
        homeImage.style.transform = `translate(${x}px, ${y}px)`;
    });

    typeText();
    
      
});
