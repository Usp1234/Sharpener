console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const getButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('Butter'), 3000);
  });
  
   const getColdDrink =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('ColdDrink'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;
  
    let [ popcorn, Butter, ColdDrink ] =
    await Promise.all([ getPopcorn, getButter, getColdDrink ]);

    console.log(`got ${popcorn}, ${Butter}, ${ColdDrink}`);

  
  return ticket;
  
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');
