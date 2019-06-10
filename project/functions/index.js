const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Sorin!");
});

const createNotification = (notification => {
    return admin.firestore()
        .collection("notifications")
        .add(notification)
        .then(doc => console.log('notification added ', doc)); //36 ----
});

exports.projectCreated = functions.firestore
    .document("projects/{projectId}")
    .onCreate(doc => {
        const project = doc.data();
        const notification = {
            content: "Added a new Project",
            user: `${project.authorFirstname} ${project.authorLastname}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        };

        return createNotification(notification)
    });
