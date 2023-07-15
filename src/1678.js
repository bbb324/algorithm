/**
 * 递归更新字符串
 * @param {*} command 
 * @returns 
 */
var interpret = function(command) {

    if(!(command.includes('()') || command.includes('(al)'))) {
        return command;
    }
    command = command.replace('()', 'o');
    command = command.replace('(al)', 'al');
    return interpret(command);
   
};

console.log(interpret('G()()()()(al)'));