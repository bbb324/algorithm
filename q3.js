/**
 *
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

    let spend = num - 749; // 按指导价交易，需要额外准备的钱
    let loan = 749 * 0.5; // 贷款首付
    let res = taxSum + spend + loan;
    

    // 一次性拿出来 716
   // console.log(res)
    let monthlyLPR = 18557;
    let monthlyOld = 19900;
    console.log(`一次性拿出来:${res}, LPR月供:${monthlyLPR}, 传统利率月供:${monthlyOld}`)
}
// 按照749贷款

const val = {
    num: 1100, // 业主报价
    design: ∂987, // 政府指导价
    marked: 712, // 备案价
    isfull5: 1,     // 满五
    isOnly: 1    // 唯一
}
console.log(aa(val))