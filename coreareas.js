let CommContainer = document.querySelector('.comm-container');
let CommModal = document.querySelector('.comm-modal');
let DesignContainer = document.querySelector('.design-container');
let DesignModal = document.querySelector('.design-modal');
let CodeContainer = document.querySelector('.code-container');
let CodeModal = document.querySelector('.code-modal');
let BusinessContainer = document.querySelector('.business-container');
let BusinessModal = document.querySelector('.business-modal');
let CoreAreaContainer = document.querySelector('.core-container');

CommContainer.addEventListener('click', CommExpand);

function CommExpand() {

    CommContainer.classList.toggle('comm-expand');
    CommModal.classList.toggle('hide');

    DesignContainer.classList.remove('design-expand');
    DesignModal.classList.remove('hide');

    CodeContainer.classList.remove('code-expand');
    CodeModal.classList.remove('hide');

    BusinessContainer.classList.remove('business-expand');
    BusinessModal.classList.remove('hide');


}

DesignContainer.addEventListener('click', DesignExpand);

function DesignExpand() {

    CommContainer.classList.remove('comm-expand');
    CommModal.classList.remove('hide');

    DesignContainer.classList.toggle('design-expand');
    DesignModal.classList.toggle('hide');

    CodeContainer.classList.remove('design-expand');
    CodeModal.classList.remove('hide');

    BusinessContainer.classList.remove('business-expand');
    BusinessModal.classList.remove('hide');
}

CodeContainer.addEventListener('click', designContainerExpand);

function designContainerExpand() {

    CommContainer.classList.remove('comm-expand');
    CommModal.classList.remove('hide');

    DesignContainer.classList.remove('design-expand');
    DesignModal.classList.remove('hide');

    CodeContainer.classList.toggle('design-expand');
    CodeModal.classList.toggle('hide');

    BusinessContainer.classList.remove('business-expand');
    BusinessModal.classList.remove('hide');
}

BusinessContainer.addEventListener('click', businessContainerExpand);

function businessContainerExpand() {
    CommContainer.classList.remove('comm-expand');
    CommModal.classList.remove('hide');

    DesignContainer.classList.remove('design-expand');
    DesignModal.classList.remove('hide');

    CodeContainer.classList.remove('design-expand');
    CodeModal.classList.remove('hide');

    BusinessContainer.classList.toggle('business-expand');
    BusinessModal.classList.toggle('hide');



}
