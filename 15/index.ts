// Original list of people to invite to dinner
let dinnerGuests = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];

// Print invitation messages to the original guests
console.log("Original Invitations:");
console.log("Dear " + dinnerGuests[0] + ", I would be honored to have you join me for dinner.");
console.log("Dear " + dinnerGuests[1] + ", Your pioneering work in computing inspires me. Please join me for dinner.");
console.log("Dear " + dinnerGuests[2] + ", Your dedication to justice and peace is remarkable. I would love to have dinner with you.");

// Simulate a guest who can't make it
let guestWhoCantMakeIt = dinnerGuests[1];
console.log("\nUnfortunately, " + guestWhoCantMakeIt + " can't make it to the dinner.\n");

// Replace the guest who can't make it with a new person
let newGuest = "Marie Curie";
dinnerGuests[1] = newGuest;

// Print invitation messages to the updated list of guests
console.log("Updated Invitations:");
console.log("Dear " + dinnerGuests[0] + ", I would be honored to have you join me for dinner.");
console.log("Dear " + dinnerGuests[1] + ", Your contributions to science are invaluable. Please join me for dinner.");
console.log("Dear " + dinnerGuests[2] + ", Your dedication to justice and peace is remarkable. I would love to have dinner with you.");
