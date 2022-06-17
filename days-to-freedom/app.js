// Get nodemailer to handle sending emails via Node.JS
var nodemailer = require("nodemailer");

// Declare useful variables.

var freedomDay = new Date("04/27/2022");
var daysToGo = setDaysToGo();
var remindersSinceLastReset = 0;

// Declare variables for authorizing email, as well as the recipient information.
var transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "",
    pass: "",
  },
});

var freedomEmail = {
  from: "",
  to: "",
  subject: "",
  text: "",
};



function automaticReminder() {
  // This is the reminder app. Based on days left, it will alter the email text and send it.
  // It will also check to be sure the reminder is reset if necessary.
  daysToGo = setDaysToGo();

  if (daysToGo === 0) {
    freedomEmail.text =
      "You are finally free!!! You can work anywhere you want now... if they'll hire you.";
    sendFreedomEmail();
    clearReminder();
  } else {
    freedomEmail.text =
      "You still are not free. You have " +
      daysToGo.toString() +
      " days to go until your contract is over.";
    sendFreedomEmail();
    resetTheReminder();
  }
}

function setDaysToGo() {
    var date = new Date();
    var days = Math.round(
    (freedomDay.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );
  if (days < 0) {
    days = 0;   // Catch if days rounds to -1.
  }
  return days;
}

//  Sends the email, logs response information, increments the number of emails sent so far.
function sendFreedomEmail() {
  transporter.sendMail(freedomEmail, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      remindersSinceLastReset += 1;
      console.log(
        "Total emails sent since last reset: " +
          remindersSinceLastReset.toString()
      );
    }
  });
}

// Resets the automaticReminder if exceeds 20 emails. Interval length is locked to about 24 days.
// I needed 40 days worth of reminders. This fix allows unlimited reminders.
function resetTheReminder() {
  if (remindersSinceLastReset === 20 && daysToGo > 0) {
    clearInterval(reminderTimeout);
    reminderTimeout = setInterval(automaticReminder, 1000 * 60 * 60 * 24);
    remindersSinceLastReset = 0;
  }

  //   clearReminder();       Don't believe this is needed anymore, but will review later.
}

function clearReminder() {
  if (daysToGo === 0) {
    clearInterval(reminderTimeout);
  }
}

// Starts the program.
var reminderTimeout = setInterval(automaticReminder, 1000 * 60 * 60 * 24);