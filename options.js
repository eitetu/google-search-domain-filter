function createForm() {
    chrome.storage.sync.get(['domains'], function(options) {
      let domains = options.domains || [];
      let form = document.getElementById('form');
      let el = document.createElement('textarea');
      el.setAttribute("id", "domains");
      el.setAttribute("rows", 5);
      el.setAttribute("cols", 50);
      el.value = domains.join('\n');
      form.appendChild(el);
    });
  }
  
  createForm();
  
  document.getElementById('optionsSubmit').onclick = function() {
    let domains = document.getElementById('domains').value;
  
    chrome.storage.sync.set({domains: domains.split('\n')});
    window.close();
  }
  