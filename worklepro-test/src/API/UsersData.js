export default class UsersData {
    _clientId = 'CKIOr_2KNM6ccqbQQRM9Wyjz9mc6j4YtWOygD64LPkM';
    _pageURL = 'https://api.unsplash.com/photos?page=';
    _statisticImage = 'https://api.unsplash.com/photos/';

    constructor() {}

    async getPageData(pageNumber) {
        const response = await fetch(`${this._pageURL}${pageNumber}&${this.clinetId}`, {
            method: 'GET'
        });

        if (!response.status === 403) {
            throw Error('Превышен лимит запросов!');
        }

        if (!response.status >= 500) {
            throw Error('Какие-то проблемы на серверах нашего API сервиса!');
        }

        const message = await response.json();
        console.log(message)

        let usersData = [];

        for (let user of message) {
			let userObj = {
                id: user.id,
				name: user.user.name,
				linkInst: user.user.instagram_username,
				urlProfileImage: user.user.profile_image.small,
                urlImage: user.urls.regular,
                urlUserProfile: user.user.links.html,
                alt: user.alt_description,
                views: await this.getImageViews(`${user.links.self}`),
                imageStyle: user.width > user.height,
			}

            usersData.push(userObj);
		}

        return usersData;
    }

    async getImageViews(imageURL) {
        const response = await fetch(`${imageURL}/statistics/?${this.clinetId}`, {
            method: 'GET'
        });
        const { views } = await response.json();
        return views.total;
    }

    get clinetId() {
        return `client_id=${this._clientId}`;
    }
}