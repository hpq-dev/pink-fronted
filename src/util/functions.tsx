
const ROOT = 'http://89.37.212.179/images/';

export function FormatMoney(number: number) {
    return new Intl.NumberFormat().format(number).replaceAll(',', '.');
}

export const _d = (num: number) => num > 9 ? num : '0' + num;

export const formatTime = (time: number) => _d(Math.floor(time / 3600) % 24) + ':' + _d(Math.floor(time / 60) % 60) + ':' + _d(time % 60)

export const formatTime2 = (time: number) => _d(Math.floor(time / 60) % 60) + ':' + _d(time % 60)

export const isRange = (radius: number, x: number, y: number, x2: number, y2: number) => {
    const distance = Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));
    return distance <= radius;
}


export function currentDate() {
    let monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    let today = new Date();
    return `${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}, ${today.getHours() < 10 ? '0' : ''}${today.getHours()}:${today.getMinutes() < 10 ? '0' : ''}${today.getMinutes()}`
}

export function convertDate(timestamp: number) {
    let monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    let today = new Date(timestamp * 1000);
    return `${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}, ${today.getHours() < 10 ? '0' : ''}${today.getHours()}:${today.getMinutes() < 10 ? '0' : ''}${today.getMinutes()}`
}

export function RandomEx(min: number, max: number) {
    return Math.floor(min + Math.random() * (max - min));
}

export function procentage(value: number, maxValue: number) {
    return (100 * value) / maxValue;
}

export function procentageToValue(procent: number, maxValue: number, maxProcentage: number = 100): number {
    return (maxValue / maxProcentage) * procent
}

export function timestamp() {
    return Math.floor(Date.now() / 1000);
}

export const getCarImage = (model: string) => ROOT + `cars/${model}.png`;
export const getSkinImage = (skin: string) => ROOT + `skins/${skin}.png`;
export const getAuctionImage = (auctiontype: string, number: number) => ROOT + `auctions/${auctiontype}/${number}.png`;

export function TextColor(text: string) {
    const regex = /!\{(#[a-fA-F0-9]{6})\}([^!]+)/g;
    const parts = text.split(regex);

    let ret = [];

    for (let i = -1; ++i < parts.length;) {
        if (parts[i][0] === '#') {
            ret.push(<span key={i} style={{ color: `${parts[i]}` }}>{parts[i + 1]}</span>);
            ++i;
        } else ret.push(<span key={i}>{parts[i]}</span>);
    }
    return ret;
}

export const IsInPoint = (x1: number, y1: number, x2: number, y2: number, range: number) => {
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance <= range;
};