export default function dateFormatter(inputDate) {

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const dateParts = inputDate.split("-");
    const year = dateParts[0];
    const monthIndex = parseInt(dateParts[1]) - 1;
    const day = dateParts[2];

    const monthName = months[monthIndex];

    let dayWithSuffix;
    if (day.endsWith("1") && day !== "11") {
        dayWithSuffix = day + "st";
    } else if (day.endsWith("2") && day !== "12") {
        dayWithSuffix = day + "nd";
    } else if (day.endsWith("3") && day !== "13") {
        dayWithSuffix = day + "rd";
    } else {
        dayWithSuffix = day + "th";
    }

    return `${monthName} ${dayWithSuffix}, ${year}`;

}