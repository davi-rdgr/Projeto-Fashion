let corOriginal = true;
        function mudarCor() {
            let botao = window.document.getElementById('botao');
            let body = document.body;
            let navA1 = window.document.querySelector('#navA1')
            let navA2 = window.document.querySelector('#navA2')
            let navA3 = window.document.querySelector('#navA3')

            let mainh1 = window.document.querySelector('#mainh1')
            let mainp = window.document.querySelector('#mainp')

            let titulo1 = window.document.querySelector('#titulofoto1')
            let titulo2 = window.document.querySelector('#titulofoto2')
            let titulo3 = window.document.querySelector('#titulofoto3')

            let legenda1 = window.document.querySelector('#legendafoto1')
            let legenda2 = window.document.querySelector('#legendafoto2')
            let legenda3 = window.document.querySelector('#legendafoto3')

            let sech2 = window.document.querySelector('#firstmainh2')
            let sech22 = window.document.querySelector('#secondmainh2')
            let secp = window.document.querySelector('#tercp')

            let adress = window.document.querySelector('#adress')
            let copy = window.document.querySelector('#copy')

            const DarkColor = {
                'black': '#040404',
                'grey01': '#A1A2A3',
                'grey02': '#514B54',
            };
            const WhiteColor = {
                'white': '',
            };

            if (corOriginal) {
                botao.setAttribute("src", 'imagens/svgSun.svg');
                body.style.background = DarkColor['black'];
                navA1.style.color = DarkColor['grey01'];
                navA2.style.color = DarkColor['grey01'];
                navA3.style.color = DarkColor['grey01'];
                mainh1.style.color = DarkColor['grey01'];
                titulo1.style.color = DarkColor['grey01'];
                titulo2.style.color = DarkColor['grey01'];
                titulo3.style.color = DarkColor['grey01'];
                sech2.style.color = DarkColor['grey01'];
                sech22.style.color = DarkColor['grey01'];
                secp.style.color = DarkColor['grey01'];
                adress.style.color = DarkColor['grey01'];
                copy.style.color = DarkColor['grey01'];
                mainp.style.color = DarkColor['grey01'];
                legenda1.style.color = DarkColor['grey01'];
                legenda2.style.color = DarkColor['grey01'];
                legenda3.style.color = DarkColor['grey01'];
            } else {
                botao.setAttribute("src", 'imagens/svgMoon.svg');
                body.style.background = WhiteColor['white'];
                navA1.style.color = WhiteColor['white'];
                navA2.style.color = WhiteColor['white'];
                navA3.style.color = WhiteColor['white'];
                mainh1.style.color = WhiteColor['white'];
                titulo1.style.color = WhiteColor['white'];
                titulo2.style.color = WhiteColor['white'];
                titulo3.style.color = WhiteColor['white'];
                sech2.style.color = WhiteColor['white'];
                sech22.style.color = WhiteColor['white'];
                secp.style.color = WhiteColor['white'];
                adress.style.color = WhiteColor['white'];
                copy.style.color = WhiteColor['white'];
                mainp.style.color = WhiteColor['white'];
                legenda1.style.color = WhiteColor['white'];
                legenda2.style.color = WhiteColor['white'];
                legenda3.style.color = WhiteColor['white'];
            }

            corOriginal = !corOriginal;
        }