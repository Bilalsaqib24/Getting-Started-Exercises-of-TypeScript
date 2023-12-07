// Original list of people to invite to dinner
var dinnerGuests = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
// Print invitation messages to the original guests
console.log("Original Invitations:");
console.log("Dear " + dinnerGuests[0] + ", I would be honored to have you join me for dinner.");
console.log("Dear " + dinnerGuests[1] + ", Your contributions to science are invaluable. Please join me for dinner.");
console.log("Dear " + dinnerGuests[2] + ", Your dedication to justice and peace is remarkable. I would love to have dinner with you.");
// Simulate a guest who can't make it
var guestWhoCantMakeIt = dinnerGuests[1];
console.log("\nUnfortunately, " + guestWhoCantMakeIt + " can't make it to the dinner.\n");
// Replace the guest who can't make it with a new person
var newGuest = "Marie Curie";
dinnerGuests[1] = newGuest;
// Print invitation messages to the updated list of guests
console.log("Updated Invitations:");
console.log("Dear " + dinnerGuests[0] + ", I would be honored to have you join me for dinner.");
console.log("Dear " + dinnerGuests[1] + ", Your contributions to science are invaluable. Please join me for dinner.");
console.log("Dear " + dinnerGuests[2] + ", Your dedication to justice and peace is remarkable. I would love to have dinner with you.");
// Inform that a bigger dinner table is available
console.log("\nGood news! I found a bigger dinner table.\n");
// Add three more guests to the list
dinnerGuests.unshift("Isaac Newton"); // Add to the beginning
dinnerGuests.splice(2, 0, "Marie Curie"); // Add to the middle
dinnerGuests.push("Malala Yousafzai"); // Add to the end
// Print invitation messages to the updated list of guests
console.log("Final Invitations:");
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear " + dinnerGuests[i] + ", I would be honored to have you join me for dinner.");
}
