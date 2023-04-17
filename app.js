// let plusbutton = document.querySelector(".plus-icon")



// let minusbutton = document.querySelector(".minus-icon")





// let faplussquare = document.querySelector(".fa-plus-square")
// let faminussquare = document.querySelector(".fa-minus-square")
// let plus = document.querySelector(".fa-plus-square")
// let minus = document.querySelector(".fa-minus-square")
// let clickAnswer = document.querySelector(".clickAnswer")



// plusbutton.addEventListener("click",()=>{
  

//     clickAnswer.classList.toggle("hidden")
//     questuinRow.classList.toggle("enable")
//     faplussquare.classList.add("plus")
//     faminussquare.classList.remove('minus')

// })

// minusbutton.addEventListener("click",()=>{
//       clickAnswer.classList.toggle("hidden")
//       questuinRow.classList.toggle("enable")
//       faplussquare.classList.remove("plus")
//       faminussquare.classList.add('minus')
  
//   })
  

// plusbutton1.addEventListener("click",()=>{
  

//     clickAnswer.classList.toggle("hidden")
//     questuinRow.classList.toggle("enable")
//     faplussquare.classList.add("plus")
//     faminussquare.classList.remove('minus')

// })

// minusbutton1.addEventListener("click",()=>{
//       clickAnswer.classList.toggle("hidden")
//       questuinRow.classList.toggle("enable")
//       faplussquare.classList.remove("plus")
//       faminussquare.classList.add('minus')
  
//   })
  

// plusbutton2.addEventListener("click",()=>{
  

//     clickAnswer.classList.toggle("hidden")
//     questuinRow.classList.toggle("enable")
//     faplussquare.classList.add("plus")
//     faminussquare.classList.remove('minus')

// })

// minusbutton2.addEventListener("click",()=>{
//       clickAnswer.classList.toggle("hidden")
//       questuinRow.classList.toggle("enable")
//       faplussquare.classList.remove("plus")
//       faminussquare.classList.add('minus')
  
//   })
  


const questions = document.querySelectorAll(".question");


questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
        
      }
    });

    question.classList.toggle("show-text");
    
    
  });
});



