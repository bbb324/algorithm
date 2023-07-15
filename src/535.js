/**
 * 密码解析，输入short, 返回long
 * @param {*} longUrl 
 * @returns 
 */
var encode = function(longUrl) {
    if(this.list === undefined) {
        this.list = [];
    }
    
    this.list.push(longUrl);
    return this.list.indexOf(longUrl);
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return this.list[shortUrl];
};

console.log(decode(encode('xxx')));