interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

loggingIdentity('abc');
loggingIdentity([1, 2, 3]);

// 类型别名
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}
console.log(
  getName('abc'),
  getName(() => 'from resolver')
);

// 字符串字面量类型
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
  // do something
}

handleEvent(document.getElementById('hello'), 'scroll'); // 没问题
// handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'
