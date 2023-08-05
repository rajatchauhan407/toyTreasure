export function sortWithPending(arr) {
    let arr1 = arr.filter((el) => el.data().donationStatus === "pending");
    let arr2 = arr.filter((el) => el.data().donationStatus !== "pending");
    return [...arr1, ...arr2];
}