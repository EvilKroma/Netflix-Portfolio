document.addEventListener('DOMContentLoaded', function() {
    var thumbTiles = document.querySelectorAll('.thumbTile__image');
    var homeSection = document.getElementById('home');
    var dynamicContent = document.getElementById('dynamicContent');

    thumbTiles.forEach(function(thumbTile) {
        thumbTile.addEventListener('mouseenter', function() {
            var backgroundImage = this.getAttribute('data-background');
            var text = this.getAttribute('data-text');

            var customContent;
            switch (text) {
                case 'Projet BBV2':
                    customContent = `
                        <h1>${text}</h1>
                        <p>Création d'une bibliothèque en ligne, dans une situation professionnelle.</p>
                    `;
                    break;
                case 'Projet Eventura':
                    customContent = `
                        <h1>${text}</h1>
                        <p>Application d'organisation d'évènements.</p>
                        `;
                    break;
                case 'Projet FJS':
                    customContent = `
                        <h1>${text}</h1>
                        <p>Site web permettant d'éditer des factures PDF via Javascript.</p>
                        `;
                    break;
                 case 'Projet LMJ':
                    customContent = `
                        <h1>${text}</h1>
                        <p>Création d'une application en React, dans le but d'apprendre ce dernier langage.</p>
                    `;
                    break;
                case 'Projet RespireStat':
                    customContent = `
                        <h1>${text}</h1>
                        <p>Reprise d'un projet de création d'interface de statistiques écologique en Java.</p>
                        `;
                    break;
                case 'Projet ToolBox':
                    customContent = `
                        <h1>${text}</h1>
                        <p>Création de différents mini-outils/jeux.</p>
                        `;
                    break;
                 case 'Projet VR':
                    customContent = `
                        <h1>${text}</h1>
                        <p>Création d'une expérience en VR pour une veille technologique sur la VR.</p>
                        `;
                    break;
                case 'Projet After Blast':
                    customContent = `
                        <h1>${text}</h1>
                        <p>Projet de création d'un jeu vidéo en extraction shooter PvEvP.</p>
                        `;
                    break;
                default:
                    customContent = `
                        <h1>${text}</h1>
                        <p>Some additional description or details about ${text}.</p>
                    `;
            }

            homeSection.style.backgroundImage = 'url(' + backgroundImage + ')';
            dynamicContent.innerHTML = customContent;
        });

        thumbTile.addEventListener('mouseleave', function() {
            homeSection.style.backgroundImage = 'url("addons/imgs/home_background.JPG")';
            dynamicContent.innerHTML = '<img src="addons/imgs/logo_portfolio.png" alt="">';
        });
    });
});
