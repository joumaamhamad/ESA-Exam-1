let addSpecific = document.getElementById('addSpecific')
let addGeneral = document.getElementById('addGeneral')
let addInput = document.getElementById('addInput')
let fruitRadio = document.getElementById('fruitRadio');
let legumeRadio = document.getElementById('legumeRadio')
let searchButton = document.getElementById('searchButton')
let deleteButton = document.getElementById('deleteButton')
let searchInput = document.getElementById('searchInput')


addSpecific.addEventListener('click', () => {
    if (addInput.value == '') {
        alert('The input is empty!!!');
        return;
    }

    if (!fruitRadio.checked && !legumeRadio.checked) {
        alert('Please choose legume or fruit!!!');
        return;
    }

    if (fruitRadio.checked) {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = 'Fruits!-' + addInput.value;


        
        let fruitContentDivs = document.getElementsByClassName('fruit-content');
        for (let i = 0; i < fruitContentDivs.length; i++) {
            fruitContentDivs[i].appendChild(newDiv.cloneNode(true)); 
        }

        addInput.value = '';
    }

    if (legumeRadio.checked) {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = 'Legumes!-' + addInput.value;

        

        
        let legumeContentDivs = document.getElementsByClassName('legume-content');
        for (let i = 0; i < legumeContentDivs.length; i++) {
            legumeContentDivs[i].appendChild(newDiv.cloneNode(true));
        }

        addInput.value = '';
    }
});

addGeneral.addEventListener('click' , () => {
    if (addInput.value == '') {
        alert('The input is empty!!!');
        return; 
    }

    if (!fruitRadio.checked && !legumeRadio.checked) {
        alert('Please choose legume or fruit!!!');
        return; 
    }

    if (fruitRadio.checked) {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = 'Fruits!-' + addInput.value;

        
        let bothContentDivs = document.getElementsByClassName('both-content');
        for (let i = 0; i < bothContentDivs.length; i++) {
            bothContentDivs[i].appendChild(newDiv.cloneNode(true));
        }

        let fruitContentDivs = document.getElementsByClassName('fruit-content');
        for (let i = 0; i < fruitContentDivs.length; i++) {
            fruitContentDivs[i].appendChild(newDiv.cloneNode(true));
        }

        addInput.value = '';
    }

    if (legumeRadio.checked) {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = 'Legumes!-' + addInput.value;

        

        
        let bothContentDivs = document.getElementsByClassName('both-content');
        for (let i = 0; i < bothContentDivs.length; i++) {
            bothContentDivs[i].appendChild(newDiv.cloneNode(true)); 
        }

        let legumeContentDivs = document.getElementsByClassName('legume-content');
        for (let i = 0; i < legumeContentDivs.length; i++) {
            legumeContentDivs[i].appendChild(newDiv.cloneNode(true)); 
        }
        


        addInput.value = '';
    }


})

searchButton.addEventListener('click' , () => {
    const value = searchInput.value.trim();
    const contentDivs = document.querySelectorAll('.fruit-content, .legume-content, .both-content');

    contentDivs.forEach(function (contentDiv) {
        const divsInsideContent = contentDiv.querySelectorAll('div');
        divsInsideContent.forEach(function (div) {
            const divContent = div.textContent.toLowerCase();
            if (divContent.includes(value)) {
                div.style.backgroundColor = 'red';
            } else {
                div.style.backgroundColor = ''; 
            }
        });
    });

})

deleteButton.addEventListener('click', function () {
    const contentDivs = document.querySelectorAll('.fruit-content, .legume-content, .both-content');

    contentDivs.forEach(function (contentDiv) {
        const divsInsideContent = contentDiv.querySelectorAll('div');
        divsInsideContent.forEach(function (div) {
            if (div.style.backgroundColor === 'red') {
                div.parentNode.removeChild(div);
            }
        });
    });
});