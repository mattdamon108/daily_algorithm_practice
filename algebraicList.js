/*
1. Data Structure
2. Recursive function, not closure
3. Nested recursive

Best Answer

Cons.fromArray = function(array) {
  return array.reduceRight(function(list, e) { return new Cons(e, list); }, null);
};
Cons.prototype.filter = function(predicate) {
  var tail = this.tail && this.tail.filter(predicate);
  return predicate(this.head) ? new Cons(this.head, tail) : tail;
};
Cons.prototype.map = function(mapper)    {
  return new Cons(mapper(this.head), this.tail && this.tail.map(mapper));
};

*/
function Cons(head, tail) {
  this.head = head;
  this.tail = tail;
}

function toArray(list) {
  if (list) {
    const more = list.tail;
    return [list.head].concat(more ? toArray(more) : []);
  }
  return [];
}

function fromArray(array) {
  if (array.length > 0) {
    const rest = array.slice(1);
    return new Cons(array[0], rest.length !== 0 ? fromArray(rest) : null);
  }

  return new Cons(null, null);
}

function filter(list, predicate) {
  if (list) {
    const more = list.tail;
    if (predicate(list.head)) {
      return new Cons(list.head, more ? filter(more, predicate) : null);
    } else {
      return filter(more, predicate);
    }
  }

  return null;
}

function map(list, mapper) {
  if (list) {
    const more = list.tail;
    return new Cons(mapper(list.head), more ? map(more, mapper) : null);
  }
}

Cons.prototype.toArray = function () {
  return toArray(this);
};

Cons.fromArray = function (array) {
  return fromArray(array);
};

Cons.prototype.filter = function (predicate) {
  return filter(this, predicate);
};

Cons.prototype.map = function (mapper) {
  return map(this, mapper);
};

module.exports = Cons;
