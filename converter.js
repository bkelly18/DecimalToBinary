var input = prompt("Please enter a number");
var input = parseInt(input);
var binary = "";
if (input<0) {
  alert ('Error');
} else if (input>=256) { 
  alert ('Error');
} 
  if (input>=128) {
    input-=128;
    binary += "1"
  } else {
    binary += "0";
  }
  if (input>=64) {
    input-=64;
    binary += "1";
  } else {
    binary += "0";
  }
  if (input>=32) {
    input-=32;
    binary += "1";
  } else {
    binary += "0";
  }
  if (input>=16) {
    input-=16;
    binary += "1";
  } else {
    binary += "0";
  }
  if (input>=8) {
    input-=8;
    binary += "1";
  } else {
    binary += "0";
  }
  if (input>=4) {
    input-=4;
    binary += "1";
  } else {
    binary += "0";
  }
  if (input>=2) {
    input-=2;
    binary += "1";
  } else {
    binary += "0";
  }
  if (input>=1) {
    input-=1;
    binary += "1";
  } else {
    binary += "0";
  }
document.write(binary);







