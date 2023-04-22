chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "downloadFiles") {
      var attachments = document.querySelectorAll(".AttachmentItemRow");
      for (var i = 0; i < attachments.length; i++) {
        var downloadLink = attachments[i].querySelector(".AttachmentNameLink");
        var filename = downloadLink.innerText.trim();
        var url = downloadLink.href;
        chrome.downloads.download({
          url: url,
          filename: filename
        });
      }
    }
  });
  