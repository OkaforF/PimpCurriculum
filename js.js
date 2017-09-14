let FirstSemContainer = document.querySelector('.first-semester-container');
let FirstSemModal = document.querySelector('.first-modal');
let SecondSemContainer = document.querySelector('.second-semester-container');
let SecondSemModal = document.querySelector('.second-modal');
let ThirdSemContainer = document.querySelector('.third-semester-container');
let ThirdSemModal = document.querySelector('.third-modal');
let FourthSemContainer = document.querySelector('.fourth-semester-container');
let FourthSemModal = document.querySelector('.fourth-modal');
let StructureContainer = document.querySelector('.structure-container');

FirstSemContainer.addEventListener('click', FirstContainerExpand);

function FirstContainerExpand() {

    FirstSemContainer.classList.toggle('first-expand');
    FirstSemModal.classList.toggle('hide');

    SecondSemContainer.classList.remove('second-expand');
    SecondSemModal.classList.remove('hide');

    ThirdSemContainer.classList.remove('third-expand');
    ThirdSemModal.classList.remove('hide');

    FourthSemContainer.classList.remove('fourth-expand');
    FourthSemModal.classList.remove('hide');


}

SecondSemContainer.addEventListener('click', SecondContainerExpand);

function SecondContainerExpand() {

    FirstSemContainer.classList.remove('first-expand');
    FirstSemModal.classList.remove('hide');

    SecondSemContainer.classList.toggle('second-expand');
    SecondSemModal.classList.toggle('hide');

    ThirdSemContainer.classList.remove('third-expand');
    ThirdSemModal.classList.remove('hide');

    FourthSemContainer.classList.remove('fourth-expand');
    FourthSemModal.classList.remove('hide');
}
ThirdSemContainer.addEventListener('click', ThirdContainerExpand);

function ThirdContainerExpand() {

    FirstSemContainer.classList.remove('first-expand');
    FirstSemModal.classList.remove('hide');

    SecondSemContainer.classList.remove('second-expand');
    SecondSemModal.classList.remove('hide');

    ThirdSemContainer.classList.toggle('third-expand');
    ThirdSemModal.classList.toggle('hide');

    FourthSemContainer.classList.remove('fourth-expand');
    FourthSemModal.classList.remove('hide');
}

FourthSemContainer.addEventListener('click', FourthContainerExpand);

function FourthContainerExpand() {
    FirstSemContainer.classList.remove('first-expand');
    FirstSemModal.classList.remove('hide');

    SecondSemContainer.classList.remove('second-expand');
    SecondSemModal.classList.remove('hide');

    ThirdSemContainer.classList.remove('third-expand');
    ThirdSemModal.classList.remove('hide');

    FourthSemContainer.classList.toggle('fourth-expand');
    FourthSemModal.classList.toggle('hide');



}
