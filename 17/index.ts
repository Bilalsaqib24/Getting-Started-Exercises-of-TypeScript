// Original list of people to invite to dinner
let dinnerGuests = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela", "Isaac Newton", "Marie Curie", "Malala Yousafzai"];

// Print invitation messages to the original guests
console.log("Original Invitations:");
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear " + dinnerGuests[i] + ", I would be honored to have you join me for dinner.");
}

// Simulate that the new dinner table won't arrive in time
console.log("\nUnfortunately, the new dinner table won't arrive in time, and I can only invite two people.\n");

// Remove guests until only two names remain
while (dinnerGuests.length > 2) {
    let removedGuest = dinnerGuests.pop();
    console.log("Sorry, " + removedGuest + ", I can't invite you to dinner.");
}

// Print invitation messages to the remaining two people
console.log("\nInvitations to the remaining two guests:");
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear " + dinnerGuests[i] + ", You're still invited to dinner.");
}

// Remove the last two names from the list to make it empty
dinnerGuests.pop();
dinnerGuests.pop();

// Print the empty list
console.log("\nRemaining guests:", dinnerGuests);
