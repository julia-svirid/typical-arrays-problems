


exports.min = function min (array) {
  if (arguments.length == 0 || array.length == 0) return 0;
  let minim = array[0];
  for (i=0; i<array.length; i++) {
    if(array[i]<minim){
      minim=array[i];
    }
  }
  return minim;
 
  
}

exports.max = function max (array) {
  if (arguments.length == 0 || array.length == 0) return 0;
  let maxim = array[0];
  for (i=0; i<array.length; i++) {
    if(array[i]>maxim){
      maxim=array[i];
    }
  }
  return maxim;
 
}

exports.avg = function avg (array) {
  if (arguments.length == 0 || array.length == 0) return 0;  
  let sum = 0;
  let count = 0;
  for (let i = 0; i<array.length; i++){
    sum=sum+array[i];
    count++;
  }
  let average = sum/count;
  Math.floor(average);
  return average;
  
  
}


/*function min(n){
  let minim = n[0];
  for (i=0; i<n.length; i++) {
    if(n[i]<minim){
      minim=n[i];
    }
  }
  return console.log(minim) ;
}


function max(n){
  let maxim = n[0];
  for (i=0; i<n.length; i++) {
    if(n[i]>maxim){
      maxim=n[i];
    }
  }
  return console.log(maxim) ;
}

function avg(n){
  
  let sum = 0;
  let count = 0;
  for (let i = 0; i<n.length; i++){
    sum=sum+n[i];
    count++;
  }
  let average = sum/count;
  Math.floor(average);
  return console.log(average) ; 
} */