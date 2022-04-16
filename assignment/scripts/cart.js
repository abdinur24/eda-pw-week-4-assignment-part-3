console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem( item ){
    basket.push(item);
    return true;
}

function listItems(){
    for(i=0; i < basket.length; i++);
    return;
}
console.log(listItems);

function empty(){
    basket.length = 0;
}

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log('Also adding oranges', addItem(' oranges'));
console.log(`Basket is now ${basket}`);

const maxItems = 5;

function isFull(){
    if(basket < maxItems){
        return false;
    } 
    if(basket >= maxItems){
        return true;
    }
}
