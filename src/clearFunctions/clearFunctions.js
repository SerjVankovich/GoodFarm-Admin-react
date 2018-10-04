export function encode(data) {
    const str = data.reduce((a,b) => a+String.fromCharCode(b),'');
    return btoa(str).replace(/.{76}(?=.)/g,'$&\n');
}
