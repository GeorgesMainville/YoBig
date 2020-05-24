class TextFormatterService {


    static format(title, fields, withHeader = true, withFooter = true) {
        return {
            "embed": {
                "title": title,
                "description": "this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```",
                "url": "https://discordapp.com",
                "color": 4832929,
                "timestamp": "2020-05-24T17:31:16.072Z",
                "footer": {
                    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
                    "text": "For more information, visit: [our website] https://discordapp.com",
                    "url": "https://discordapp.com",
                },
                "thumbnail": {
                    "url": "https://cdn.discordapp.com/embed/avatars/0.png"
                },
                "fields": fields
            }
        }
    };
}

module.exports = TextFormatterService;