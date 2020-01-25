//  this is self-invoking anonymous function
// also called (function()
// also called a module


(() => {
  console.log("SVG ICONS- from Javascript");

   let svgImage = document.querySelectorAll('.svg-img');

   function logSVG()
   {
     console.log(this.id);
   }

   function clickEvent()
   {
     this.classList.toggle("selected");
   }

   svgImage.forEach(image => image.addEventListener('mouseover', logSVG));

})();
