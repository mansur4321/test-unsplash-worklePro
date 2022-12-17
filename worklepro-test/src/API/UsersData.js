export default class UsersData {
    _clientId = 'xv5xcguRNO1pSxm3sisjL5uUIhp8AGLB_B-CN3b33NM';
    _pageURL = 'https://api.unsplash.com/photos?page=';

    constructor() {}

    async getPageData(pageNumber) {
        console.log(`${this._pageURL}${pageNumber}${this.clinetId}`)
        const response = await fetch(`${this._pageURL}${pageNumber}${this.clinetId}`, {
            method: 'GET'
        });
        const message = await response.json();
        console.log(message)
        return message;
    }

    get clinetId() {
        return `&client_id=${this._clientId}`;
    }
}