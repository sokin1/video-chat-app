export default ({body, title, initialStates}) => {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
            </head>
            <body>
                <div id="root">${body}</div>
                <script>window.__initial_states__=${initialStates}</script>
                <script src="/static/client.bundle.js"></script>
            </body>
        </html>
    `
}