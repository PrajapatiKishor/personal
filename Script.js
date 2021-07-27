 /* Open when someone clicks on the span element */
 function openNav() {
     document.getElementById("myNav").style.width = "100%";
 }

 /* Close when someone clicks on the "x" symbol inside the overlay */
 function closeNav() {
     document.getElementById("myNav").style.width = "0%";
 }
 var root1;
 var root2;

 function squareroot(a, b, c) {
     var a, b, c;
     let discrim = b * b - 4 * a * c;

     if (discrim > 0) {
         root1 = (-b + Math.sqrt(discrim)) / (2 * a);
         root2 = (-b - Math.sqrt(discrim)) / (2 * a);
         console.log(root1, root2)
     } else if (discrim == 0) {
         root1 = root2 = -b / (2 * a);

         console.log(root1, root2);
     } else {
         let realPart = (-b / (2 * a)).toFixed(2);
         let imagPart = (Math.sqrt(-discrim) / (2 * a)).toFixed(2);
         root1 = realPart + imagPart;
         root2 = realPart - imagPart;
         console.log(root1, root2);
     }
     return root1, root2;
 }

 squareroot(1, -3, 10);