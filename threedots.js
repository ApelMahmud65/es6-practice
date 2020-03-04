
const ages = [22,11,43, 42, 12];
const ages2 = [44,21,12,54];
const ages3 = [43,21,76];
const allAges = ages.concat(ages2).concat([654]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
//console.log(allAges2);

const business = 456;
const minister = 333;
const sochib = 567;
//const maximum = Math.max(business,minister,sochib);

const takaPoysa = [456,22, 666];
const maximum = Math.max(...takaPoysa);
console.log(maximum);