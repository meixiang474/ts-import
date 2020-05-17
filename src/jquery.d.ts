// 定义全局变量
// declare var $: (param: Function) => void;

// 定义全局函数
interface JqueryInstance {
  html: (html: string) => JqueryInstance;
}

// 函数重载
declare function $(readyFunc: () => void): void;
declare function $(selector: string): JqueryInstance;
// 如何对对象进行定义，以及对类进行定义，以及命名空间的嵌套
declare namespace $ {
  namespace fn {
    class init {}
  }
}

// 使用interface实现函数重载
// interface Jquery {
//   (readyFunc: () => void): void;
//   (selector: string): JqueryInstance;
// }
// declare var $: Jquery;

// Es6模块化
declare module 'jquery' {
  // 定义全局函数
  interface JqueryInstance {
    html: (html: string) => JqueryInstance;
  }

  // 函数重载
  function $(readyFunc: () => void): void;
  function $(selector: string): JqueryInstance;
  // 如何对对象进行定义，以及对类进行定义，以及命名空间的嵌套
  namespace $ {
    namespace fn {
      class init {}
    }
  }
  export = $;
}
