// Write your code in this file!
function scuberGreetingForFeet(distance){
  if(distance <= 400){
    return 'This one is on me!';
  }
  else if(distance >2000 && distance < 2500){
    return 'I will gladly take your thirty bucks.';
  }
  else{
    return 'No can do.';
  }
};

function ternaryCheckCity(city){
  city == 'NYC' ? "Ok, sounds good." : "No go.";
  return city;
}
