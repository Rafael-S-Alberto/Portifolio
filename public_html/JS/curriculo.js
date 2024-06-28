/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

let psi = getElementById("psicologo");

$(document).ready(function(){
$('.collapsible').collapsible();
});

  // Open
  $('.collapsible').collapsible('open', psi);

  // Close
  $('.collapsible').collapsible('close', 0);

  // Destroy
  $('.collapsible').collapsible('destroy');