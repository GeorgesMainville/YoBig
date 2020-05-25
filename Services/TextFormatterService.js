class TextFormatterService {

    static format(title, fields, description = '', url = 'https://cdn.discordapp.com/embed/avatars/0.png') {
        return {
            "embed": {
                "title": title,
                "description": description,
                "url": "https://www.google.com/", // TODO
                "color": 5332929,
                "footer": {
                    "text": "Made by Etien and Georges",
                },
                "thumbnail": {
                    "url": url
                },
                "fields": fields
            }
        }
    };
}

module.exports = TextFormatterService;