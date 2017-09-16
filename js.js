let FirstSemContainer = document.querySelector('.first-semester-container');
let FirstSemModal = document.querySelector('.first-modal');
let SecondSemContainer = document.querySelector('.second-semester-container');
let SecondSemModal = document.querySelector('.second-modal');
let ThirdSemContainer = document.querySelector('.third-semester-container');
let ThirdSemModal = document.querySelector('.third-modal');
let FourthSemContainer = document.querySelector('.fourth-semester-container');
let FourthSemModal = document.querySelector('.fourth-modal');
let StructureContainer = document.querySelector('.structure-container');
let FirstSemesterTextModal = document.querySelector(".first-semester-title-modal");
let SecondSemesterTextModal = document.querySelector(".second-semester-title-modal");
let ThirdSemesterTextModal = document.querySelector(".third-semester-title-modal");
let FourthSemesterTextModal = document.querySelector(".fourth-semester-title-modal");

FirstSemContainer.addEventListener('click', FirstContainerExpand);

function FirstContainerExpand() {

    FirstSemContainer.classList.toggle('first-expand');
    FirstSemModal.classList.toggle('hide');
    FirstSemesterTextModal.classList.toggle('semester-hide');

    SecondSemContainer.classList.remove('second-expand');
    SecondSemModal.classList.remove('hide');
    SecondSemesterTextModal.classList.remove('semester-hide');


    ThirdSemContainer.classList.remove('third-expand');
    ThirdSemModal.classList.remove('hide');
    ThirdSemesterTextModal.classList.remove('semester-hide');;


    FourthSemContainer.classList.remove('fourth-expand');
    FourthSemModal.classList.remove('hide');


}

SecondSemContainer.addEventListener('click', SecondContainerExpand);

function SecondContainerExpand() {

    FirstSemContainer.classList.remove('first-expand');
    FirstSemModal.classList.remove('hide');
    FirstSemesterTextModal.classList.remove('semester-hide');


    SecondSemContainer.classList.toggle('second-expand');
    SecondSemModal.classList.toggle('hide');
    SecondSemesterTextModal.classList.toggle('semester-hide');

    ThirdSemContainer.classList.remove('third-expand');
    ThirdSemModal.classList.remove('hide')
    ThirdSemesterTextModal.classList.remove('semester-hide');;

    FourthSemContainer.classList.remove('fourth-expand');
    FourthSemModal.classList.remove('hide');
}

ThirdSemContainer.addEventListener('click', ThirdContainerExpand);

function ThirdContainerExpand() {

    FirstSemContainer.classList.remove('first-expand');
    FirstSemModal.classList.remove('hide');
    FirstSemesterTextModal.classList.remove('semester-hide');

    SecondSemContainer.classList.remove('second-expand');
    SecondSemModal.classList.remove('hide');
    SecondSemesterTextModal.classList.remove('semester-hide');


    ThirdSemContainer.classList.toggle('third-expand');
    ThirdSemModal.classList.toggle('hide');
    ThirdSemesterTextModal.classList.toggle('semester-hide');

    FourthSemContainer.classList.remove('fourth-expand');
    FourthSemModal.classList.remove('hide');
    FourthSemesterTextModal.classList.remove('semester-hide');
}

FourthSemContainer.addEventListener('click', FourthContainerExpand);

function FourthContainerExpand() {
    FirstSemContainer.classList.remove('first-expand');
    FirstSemModal.classList.remove('hide');
    FirstSemesterTextModal.classList.remove('semester-hide');

    SecondSemContainer.classList.remove('second-expand');
    SecondSemModal.classList.remove('hide');
    SecondSemesterTextModal.classList.remove('semester-hide');


    ThirdSemContainer.classList.remove('third-expand');
    ThirdSemModal.classList.remove('hide');
    ThirdSemesterTextModal.classList.remove('semester-hide');;


    FourthSemContainer.classList.toggle('fourth-expand');
    FourthSemModal.classList.toggle('hide');
    FourthSemesterTextModal.classList.toggle('semester-hide');



}
