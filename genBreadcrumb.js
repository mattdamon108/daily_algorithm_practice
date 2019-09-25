/* Generating the Breadcrumb with given URL
https://www.codewars.com/kata/breadcrumb-generator/train/javascript

BEST Answer

function generateBC(url, separator) {
  var arr = url.replace(/((\/index)?\.(html?|(ph|as)p))|(\?.+|#.+|https?:\/\/|\/$)/g, '').split('/'), link='';
  return arr.map(function(v, i, a) {
    if(a.length === 1) {
      return '<span class="active">HOME</span>'
    } else if(i === a.length -1) {
      return '<span class="active">'+ acronymize(v) +'</span>';   
    } else if(i===0) {
      return '<a href="/">HOME</a>';      
    } else {
      link = link ? link + '/' + v : v; 
      return '<a href="/'+ link +'/">'+ acronymize(v) +'</a>';
    }
  }).join(separator);
}

function acronymize(str) {
  var removeList = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"],
      re = new RegExp("^(" + removeList.join('|') + ")$"), newStr = '';
  if(str.length > 30) {
    str.split('-').forEach(v => !re.test(v) ? newStr += v[0] : undefined);
    return newStr.toUpperCase();
  } else {
    return str.replace(/-/g, ' ').toUpperCase();;
  }
}

*/

const ignoredWords = [
  "the",
  "of",
  "in",
  "from",
  "by",
  "with",
  "and",
  "or",
  "for",
  "to",
  "at",
  "a"
];

function generateBC(url, separator) {
  let httpRemoved = "";
  if (url.slice(0, 4) === "http") {
    httpRemoved = url.slice(8);
  } else if (url.slice(0, 5) === "https") {
    httpRemoved = url.slice(9);
  } else {
    httpRemoved = url;
  }
  const bcs = httpRemoved.split("/");
  let result = [`<a href="/">HOME</a>`];
  const accURL = [];

  if (bcs.length === 1 || (bcs.length === 2 && bcs[1] === "")) {
    return `<span class="active">HOME</span>`;
  }

  for (let i = 1; i < bcs.length; i++) {
    if (bcs[i].split(".")[0] === "index") {
      if (i === 1) {
        result = [`<span class="active">HOME</span>`];
      }
      break;
    }

    accURL.push(bcs[i]);

    if (
      (bcs[i + 1] && bcs[i + 1].split(".")[0] === "index") ||
      i === bcs.length - 1
    ) {
      result.push(`<span class="active">${convertBC(bcs[i])}</span>`);
    } else {
      result.push(`<a href="/${accURL.join("/")}/">${convertBC(bcs[i])}</a>`);
    }
  }
  return result.join(`${separator}`);
}

function removeParameter(str) {
  return str.split("?")[0];
}

function removeAnchor(str) {
  return str.split("#")[0];
}

function removeExtension(str) {
  return str.split(".")[0];
}

function convertBC(str) {
  const paramRemoved = removeParameter(str);
  const anchorRemoved = removeAnchor(paramRemoved);
  const extensionRemoved = removeExtension(anchorRemoved);

  let result = "";
  if (extensionRemoved.length > 30) {
    for (let i of extensionRemoved.split("-")) {
      if (ignoredWords.includes(i)) {
        continue;
      } else {
        result += i[0].toUpperCase();
      }
    }
  } else {
    const splitted = extensionRemoved.split("-");
    return splitted.map(word => word.toUpperCase()).join(" ");
  }
  return result;
}

module.exports = {
  generateBC
};
