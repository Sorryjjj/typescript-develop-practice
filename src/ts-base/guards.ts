// 编辑器：补全，自动提示
//
// ts类型保护机制：
// 类型推断，兼容性，保护
//
// 创建类型保护区块
//
enum Type {
  Strong,
  Week,
}

class Java {
  helloJava() {
    console.log("Hello Java");
  }
  java: any;
}

class JavaScript {
  helloJavaScript() {
    console.log("Hello JavaScript");
  }
  js: any;
}

// 类型保护区块
// lang is Java 类型谓词 表明返回值为true的话，lang是java类型
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();

  // 类型保护区块
  if (isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }

  // if ((lang as Java).helloJava) {
  //     (lang as Java).helloJava();
  // } else {
  //     (lang as JavaScript).helloJavaScript();
  // }

  // instanceof 实例
  // if (lang instanceof Java) {
  //     lang.helloJava()
  //     // lang.helloJavaScript()
  // } else {
  //     lang.helloJavaScript()
  // }

  // in 对象中是有包含某个属性
  // if ('java' in lang) {
  //     lang.helloJava()
  // } else {
  //     lang.helloJavaScript()
  // }

  // typeof 判断基本的类型
  // if (typeof x === 'string') {
  //     console.log(x.length)
  // } else {
  //     console.log(x.toFixed(2))
  // }

  return lang;
}

getLanguage(Type.Week, 1);
