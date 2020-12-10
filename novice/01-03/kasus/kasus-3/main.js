function calculateSuppyl(age, numPerDay){
    let maxAge = 90;
    let totalNeeded = (numPerDay * 365) * (maxAge - age);
    let show = "You will need " + totalNeeded + " cups of coffee to last you until the ripe old age of " + maxAge;
    console.log(show);
}
calculateSuppyl(70, 4);