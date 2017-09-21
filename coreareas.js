let CommContainer = document.querySelector('.comm-container');
let CommModal = document.querySelector('.comm-modal');
let DesignContainer = document.querySelector('.design-container');
let DesignModal = document.querySelector('.design-modal');
let CodeContainer = document.querySelector('.code-container');
let CodeModal = document.querySelector('.code-modal');
let BusinessContainer = document.querySelector('.business-container');
let BusinessModal = document.querySelector('.business-modal');
let CoreAreaContainer = document.querySelector('.core-container');
let CommCoreTitle = document.querySelector('.comm-core-title');
let DesignCoreTitle = document.querySelector('.design-core-title');
let CodeCoreTitle = document.querySelector('.code-core-title');
let BusinessCoreTitle = document.querySelector('.business-core-title');

CommContainer.addEventListener('click', CommExpand);

function CommExpand() {

    CommContainer.classList.toggle('comm-expand');
    CommModal.classList.toggle('hide');
    CommCoreTitle.classList.toggle('semester-hide');

    DesignContainer.classList.remove('design-expand');
    DesignModal.classList.remove('hide');
    DesignCoreTitle.classList.remove('semester-hide');

    CodeContainer.classList.remove('code-expand');
    CodeModal.classList.remove('hide');
    CodeCoreTitle.classList.remove('semester-hide');

    BusinessContainer.classList.remove('business-expand');
    BusinessModal.classList.remove('hide');
    BusinessCoreTitle.classList.remove('semester-hide');


}

DesignContainer.addEventListener('click', DesignExpand);

function DesignExpand() {

    CommContainer.classList.remove('comm-expand');
    CommModal.classList.remove('hide');
    CommCoreTitle.classList.remove('semester-hide');

    DesignContainer.classList.toggle('design-expand');
    DesignModal.classList.toggle('hide');
    DesignCoreTitle.classList.toggle('semester-hide');

    CodeContainer.classList.remove('design-expand');
    CodeModal.classList.remove('hide');
    CodeCoreTitle.classList.remove('semester-hide');

    BusinessContainer.classList.remove('business-expand');
    BusinessModal.classList.remove('hide');
    BusinessCoreTitle.classList.remove('semester-hide');
}

CodeContainer.addEventListener('click', designContainerExpand);

function designContainerExpand() {

    CommContainer.classList.remove('comm-expand');
    CommModal.classList.remove('hide');
    CommCoreTitle.classList.remove('semester-hide');

    DesignContainer.classList.remove('design-expand');
    DesignModal.classList.remove('hide');
    DesignCoreTitle.classList.remove('semester-hide');

    CodeContainer.classList.toggle('design-expand');
    CodeModal.classList.toggle('hide');
    CodeCoreTitle.classList.toggle('semester-hide');

    BusinessContainer.classList.remove('business-expand');
    BusinessModal.classList.remove('hide');
    BusinessCoreTitle.classList.remove('semester-hide');
}

BusinessContainer.addEventListener('click', businessContainerExpand);

function businessContainerExpand() {
    CommContainer.classList.remove('comm-expand');
    CommModal.classList.remove('hide');
    CommCoreTitle.classList.remove('semester-hide');

    DesignContainer.classList.remove('design-expand');
    DesignModal.classList.remove('hide');
    DesignCoreTitle.classList.remove('semester-hide');

    CodeContainer.classList.remove('design-expand');
    CodeModal.classList.remove('hide');
    CodeCoreTitle.classList.remove('semester-hide');

    BusinessContainer.classList.toggle('business-expand');
    BusinessModal.classList.toggle('hide');
    BusinessCoreTitle.classList.toggle('semester-hide');



}

/*/Json for subjects/*/

fetch('pimp.json').then(function(response) {
                 return response.json();
            }).then(function(json) {
                return show(json);
            })

   function show(json) {
            json.forEach(function(product) {

                console.log(product.knowledge);

                let template = document.querySelector('template').content;
                let clone = template.cloneNode(true);
                let section = document.querySelector("#"+product.category);

                clone.querySelector('#content-txt').textContent = product.content;

                product.knowledge.forEach(function(knowledge){

                    let li=document.createElement("li");
                    li.textContent=knowledge;

                    clone.querySelector('#knowledge-ul').appendChild(li);

                });

                product.skills.forEach(function(skills){

                    let li=document.createElement("li");
                    li.textContent=skills;

                    clone.querySelector('#skills-ul').appendChild(li);
                })

                product.copentencies.forEach(function(copentencies){
                    let li=document.createElement("li");
                    li.textContent=copentencies;

                    clone.querySelector('#competencies-ul').appendChild(li);
                })

                clone.querySelector('#ects').textContent = product.ects;


                section.appendChild(clone);

            });

        }
