let content = document.getElementById('ajax-content')
function fetchContent(el) {
    const view = el.getAttribute('a-view')
    const folder = el.getAttribute('a-folder')
    const scriptSRC = el.getAttribute('a-script')

    fetch(`/ajax/${folder}/${view}.html`)
    .then(response => {
        let html =  response.text()
        return html
    })
    .then(html => {
     content.innerHTML = html
     return content
    })
    .then(() => {
        const script = document.createElement('script')
        script.async = true
        script.src = `/js/${scriptSRC}.js`
        document.body.appendChild(script);
    })
}