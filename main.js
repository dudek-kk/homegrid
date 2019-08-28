console.log('Pozor! Vlak!')

// const zmienna=document.querySelector('.main-header__title');
// console.log(zmienna);
// console.log(zmienna.innerHTML);

// zmienna.innerHTML='New header thnx to JS';

// const paragraph=document.querySelector('.main__paragraph--js');
// console.log(zmienna);
// paragraph.innerHTML='Paragraf z kodu JS';

// Obliczenia w JS

// const a=2;
// const b=4;

// pole=(a*b)+2;
// console.log(`wynik działania to ${pole}`);


// instrukcje warunkowe 5.02

// const age=50;
// console.log(age);
// if (age<18) {
//   console.log(`masz mniej niż 18 lat. Twój wiek to ${age} lat`);
// }
// else if ((age>=20) && (age<=30)) {
//   console.log(`Twój wiek jest między 20 a 30 lat`);
// }
// else {
//   console.log(`Jesteś 30+. Dokładniej to ${age}`);
// }


// switch (age) {
//   case 20:
//     console.log(`Masz dokładnie 20 lat`);
//     break;
//   case 30:
//     console.log(`Masz równo 30 lat`);
//     break;
//   default:
//     console.log(`Twój wiek to ${age} lat`);
//     break;
// }

// const amIOld = (age>40) ? `Prawda, jesteś powyżej 40-ki` : `Fałsz, jesteś młodzieniaszkiem. Masz przecież tylko ${age} lat`;
// console.log(amIOld);


// Funkcje 5.03

// function calculate(x,y) {
//   return x*y
// }

// console.log(calculate(2,3));

// const wynik=calculate(1,3);
// console.log(wynik);

// function compare(a,b) {
//   if (a>b) {
//     return a;
//   }
//   else {
//     return b;
//   }
// }

// console.log(compare(11,9));

const age = 30;
const name = 'Jan Kowalski';

console.log(`Witaj, ${name}. Masz dziś urodziny, kończysz ${age} lat`);

function welcome(name, age) {
  const welcomeString = (`Witaj, ${name}. Masz dzisiaj urodziny, kończysz ${age} lat!`);
  console.log(welcomeString);
}

welcome (`Mikołaj Rej`,19);