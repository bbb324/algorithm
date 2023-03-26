/**
 * 
 * @param {obj} 业主报价
 */
function aa({num, design, marked, isfull5, isOnly}) {
    let quot;
    if(isfull5) {
        quot = (design -  marked) * 0.053; // 增值税
    } else {
        quot = design * 0.053;
    }
    
    let quot2 = design * 0.015; // 契税
    let cost = num * 0.011; // 佣金

    let taxSum = quot + quot2 + cost; // 税费总计

    let spend = num - design; // 按指导价交易，需要额外准备的钱
    let loan = design * 0.6; // 贷款首付
    let res = taxSum + spend + loan;
    
    // console.log(res)
    let monthlyLPR = 19500;
    let monthlyOld = 20910;
     // 一次性拿出来 696
    console.log(`一次性拿出来:${res}, LPR月供:${monthlyLPR}, 传统利率月供:${monthlyOld}`)
    
   
   


}
// 按照指导价贷款
const obj = {
    num: 1050, // 业主报价
    design: 987, // 政府指导价
    marked: 712, // 备案价
    isfull5: 1,     // 满五
    isOnly: 1    // 唯一
}
console.log(aa(obj))