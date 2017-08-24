export default (render_params) => {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${render_params.title}</title>
            </head>
            <body>
                <div id="root">${render_params.body}</div>
                <script>window.__initial_states__=${JSON.stringify(render_params.initialStates)}</script>
                <script src="/static/client.bundle.js"></script>
            </body>
        </html>
    `
}