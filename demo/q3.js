var balancedString = function(s) {
  const cnt = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
      const c = s[i];
      cnt[idx(c)]++;
  }

  const partial = s.length / 4;
  let res = s.length;

  if (check(cnt, partial)) {
      return 0;
  }
  for (let l = 0, r = 0; l < s.length; l++) {
      while (r < s.length && !check(cnt, partial)) {
          cnt[idx(s[r])]--;
          r++;
      }
      if (!check(cnt, partial)) {
          break;
      }
      res = Math.min(res, r - l);
      cnt[idx(s[l])]++;
  }
  return res;
}

const idx = (c) => {
  return c.charCodeAt() - 'A'.charCodeAt();
}

const check = (cnt, partial) => {
  if (cnt[idx('Q')] > partial || cnt[idx('W')] > partial || cnt[idx('E')] > partial || cnt[idx('R')] > partial) {
      return false;
  }
  return true;
};
console.log(balancedString('QQER'))