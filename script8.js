/* Réaliser un module testant si une année est bissextile. */

function leapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

export {leapYear}
