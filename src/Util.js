exports.parse_cookies = request => {
    var list = {},
    rc = request.headers.cookie;

    rc && rc.split(';').forEach(cookie => {
        var parts = cookie.split('=');
        list[parts.shift().trim()] = decodeURI(parts.join('='));
    });

    return list;
}