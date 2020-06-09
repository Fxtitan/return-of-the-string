/*******************
 * YOUR CODE HERE! *
 *******************/
yell = (string) => {
  return string + '!';
}

getFirstCharacter = (string) => {
  return string[0];
}

getLastCharacter = (string) => {
  return string[string.length-1];
}

getOneCharacter = (character) => {
  return character[1];
}

getTwoCharacters = (str, num1, num2) => {
  return str.charAt(num1) + str.charAt(num2);
}

makeCapitalized = (str) => {
  return str.toUpperCase();
}

yellLouder = (str) => {
  return str.toUpperCase() + '!!!';
}

getInitials = (initials) => {
  const indexOf = initials.indexOf(' ')
  return initials[0] + '.' + initials[indexOf + 1] + '.';
}





/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
