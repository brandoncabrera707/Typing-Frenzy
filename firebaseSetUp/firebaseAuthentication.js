require('/Users/brandoncabrera/Desktop/Typing_Frenzy/firebaseSetUp/firebase.js'); //firestore setup


function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: " + response.credential);
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "381628760234-8sfi5rnkb2jvl5t744i0vucg5m8bodbk.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById('buttonDiv'),
    { theme: "outline", size: "large" }  // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
}
