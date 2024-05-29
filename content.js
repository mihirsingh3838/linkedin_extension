function changePic() {
    let replacementImageURL = chrome.runtime.getURL("download.jpeg"); 
  
    let profilePictureElements = document.getElementsByClassName("     EntityPhoto-circle-3  update-components-actor__avatar-image ember-view");

    console.log("Hello World!");

    for(let i=0; i<profilePictureElements.length; i++){
      console.log(profilePictureElements[i]);
      profilePictureElements[i].src= replacementImageURL;
    }  
  };

  document.addEventListener("DOMContentLoaded", changePic);

  setInterval(changePic, 1000);