function filterResultInserts(event) {
    chrome.storage.sync.get({
        domains: []
    }, function(options) {
        var domains = options.domains || [];
        domains.forEach((d) => {
            var regexp = new RegExp('^(http|https):\\/\\/' + d.replace(/\./gi, '\\.') + '.*$', 'gi');
            var el = Array.prototype.filter.call(document.querySelectorAll('.srg>.g'), (v) => {
                var e = v.querySelector('.rc>.r>a');
                if(e.host == d) {
                    return true;
                }

                if(regexp.test(e.getAttribute('href'))) {
                    return true;
                }

                return false;
            });
            
            el.forEach((v) => v.parentNode.removeChild(v));
        });
    });
}
  
window.addEventListener('load', filterResultInserts);