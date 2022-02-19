// node_modules/reps-do/out/index.mjs
function must(arg, msg = "Unexpected undefined value") {
  if (arg === void 0) {
    throw new Error(msg);
  }
  return arg;
}
var extendStatics = function(e, t) {
  return (extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e2, t2) {
    e2.__proto__ = t2;
  } || function(e2, t2) {
    for (var r in t2)
      Object.prototype.hasOwnProperty.call(t2, r) && (e2[r] = t2[r]);
  })(e, t);
};
function __extends(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function r() {
    this.constructor = e;
  }
  extendStatics(e, t), e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var util;
var __assign = function() {
  return (__assign = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++)
      for (var a in t = arguments[r])
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e;
  }).apply(this, arguments);
};
function __awaiter(e, s, i, u) {
  return new (i = i || Promise)(function(r, t) {
    function n(e2) {
      try {
        o(u.next(e2));
      } catch (e3) {
        t(e3);
      }
    }
    function a(e2) {
      try {
        o(u.throw(e2));
      } catch (e3) {
        t(e3);
      }
    }
    function o(e2) {
      var t2;
      e2.done ? r(e2.value) : ((t2 = e2.value) instanceof i ? t2 : new i(function(e3) {
        e3(t2);
      })).then(n, a);
    }
    o((u = u.apply(e, s || [])).next());
  });
}
function __generator(r, n) {
  var a, o, s, i = { label: 0, sent: function() {
    if (1 & s[0])
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, e = { next: t(0), throw: t(1), return: t(2) };
  return typeof Symbol == "function" && (e[Symbol.iterator] = function() {
    return this;
  }), e;
  function t(t2) {
    return function(e2) {
      return function(t3) {
        if (a)
          throw new TypeError("Generator is already executing.");
        for (; i; )
          try {
            if (a = 1, o && (s = 2 & t3[0] ? o.return : t3[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, t3[1])).done)
              return s;
            switch (o = 0, (t3 = s ? [2 & t3[0], s.value] : t3)[0]) {
              case 0:
              case 1:
                s = t3;
                break;
              case 4:
                return i.label++, { value: t3[1], done: false };
              case 5:
                i.label++, o = t3[1], t3 = [0];
                continue;
              case 7:
                t3 = i.ops.pop(), i.trys.pop();
                continue;
              default:
                if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (t3[0] === 6 || t3[0] === 2)) {
                  i = 0;
                  continue;
                }
                if (t3[0] === 3 && (!s || t3[1] > s[0] && t3[1] < s[3])) {
                  i.label = t3[1];
                  break;
                }
                if (t3[0] === 6 && i.label < s[1]) {
                  i.label = s[1], s = t3;
                  break;
                }
                if (s && i.label < s[2]) {
                  i.label = s[2], i.ops.push(t3);
                  break;
                }
                s[2] && i.ops.pop(), i.trys.pop();
                continue;
            }
            t3 = n.call(r, i);
          } catch (e3) {
            t3 = [6, e3], o = 0;
          } finally {
            a = s = 0;
          }
        if (5 & t3[0])
          throw t3[1];
        return { value: t3[0] ? t3[1] : void 0, done: true };
      }([t2, e2]);
    };
  }
}
function __values(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return { next: function() {
      return { value: (e = e && n >= e.length ? void 0 : e) && e[n++], done: !e };
    } };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n, a, o = r.call(e), s = [];
  try {
    for (; (t === void 0 || 0 < t--) && !(n = o.next()).done; )
      s.push(n.value);
  } catch (e2) {
    a = { error: e2 };
  } finally {
    try {
      n && !n.done && (r = o.return) && r.call(o);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return s;
}
function __spreadArray(e, t, r) {
  if (r || arguments.length === 2)
    for (var n, a = 0, o = t.length; a < o; a++)
      !n && a in t || ((n = n || Array.prototype.slice.call(t, 0, a))[a] = t[a]);
  return e.concat(n || Array.prototype.slice.call(t));
}
!function(u) {
  u.assertNever = function(e) {
    throw new Error();
  }, u.arrayToEnum = function(e) {
    var t, r, n = {};
    try {
      for (var a = __values(e), o = a.next(); !o.done; o = a.next()) {
        var s = o.value;
        n[s] = s;
      }
    } catch (e2) {
      t = { error: e2 };
    } finally {
      try {
        o && !o.done && (r = a.return) && r.call(a);
      } finally {
        if (t)
          throw t.error;
      }
    }
    return n;
  }, u.getValidEnumValues = function(t) {
    var r, e, n = u.objectKeys(t).filter(function(e2) {
      return typeof t[t[e2]] != "number";
    }), a = {};
    try {
      for (var o = __values(n), s = o.next(); !s.done; s = o.next()) {
        var i = s.value;
        a[i] = t[i];
      }
    } catch (e2) {
      r = { error: e2 };
    } finally {
      try {
        s && !s.done && (e = o.return) && e.call(o);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return u.objectValues(a);
  }, u.objectValues = function(t) {
    return u.objectKeys(t).map(function(e) {
      return t[e];
    });
  }, u.objectKeys = typeof Object.keys == "function" ? function(e) {
    return Object.keys(e);
  } : function(e) {
    var t, r = [];
    for (t in e)
      Object.prototype.hasOwnProperty.call(e, t) && r.push(t);
    return r;
  }, u.find = function(e, t) {
    var r, n;
    try {
      for (var a = __values(e), o = a.next(); !o.done; o = a.next()) {
        var s = o.value;
        if (t(s))
          return s;
      }
    } catch (e2) {
      r = { error: e2 };
    } finally {
      try {
        o && !o.done && (n = a.return) && n.call(a);
      } finally {
        if (r)
          throw r.error;
      }
    }
  }, u.isInteger = typeof Number.isInteger == "function" ? function(e) {
    return Number.isInteger(e);
  } : function(e) {
    return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
  };
}(util = util || {});
var ZodIssueCode = util.arrayToEnum(["invalid_type", "custom", "invalid_union", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of"]);
var quotelessJson = function(e) {
  return JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
};
var ZodError = function(r) {
  function t(e) {
    var t2 = this.constructor, u = r.call(this) || this;
    u.issues = [], u.format = function() {
      var p = { _errors: [] }, c = function(e2) {
        var t3, r2;
        try {
          for (var n = __values(e2.issues), a = n.next(); !a.done; a = n.next()) {
            var o = a.value;
            if (o.code === "invalid_union")
              o.unionErrors.map(c);
            else if (o.code === "invalid_return_type")
              c(o.returnTypeError);
            else if (o.code === "invalid_arguments")
              c(o.argumentsError);
            else if (o.path.length === 0)
              p._errors.push(o.message);
            else
              for (var s = p, i = 0; i < o.path.length; ) {
                var u2, d = o.path[i];
                i === o.path.length - 1 ? (s[d] = s[d] || { _errors: [] }, s[d]._errors.push(o.message)) : typeof d == "string" ? s[d] = s[d] || { _errors: [] } : typeof d == "number" && ((u2 = [])._errors = [], s[d] = s[d] || u2), s = s[d], i++;
              }
          }
        } catch (e3) {
          t3 = { error: e3 };
        } finally {
          try {
            a && !a.done && (r2 = n.return) && r2.call(n);
          } finally {
            if (t3)
              throw t3.error;
          }
        }
      };
      return c(u), p;
    }, u.addIssue = function(e2) {
      u.issues = __spreadArray(__spreadArray([], __read(u.issues), false), [e2], false);
    }, u.addIssues = function(e2) {
      e2 === void 0 && (e2 = []), u.issues = __spreadArray(__spreadArray([], __read(u.issues), false), __read(e2), false);
    }, u.flatten = function(e2) {
      var t3, r2;
      e2 === void 0 && (e2 = function(e3) {
        return e3.message;
      });
      var n = {}, a = [];
      try {
        for (var o = __values(u.issues), s = o.next(); !s.done; s = o.next()) {
          var i = s.value;
          0 < i.path.length ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(e2(i))) : a.push(e2(i));
        }
      } catch (e3) {
        t3 = { error: e3 };
      } finally {
        try {
          s && !s.done && (r2 = o.return) && r2.call(o);
        } finally {
          if (t3)
            throw t3.error;
        }
      }
      return { formErrors: a, fieldErrors: n };
    };
    t2 = t2.prototype;
    return Object.setPrototypeOf ? Object.setPrototypeOf(u, t2) : u.__proto__ = t2, u.name = "ZodError", u.issues = e, u;
  }
  return __extends(t, r), Object.defineProperty(t.prototype, "errors", { get: function() {
    return this.issues;
  }, enumerable: false, configurable: true }), t.prototype.toString = function() {
    return this.message;
  }, Object.defineProperty(t.prototype, "message", { get: function() {
    return JSON.stringify(this.issues, null, 2);
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "isEmpty", { get: function() {
    return this.issues.length === 0;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "formErrors", { get: function() {
    return this.flatten();
  }, enumerable: false, configurable: true }), t.create = function(e) {
    return new t(e);
  }, t;
}(Error);
var defaultErrorMap = function(e, t) {
  var r;
  switch (e.code) {
    case ZodIssueCode.invalid_type:
      r = e.received === "undefined" ? "Required" : "Expected " + e.expected + ", received " + e.received;
      break;
    case ZodIssueCode.unrecognized_keys:
      r = "Unrecognized key(s) in object: " + e.keys.map(function(e2) {
        return "'" + e2 + "'";
      }).join(", ");
      break;
    case ZodIssueCode.invalid_union:
      r = "Invalid input";
      break;
    case ZodIssueCode.invalid_enum_value:
      r = "Invalid enum value. Expected " + e.options.map(function(e2) {
        return typeof e2 == "string" ? "'" + e2 + "'" : e2;
      }).join(" | ") + ", received " + (typeof t.data == "string" ? "'" + t.data + "'" : t.data);
      break;
    case ZodIssueCode.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case ZodIssueCode.invalid_return_type:
      r = "Invalid function return type";
      break;
    case ZodIssueCode.invalid_date:
      r = "Invalid date";
      break;
    case ZodIssueCode.invalid_string:
      r = e.validation !== "regex" ? "Invalid " + e.validation : "Invalid";
      break;
    case ZodIssueCode.too_small:
      r = e.type === "array" ? "Should have " + (e.inclusive ? "at least" : "more than") + " " + e.minimum + " items" : e.type === "string" ? "Should be " + (e.inclusive ? "at least" : "over") + " " + e.minimum + " characters" : e.type === "number" ? "Value should be greater than " + (e.inclusive ? "or equal to " : "") + e.minimum : "Invalid input";
      break;
    case ZodIssueCode.too_big:
      r = e.type === "array" ? "Should have " + (e.inclusive ? "at most" : "less than") + " " + e.maximum + " items" : e.type === "string" ? "Should be " + (e.inclusive ? "at most" : "under") + " " + e.maximum + " characters long" : e.type === "number" ? "Value should be less than " + (e.inclusive ? "or equal to " : "") + e.maximum : "Invalid input";
      break;
    case ZodIssueCode.custom:
      r = "Invalid input";
      break;
    case ZodIssueCode.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case ZodIssueCode.not_multiple_of:
      r = "Should be multiple of " + e.multipleOf;
      break;
    default:
      r = t.defaultError, util.assertNever(e);
  }
  return { message: r };
};
var overrideErrorMap = defaultErrorMap;
var setErrorMap = function(e) {
  overrideErrorMap = e;
};
var ZodParsedType = util.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
function cacheAndReturn(e, t, r) {
  return r && r.set(e, t), t;
}
var getParsedType = function(e, t) {
  if (t && t.has(e))
    return t.get(e);
  switch (typeof e) {
    case "undefined":
      return cacheAndReturn(e, ZodParsedType.undefined, t);
    case "string":
      return cacheAndReturn(e, ZodParsedType.string, t);
    case "number":
      return cacheAndReturn(e, isNaN(e) ? ZodParsedType.nan : ZodParsedType.number, t);
    case "boolean":
      return cacheAndReturn(e, ZodParsedType.boolean, t);
    case "function":
      return cacheAndReturn(e, ZodParsedType.function, t);
    case "bigint":
      return cacheAndReturn(e, ZodParsedType.bigint, t);
    case "object":
      return Array.isArray(e) ? cacheAndReturn(e, ZodParsedType.array, t) : e === null ? cacheAndReturn(e, ZodParsedType.null, t) : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? cacheAndReturn(e, ZodParsedType.promise, t) : e instanceof Map ? cacheAndReturn(e, ZodParsedType.map, t) : e instanceof Set ? cacheAndReturn(e, ZodParsedType.set, t) : e instanceof Date ? cacheAndReturn(e, ZodParsedType.date, t) : cacheAndReturn(e, ZodParsedType.object, t);
    default:
      return cacheAndReturn(e, ZodParsedType.unknown, t);
  }
};
var makeIssue = function(e) {
  var t, r, n = e.data, a = e.path, o = e.errorMaps, e = e.issueData, a = __spreadArray(__spreadArray([], __read(a), false), __read(e.path || []), false), s = __assign(__assign({}, e), { path: a }), i = "", o = o.filter(function(e2) {
    return !!e2;
  }).slice().reverse();
  try {
    for (var u = __values(o), d = u.next(); !d.done; d = u.next())
      i = (0, d.value)(s, { data: n, defaultError: i }).message;
  } catch (e2) {
    t = { error: e2 };
  } finally {
    try {
      d && !d.done && (r = u.return) && r.call(u);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return __assign(__assign({}, e), { path: a, message: e.message || i });
};
var EMPTY_PATH = [];
function addIssueToContext(e, t) {
  t = makeIssue({ issueData: t, data: e.data, path: e.path, errorMaps: [e.contextualErrorMap, e.schemaErrorMap, overrideErrorMap, defaultErrorMap].filter(function(e2) {
    return !!e2;
  }) });
  e.issues.push(t);
}
var errorUtil;
var ParseStatus = function() {
  function l() {
    this.value = "valid";
  }
  return l.prototype.dirty = function() {
    this.value === "valid" && (this.value = "dirty");
  }, l.prototype.abort = function() {
    this.value !== "aborted" && (this.value = "aborted");
  }, l.mergeArray = function(e, t) {
    var r, n, a = [];
    try {
      for (var o = __values(t), s = o.next(); !s.done; s = o.next()) {
        var i = s.value;
        if (i.status === "aborted")
          return INVALID;
        i.status === "dirty" && e.dirty(), a.push(i.value);
      }
    } catch (e2) {
      r = { error: e2 };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return { status: e.value, value: a };
  }, l.mergeObjectAsync = function(p, c) {
    return __awaiter(this, void 0, void 0, function() {
      var t, r, n, a, o, s, i, u, d;
      return __generator(this, function(e) {
        switch (e.label) {
          case 0:
            t = [], e.label = 1;
          case 1:
            e.trys.push([1, 7, 8, 9]), r = __values(c), n = r.next(), e.label = 2;
          case 2:
            return n.done ? [3, 6] : (a = n.value, s = (o = t).push, d = {}, [4, a.key]);
          case 3:
            return d.key = e.sent(), [4, a.value];
          case 4:
            s.apply(o, [(d.value = e.sent(), d)]), e.label = 5;
          case 5:
            return n = r.next(), [3, 2];
          case 6:
            return [3, 9];
          case 7:
            return i = e.sent(), i = { error: i }, [3, 9];
          case 8:
            try {
              n && !n.done && (u = r.return) && u.call(r);
            } finally {
              if (i)
                throw i.error;
            }
            return [7];
          case 9:
            return [2, l.mergeObjectSync(p, t)];
        }
      });
    });
  }, l.mergeObjectSync = function(e, t) {
    var r, n, a = {};
    try {
      for (var o = __values(t), s = o.next(); !s.done; s = o.next()) {
        var i = s.value, u = i.key, d = i.value;
        if (u.status === "aborted")
          return INVALID;
        if (d.status === "aborted")
          return INVALID;
        u.status === "dirty" && e.dirty(), d.status === "dirty" && e.dirty(), d.value === void 0 && !i.alwaysSet || (a[u.value] = d.value);
      }
    } catch (e2) {
      r = { error: e2 };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return { status: e.value, value: a };
  }, l;
}();
var INVALID = Object.freeze({ status: "aborted" });
var DIRTY = function(e) {
  return { status: "dirty", value: e };
};
var OK = function(e) {
  return { status: "valid", value: e };
};
var isAborted = function(e) {
  return e.status === "aborted";
};
var isDirty = function(e) {
  return e.status === "dirty";
};
var isValid = function(e) {
  return e.status === "valid";
};
var isAsync = function(e) {
  return e instanceof Promise;
};
!function(e) {
  e.errToObj = function(e2) {
    return typeof e2 == "string" ? { message: e2 } : e2 || {};
  }, e.toString = function(e2) {
    return typeof e2 == "string" ? e2 : e2 == null ? void 0 : e2.message;
  };
}(errorUtil = errorUtil || {});
var handleResult = function(e, t) {
  if (isValid(t))
    return { success: true, data: t.value };
  if (!e.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return { success: false, error: new ZodError(e.issues) };
};
function processCreateParams(r) {
  if (!r)
    return {};
  if (r.errorMap && (r.invalid_type_error || r.required_error))
    throw new Error(`Can't use "invalid" or "required" in conjunction with custom error map.`);
  if (r.errorMap)
    return { errorMap: r.errorMap };
  return { errorMap: function(e, t) {
    return e.code !== "invalid_type" ? { message: t.defaultError } : t.data === void 0 && r.required_error ? { message: r.required_error } : r.invalid_type_error ? { message: r.invalid_type_error } : { message: t.defaultError };
  } };
}
var objectUtil;
var ZodType = function() {
  function e(e2) {
    this.spa = this.safeParseAsync, this.superRefine = this._refinement, this._def = e2, this.transform = this.transform.bind(this), this.default = this.default.bind(this);
  }
  return Object.defineProperty(e.prototype, "description", { get: function() {
    return this._def.description;
  }, enumerable: false, configurable: true }), e.prototype._processInputParams = function(e2) {
    return { status: new ParseStatus(), ctx: __assign(__assign({}, e2.parent), { data: e2.data, parsedType: getParsedType(e2.data, e2.parent.typeCache), schemaErrorMap: this._def.errorMap, path: e2.path, parent: e2.parent }) };
  }, e.prototype._parseSync = function(e2) {
    e2 = this._parse(e2);
    if (isAsync(e2))
      throw new Error("Synchronous parse encountered promise.");
    return e2;
  }, e.prototype._parseAsync = function(e2) {
    e2 = this._parse(e2);
    return Promise.resolve(e2);
  }, e.prototype.parse = function(e2, t) {
    t = this.safeParse(e2, t);
    if (t.success)
      return t.data;
    throw t.error;
  }, e.prototype.safeParse = function(e2, t) {
    t = { path: (t == null ? void 0 : t.path) || [], issues: [], contextualErrorMap: t == null ? void 0 : t.errorMap, schemaErrorMap: this._def.errorMap, async: (t = t == null ? void 0 : t.async) !== null && t !== void 0 && t, typeCache: /* @__PURE__ */ new Map(), parent: null, data: e2, parsedType: getParsedType(e2) }, e2 = this._parseSync({ data: e2, path: t.path, parent: t });
    return handleResult(t, e2);
  }, e.prototype.parseAsync = function(r, n) {
    return __awaiter(this, void 0, void 0, function() {
      var t;
      return __generator(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, this.safeParseAsync(r, n)];
          case 1:
            if ((t = e2.sent()).success)
              return [2, t.data];
            throw t.error;
        }
      });
    });
  }, e.prototype.safeParseAsync = function(n, a) {
    return __awaiter(this, void 0, void 0, function() {
      var t, r;
      return __generator(this, function(e2) {
        switch (e2.label) {
          case 0:
            return t = { path: (a == null ? void 0 : a.path) || [], issues: [], contextualErrorMap: a == null ? void 0 : a.errorMap, schemaErrorMap: this._def.errorMap, async: true, typeCache: /* @__PURE__ */ new Map(), parent: null, data: n, parsedType: getParsedType(n) }, r = this._parse({ data: n, path: [], parent: t }), [4, isAsync(r) ? r : Promise.resolve(r)];
          case 1:
            return r = e2.sent(), [2, handleResult(t, r)];
        }
      });
    });
  }, e.prototype.refine = function(a, o) {
    return this._refinement(function(t, r) {
      function n() {
        return r.addIssue(__assign({ code: ZodIssueCode.custom }, (e3 = t, typeof o == "string" || o === void 0 ? { message: o } : typeof o == "function" ? o(e3) : o)));
        var e3;
      }
      var e2 = a(t);
      return e2 instanceof Promise ? e2.then(function(e3) {
        return !!e3 || (n(), false);
      }) : !!e2 || (n(), false);
    });
  }, e.prototype.refinement = function(r, n) {
    return this._refinement(function(e2, t) {
      return !!r(e2) || (t.addIssue(typeof n == "function" ? n(e2, t) : n), false);
    });
  }, e.prototype._refinement = function(e2) {
    return new ZodEffects({ schema: this, typeName: ZodFirstPartyTypeKind.ZodEffects, effect: { type: "refinement", refinement: e2 } });
  }, e.prototype.optional = function() {
    return ZodOptional.create(this);
  }, e.prototype.nullable = function() {
    return ZodNullable.create(this);
  }, e.prototype.nullish = function() {
    return this.optional().nullable();
  }, e.prototype.array = function() {
    return ZodArray.create(this);
  }, e.prototype.promise = function() {
    return ZodPromise.create(this);
  }, e.prototype.or = function(e2) {
    return ZodUnion.create([this, e2]);
  }, e.prototype.and = function(e2) {
    return ZodIntersection.create(this, e2);
  }, e.prototype.transform = function(e2) {
    return new ZodEffects({ schema: this, typeName: ZodFirstPartyTypeKind.ZodEffects, effect: { type: "transform", transform: e2 } });
  }, e.prototype.default = function(e2) {
    return new ZodDefault({ innerType: this, defaultValue: typeof e2 == "function" ? e2 : function() {
      return e2;
    }, typeName: ZodFirstPartyTypeKind.ZodDefault });
  }, e.prototype.describe = function(e2) {
    return new this.constructor(__assign(__assign({}, this._def), { description: e2 }));
  }, e.prototype.isOptional = function() {
    return this.safeParse(void 0).success;
  }, e.prototype.isNullable = function() {
    return this.safeParse(null).success;
  }, e;
}();
var cuidRegex = /^c[^\s-]{8,}$/i;
var uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var ZodString = function(e) {
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n._regex = function(t2, e2, r) {
      return n.refinement(function(e3) {
        return t2.test(e3);
      }, __assign({ validation: e2, code: ZodIssueCode.invalid_string }, errorUtil.errToObj(r)));
    }, n.nonempty = function(e2) {
      return n.min(1, errorUtil.errToObj(e2));
    }, n;
  }
  return __extends(t, e), t.prototype._parse = function(e2) {
    var t2, r, e2 = this._processInputParams(e2), n = e2.status, a = e2.ctx;
    if (a.parsedType !== ZodParsedType.string)
      return addIssueToContext(a, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.string, received: a.parsedType }), INVALID;
    try {
      for (var o = __values(this._def.checks), s = o.next(); !s.done; s = o.next()) {
        var i = s.value;
        if (i.kind === "min")
          a.data.length < i.value && (addIssueToContext(a, { code: ZodIssueCode.too_small, minimum: i.value, type: "string", inclusive: true, message: i.message }), n.dirty());
        else if (i.kind === "max")
          a.data.length > i.value && (addIssueToContext(a, { code: ZodIssueCode.too_big, maximum: i.value, type: "string", inclusive: true, message: i.message }), n.dirty());
        else if (i.kind === "email")
          emailRegex.test(a.data) || (addIssueToContext(a, { validation: "email", code: ZodIssueCode.invalid_string, message: i.message }), n.dirty());
        else if (i.kind === "uuid")
          uuidRegex.test(a.data) || (addIssueToContext(a, { validation: "uuid", code: ZodIssueCode.invalid_string, message: i.message }), n.dirty());
        else if (i.kind === "cuid")
          cuidRegex.test(a.data) || (addIssueToContext(a, { validation: "cuid", code: ZodIssueCode.invalid_string, message: i.message }), n.dirty());
        else if (i.kind === "url")
          try {
            new URL(a.data);
          } catch (e3) {
            addIssueToContext(a, { validation: "url", code: ZodIssueCode.invalid_string, message: i.message }), n.dirty();
          }
        else
          i.kind === "regex" && (i.regex.lastIndex = 0, i.regex.test(a.data) || (addIssueToContext(a, { validation: "regex", code: ZodIssueCode.invalid_string, message: i.message }), n.dirty()));
      }
    } catch (e3) {
      t2 = { error: e3 };
    } finally {
      try {
        s && !s.done && (r = o.return) && r.call(o);
      } finally {
        if (t2)
          throw t2.error;
      }
    }
    return { status: n.value, value: a.data };
  }, t.prototype._addCheck = function(e2) {
    return new t(__assign(__assign({}, this._def), { checks: __spreadArray(__spreadArray([], __read(this._def.checks), false), [e2], false) }));
  }, t.prototype.email = function(e2) {
    return this._addCheck(__assign({ kind: "email" }, errorUtil.errToObj(e2)));
  }, t.prototype.url = function(e2) {
    return this._addCheck(__assign({ kind: "url" }, errorUtil.errToObj(e2)));
  }, t.prototype.uuid = function(e2) {
    return this._addCheck(__assign({ kind: "uuid" }, errorUtil.errToObj(e2)));
  }, t.prototype.cuid = function(e2) {
    return this._addCheck(__assign({ kind: "cuid" }, errorUtil.errToObj(e2)));
  }, t.prototype.regex = function(e2, t2) {
    return this._addCheck(__assign({ kind: "regex", regex: e2 }, errorUtil.errToObj(t2)));
  }, t.prototype.min = function(e2, t2) {
    return this._addCheck(__assign({ kind: "min", value: e2 }, errorUtil.errToObj(t2)));
  }, t.prototype.max = function(e2, t2) {
    return this._addCheck(__assign({ kind: "max", value: e2 }, errorUtil.errToObj(t2)));
  }, t.prototype.length = function(e2, t2) {
    return this.min(e2, t2).max(e2, t2);
  }, Object.defineProperty(t.prototype, "isEmail", { get: function() {
    return !!this._def.checks.find(function(e2) {
      return e2.kind === "email";
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "isURL", { get: function() {
    return !!this._def.checks.find(function(e2) {
      return e2.kind === "url";
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "isUUID", { get: function() {
    return !!this._def.checks.find(function(e2) {
      return e2.kind === "uuid";
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "isCUID", { get: function() {
    return !!this._def.checks.find(function(e2) {
      return e2.kind === "cuid";
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "minLength", { get: function() {
    var t2 = -1 / 0;
    return this._def.checks.map(function(e2) {
      e2.kind === "min" && (t2 === null || e2.value > t2) && (t2 = e2.value);
    }), t2;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "maxLength", { get: function() {
    var t2 = null;
    return this._def.checks.map(function(e2) {
      e2.kind === "max" && (t2 === null || e2.value < t2) && (t2 = e2.value);
    }), t2;
  }, enumerable: false, configurable: true }), t.create = function(e2) {
    return new t(__assign({ checks: [], typeName: ZodFirstPartyTypeKind.ZodString }, processCreateParams(e2)));
  }, t;
}(ZodType);
var ZodNumber = function(t) {
  function a() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e.min = e.gte, e.max = e.lte, e.step = e.multipleOf, e;
  }
  return __extends(a, t), a.prototype._parse = function(e) {
    var t2, r, e = this._processInputParams(e), n = e.status, a2 = e.ctx;
    if (a2.parsedType !== ZodParsedType.number)
      return addIssueToContext(a2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.number, received: a2.parsedType }), INVALID;
    try {
      for (var o = __values(this._def.checks), s = o.next(); !s.done; s = o.next()) {
        var i = s.value;
        i.kind === "int" ? util.isInteger(a2.data) || (addIssueToContext(a2, { code: ZodIssueCode.invalid_type, expected: "integer", received: "float", message: i.message }), n.dirty()) : i.kind === "min" ? (i.inclusive ? a2.data < i.value : a2.data <= i.value) && (addIssueToContext(a2, { code: ZodIssueCode.too_small, minimum: i.value, type: "number", inclusive: i.inclusive, message: i.message }), n.dirty()) : i.kind === "max" ? (i.inclusive ? a2.data > i.value : a2.data >= i.value) && (addIssueToContext(a2, { code: ZodIssueCode.too_big, maximum: i.value, type: "number", inclusive: i.inclusive, message: i.message }), n.dirty()) : i.kind === "multipleOf" ? a2.data % i.value != 0 && (addIssueToContext(a2, { code: ZodIssueCode.not_multiple_of, multipleOf: i.value, message: i.message }), n.dirty()) : util.assertNever(i);
      }
    } catch (e2) {
      t2 = { error: e2 };
    } finally {
      try {
        s && !s.done && (r = o.return) && r.call(o);
      } finally {
        if (t2)
          throw t2.error;
      }
    }
    return { status: n.value, value: a2.data };
  }, a.prototype.gte = function(e, t2) {
    return this.setLimit("min", e, true, errorUtil.toString(t2));
  }, a.prototype.gt = function(e, t2) {
    return this.setLimit("min", e, false, errorUtil.toString(t2));
  }, a.prototype.lte = function(e, t2) {
    return this.setLimit("max", e, true, errorUtil.toString(t2));
  }, a.prototype.lt = function(e, t2) {
    return this.setLimit("max", e, false, errorUtil.toString(t2));
  }, a.prototype.setLimit = function(e, t2, r, n) {
    return new a(__assign(__assign({}, this._def), { checks: __spreadArray(__spreadArray([], __read(this._def.checks), false), [{ kind: e, value: t2, inclusive: r, message: errorUtil.toString(n) }], false) }));
  }, a.prototype._addCheck = function(e) {
    return new a(__assign(__assign({}, this._def), { checks: __spreadArray(__spreadArray([], __read(this._def.checks), false), [e], false) }));
  }, a.prototype.int = function(e) {
    return this._addCheck({ kind: "int", message: errorUtil.toString(e) });
  }, a.prototype.positive = function(e) {
    return this._addCheck({ kind: "min", value: 0, inclusive: false, message: errorUtil.toString(e) });
  }, a.prototype.negative = function(e) {
    return this._addCheck({ kind: "max", value: 0, inclusive: false, message: errorUtil.toString(e) });
  }, a.prototype.nonpositive = function(e) {
    return this._addCheck({ kind: "max", value: 0, inclusive: true, message: errorUtil.toString(e) });
  }, a.prototype.nonnegative = function(e) {
    return this._addCheck({ kind: "min", value: 0, inclusive: true, message: errorUtil.toString(e) });
  }, a.prototype.multipleOf = function(e, t2) {
    return this._addCheck({ kind: "multipleOf", value: e, message: errorUtil.toString(t2) });
  }, Object.defineProperty(a.prototype, "minValue", { get: function() {
    var t2, e, r = null;
    try {
      for (var n = __values(this._def.checks), a2 = n.next(); !a2.done; a2 = n.next()) {
        var o = a2.value;
        o.kind === "min" && (r === null || o.value > r) && (r = o.value);
      }
    } catch (e2) {
      t2 = { error: e2 };
    } finally {
      try {
        a2 && !a2.done && (e = n.return) && e.call(n);
      } finally {
        if (t2)
          throw t2.error;
      }
    }
    return r;
  }, enumerable: false, configurable: true }), Object.defineProperty(a.prototype, "maxValue", { get: function() {
    var t2, e, r = null;
    try {
      for (var n = __values(this._def.checks), a2 = n.next(); !a2.done; a2 = n.next()) {
        var o = a2.value;
        o.kind === "max" && (r === null || o.value < r) && (r = o.value);
      }
    } catch (e2) {
      t2 = { error: e2 };
    } finally {
      try {
        a2 && !a2.done && (e = n.return) && e.call(n);
      } finally {
        if (t2)
          throw t2.error;
      }
    }
    return r;
  }, enumerable: false, configurable: true }), Object.defineProperty(a.prototype, "isInt", { get: function() {
    return !!this._def.checks.find(function(e) {
      return e.kind === "int";
    });
  }, enumerable: false, configurable: true }), a.create = function(e) {
    return new a(__assign(__assign({ checks: [], typeName: ZodFirstPartyTypeKind.ZodNumber }, processCreateParams(e)), processCreateParams(e)));
  }, a;
}(ZodType);
var ZodBigInt = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(t, e), t.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return e2.parsedType !== ZodParsedType.bigint ? (addIssueToContext(e2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.bigint, received: e2.parsedType }), INVALID) : OK(e2.data);
  }, t.create = function(e2) {
    return new t(__assign({ typeName: ZodFirstPartyTypeKind.ZodBigInt }, processCreateParams(e2)));
  }, t;
}(ZodType);
var ZodBoolean = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(t, e), t.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return e2.parsedType !== ZodParsedType.boolean ? (addIssueToContext(e2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.boolean, received: e2.parsedType }), INVALID) : OK(e2.data);
  }, t.create = function(e2) {
    return new t(__assign({ typeName: ZodFirstPartyTypeKind.ZodBoolean }, processCreateParams(e2)));
  }, t;
}(ZodType);
var ZodDate = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(t, e), t.prototype._parse = function(e2) {
    var t2 = this._processInputParams(e2), e2 = t2.status, t2 = t2.ctx;
    return t2.parsedType !== ZodParsedType.date ? (addIssueToContext(t2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.date, received: t2.parsedType }), INVALID) : isNaN(t2.data.getTime()) ? (addIssueToContext(t2, { code: ZodIssueCode.invalid_date }), INVALID) : { status: e2.value, value: new Date(t2.data.getTime()) };
  }, t.create = function(e2) {
    return new t(__assign({ typeName: ZodFirstPartyTypeKind.ZodDate }, processCreateParams(e2)));
  }, t;
}(ZodType);
var ZodUndefined = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(t, e), t.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return e2.parsedType !== ZodParsedType.undefined ? (addIssueToContext(e2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.undefined, received: e2.parsedType }), INVALID) : OK(e2.data);
  }, t.create = function(e2) {
    return new t(__assign({ typeName: ZodFirstPartyTypeKind.ZodUndefined }, processCreateParams(e2)));
  }, t;
}(ZodType);
var ZodNull = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(t, e), t.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return e2.parsedType !== ZodParsedType.null ? (addIssueToContext(e2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.null, received: e2.parsedType }), INVALID) : OK(e2.data);
  }, t.create = function(e2) {
    return new t(__assign({ typeName: ZodFirstPartyTypeKind.ZodNull }, processCreateParams(e2)));
  }, t;
}(ZodType);
var ZodAny = function(t) {
  function r() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e._any = true, e;
  }
  return __extends(r, t), r.prototype._parse = function(e) {
    e = this._processInputParams(e).ctx;
    return OK(e.data);
  }, r.create = function(e) {
    return new r(__assign({ typeName: ZodFirstPartyTypeKind.ZodAny }, processCreateParams(e)));
  }, r;
}(ZodType);
var ZodUnknown = function(t) {
  function r() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e._unknown = true, e;
  }
  return __extends(r, t), r.prototype._parse = function(e) {
    e = this._processInputParams(e).ctx;
    return OK(e.data);
  }, r.create = function(e) {
    return new r(__assign({ typeName: ZodFirstPartyTypeKind.ZodUnknown }, processCreateParams(e)));
  }, r;
}(ZodType);
var ZodNever = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(t, e), t.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return addIssueToContext(e2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.never, received: e2.parsedType }), INVALID;
  }, t.create = function(e2) {
    return new t(__assign({ typeName: ZodFirstPartyTypeKind.ZodNever }, processCreateParams(e2)));
  }, t;
}(ZodType);
var ZodVoid = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(t, e), t.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return e2.parsedType !== ZodParsedType.undefined ? (addIssueToContext(e2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.void, received: e2.parsedType }), INVALID) : OK(e2.data);
  }, t.create = function(e2) {
    return new t(__assign({ typeName: ZodFirstPartyTypeKind.ZodVoid }, processCreateParams(e2)));
  }, t;
}(ZodType);
var ZodArray = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(r, e), r.prototype._parse = function(e2) {
    var e2 = this._processInputParams(e2), t = e2.status, r2 = e2.ctx, n = this._def;
    if (r2.parsedType !== ZodParsedType.array)
      return addIssueToContext(r2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.array, received: r2.parsedType }), INVALID;
    if (n.minLength !== null && r2.data.length < n.minLength.value && (addIssueToContext(r2, { code: ZodIssueCode.too_small, minimum: n.minLength.value, type: "array", inclusive: true, message: n.minLength.message }), t.dirty()), n.maxLength !== null && r2.data.length > n.maxLength.value && (addIssueToContext(r2, { code: ZodIssueCode.too_big, maximum: n.maxLength.value, type: "array", inclusive: true, message: n.maxLength.message }), t.dirty()), r2.async)
      return Promise.all(r2.data.map(function(e3, t2) {
        return n.type._parseAsync({ parent: r2, path: __spreadArray(__spreadArray([], __read(r2.path), false), [t2], false), data: e3 });
      })).then(function(e3) {
        return ParseStatus.mergeArray(t, e3);
      });
    e2 = r2.data.map(function(e3, t2) {
      return n.type._parseSync({ parent: r2, path: __spreadArray(__spreadArray([], __read(r2.path), false), [t2], false), data: e3 });
    });
    return ParseStatus.mergeArray(t, e2);
  }, Object.defineProperty(r.prototype, "element", { get: function() {
    return this._def.type;
  }, enumerable: false, configurable: true }), r.prototype.min = function(e2, t) {
    return new r(__assign(__assign({}, this._def), { minLength: { value: e2, message: errorUtil.toString(t) } }));
  }, r.prototype.max = function(e2, t) {
    return new r(__assign(__assign({}, this._def), { maxLength: { value: e2, message: errorUtil.toString(t) } }));
  }, r.prototype.length = function(e2, t) {
    return this.min(e2, t).max(e2, t);
  }, r.prototype.nonempty = function(e2) {
    return this.min(1, e2);
  }, r.create = function(e2, t) {
    return new r(__assign({ type: e2, minLength: null, maxLength: null, typeName: ZodFirstPartyTypeKind.ZodArray }, processCreateParams(t)));
  }, r;
}(ZodType);
(objectUtil || (objectUtil = {})).mergeShapes = function(e, t) {
  return __assign(__assign({}, e), t);
};
var AugmentFactory = function(t) {
  return function(e) {
    return new ZodObject(__assign(__assign({}, t), { shape: function() {
      return __assign(__assign({}, t.shape()), e);
    } }));
  };
};
function deepPartialify(e) {
  if (e instanceof ZodObject) {
    var t, r = {};
    for (t in e.shape) {
      var n = e.shape[t];
      r[t] = ZodOptional.create(deepPartialify(n));
    }
    return new ZodObject(__assign(__assign({}, e._def), { shape: function() {
      return r;
    } }));
  }
  return e instanceof ZodArray ? ZodArray.create(deepPartialify(e.element)) : e instanceof ZodOptional ? ZodOptional.create(deepPartialify(e.unwrap())) : e instanceof ZodNullable ? ZodNullable.create(deepPartialify(e.unwrap())) : e instanceof ZodTuple ? ZodTuple.create(e.items.map(function(e2) {
    return deepPartialify(e2);
  })) : e;
}
var ZodObject = function(t) {
  function s() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e._cached = null, e.nonstrict = e.passthrough, e.augment = AugmentFactory(e._def), e.extend = AugmentFactory(e._def), e;
  }
  return __extends(s, t), s.prototype._getCached = function() {
    if (this._cached !== null)
      return this._cached;
    var e = this._def.shape(), t2 = util.objectKeys(e);
    return this._cached = { shape: e, keys: t2 };
  }, s.prototype._parse = function(e) {
    var t2, r, n, a, o, s2 = this, i = this._processInputParams(e), u = i.status, d = i.ctx;
    if (d.parsedType !== ZodParsedType.object)
      return addIssueToContext(d, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.object, received: d.parsedType }), INVALID;
    var e = this._getCached(), p = e.shape, i = e.keys, e = util.objectKeys(d.data).filter(function(e2) {
      return !(e2 in p);
    }), c = [];
    try {
      for (var l = __values(i), y = l.next(); !y.done; y = l.next()) {
        var f = y.value, _ = p[f], h = d.data[f];
        c.push({ key: { status: "valid", value: f }, value: _._parse({ parent: d, data: h, path: __spreadArray(__spreadArray([], __read(d.path), false), [f], false) }), alwaysSet: f in d.data });
      }
    } catch (e2) {
      v = { error: e2 };
    } finally {
      try {
        y && !y.done && (t2 = l.return) && t2.call(l);
      } finally {
        if (v)
          throw v.error;
      }
    }
    if (this._def.catchall instanceof ZodNever) {
      var v = this._def.unknownKeys;
      if (v === "passthrough")
        try {
          for (var m = __values(e), Z = m.next(); !Z.done; Z = m.next()) {
            f = Z.value;
            c.push({ key: { status: "valid", value: f }, value: { status: "valid", value: d.data[f] } });
          }
        } catch (e2) {
          r = { error: e2 };
        } finally {
          try {
            Z && !Z.done && (n = m.return) && n.call(m);
          } finally {
            if (r)
              throw r.error;
          }
        }
      else if (v === "strict")
        0 < e.length && (addIssueToContext(d, { code: ZodIssueCode.unrecognized_keys, keys: e }), u.dirty());
      else if (v !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      var g = this._def.catchall;
      try {
        for (var T = __values(e), b = T.next(); !b.done; b = T.next()) {
          f = b.value, h = d.data[f];
          c.push({ key: { status: "valid", value: f }, value: g._parse({ parent: d, path: __spreadArray(__spreadArray([], __read(d.path), false), [f], false), data: h }), alwaysSet: f in d.data });
        }
      } catch (e2) {
        a = { error: e2 };
      } finally {
        try {
          b && !b.done && (o = T.return) && o.call(T);
        } finally {
          if (a)
            throw a.error;
        }
      }
    }
    return d.async ? Promise.resolve().then(function() {
      return __awaiter(s2, void 0, void 0, function() {
        var t3, r2, n2, a2, o2, s3, i2, u2, d2;
        return __generator(this, function(e2) {
          switch (e2.label) {
            case 0:
              t3 = [], e2.label = 1;
            case 1:
              e2.trys.push([1, 7, 8, 9]), r2 = __values(c), n2 = r2.next(), e2.label = 2;
            case 2:
              return n2.done ? [3, 6] : [4, (a2 = n2.value).key];
            case 3:
              return d2 = e2.sent(), s3 = (o2 = t3).push, d2 = { key: d2 }, [4, a2.value];
            case 4:
              s3.apply(o2, [(d2.value = e2.sent(), d2.alwaysSet = a2.alwaysSet, d2)]), e2.label = 5;
            case 5:
              return n2 = r2.next(), [3, 2];
            case 6:
              return [3, 9];
            case 7:
              return i2 = e2.sent(), i2 = { error: i2 }, [3, 9];
            case 8:
              try {
                n2 && !n2.done && (u2 = r2.return) && u2.call(r2);
              } finally {
                if (i2)
                  throw i2.error;
              }
              return [7];
            case 9:
              return [2, t3];
          }
        });
      });
    }).then(function(e2) {
      return ParseStatus.mergeObjectSync(u, e2);
    }) : ParseStatus.mergeObjectSync(u, c);
  }, Object.defineProperty(s.prototype, "shape", { get: function() {
    return this._def.shape();
  }, enumerable: false, configurable: true }), s.prototype.strict = function(a) {
    var o = this;
    return errorUtil.errToObj, new s(__assign(__assign(__assign({}, this._def), { unknownKeys: "strict" }), a !== void 0 ? { errorMap: function(e, t2) {
      var r, n, t2 = (n = (r = (n = o._def).errorMap) === null || r === void 0 ? void 0 : r.call(n, e, t2).message) !== null && n !== void 0 ? n : t2.defaultError;
      return e.code === "unrecognized_keys" ? { message: (e = errorUtil.errToObj(a).message) !== null && e !== void 0 ? e : t2 } : { message: t2 };
    } } : {}));
  }, s.prototype.strip = function() {
    return new s(__assign(__assign({}, this._def), { unknownKeys: "strip" }));
  }, s.prototype.passthrough = function() {
    return new s(__assign(__assign({}, this._def), { unknownKeys: "passthrough" }));
  }, s.prototype.setKey = function(e, t2) {
    var r;
    return this.augment(((r = {})[e] = t2, r));
  }, s.prototype.merge = function(e) {
    var t2 = objectUtil.mergeShapes(this._def.shape(), e._def.shape());
    return new s({ unknownKeys: e._def.unknownKeys, catchall: e._def.catchall, shape: function() {
      return t2;
    }, typeName: ZodFirstPartyTypeKind.ZodObject });
  }, s.prototype.catchall = function(e) {
    return new s(__assign(__assign({}, this._def), { catchall: e }));
  }, s.prototype.pick = function(e) {
    var t2 = this, r = {};
    return util.objectKeys(e).map(function(e2) {
      r[e2] = t2.shape[e2];
    }), new s(__assign(__assign({}, this._def), { shape: function() {
      return r;
    } }));
  }, s.prototype.omit = function(t2) {
    var r = this, n = {};
    return util.objectKeys(this.shape).map(function(e) {
      util.objectKeys(t2).indexOf(e) === -1 && (n[e] = r.shape[e]);
    }), new s(__assign(__assign({}, this._def), { shape: function() {
      return n;
    } }));
  }, s.prototype.deepPartial = function() {
    return deepPartialify(this);
  }, s.prototype.partial = function(t2) {
    var e, r = this, n = {};
    if (t2)
      return util.objectKeys(this.shape).map(function(e2) {
        util.objectKeys(t2).indexOf(e2) === -1 ? n[e2] = r.shape[e2] : n[e2] = r.shape[e2].optional();
      }), new s(__assign(__assign({}, this._def), { shape: function() {
        return n;
      } }));
    for (e in this.shape) {
      var a = this.shape[e];
      n[e] = a.optional();
    }
    return new s(__assign(__assign({}, this._def), { shape: function() {
      return n;
    } }));
  }, s.prototype.required = function() {
    var e, t2 = {};
    for (e in this.shape) {
      for (var r = this.shape[e]; r instanceof ZodOptional; )
        r = r._def.innerType;
      t2[e] = r;
    }
    return new s(__assign(__assign({}, this._def), { shape: function() {
      return t2;
    } }));
  }, s.create = function(e, t2) {
    return new s(__assign({ shape: function() {
      return e;
    }, unknownKeys: "strip", catchall: ZodNever.create(), typeName: ZodFirstPartyTypeKind.ZodObject }, processCreateParams(t2)));
  }, s.strictCreate = function(e, t2) {
    return new s(__assign({ shape: function() {
      return e;
    }, unknownKeys: "strict", catchall: ZodNever.create(), typeName: ZodFirstPartyTypeKind.ZodObject }, processCreateParams(t2)));
  }, s.lazycreate = function(e, t2) {
    return new s(__assign({ shape: e, unknownKeys: "strip", catchall: ZodNever.create(), typeName: ZodFirstPartyTypeKind.ZodObject }, processCreateParams(t2)));
  }, s;
}(ZodType);
var ZodUnion = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(r, e), r.prototype._parse = function(e2) {
    var t = this, c = this._processInputParams(e2).ctx, e2 = this._def.options;
    function r2(e3) {
      var t2, r3, n, a, o;
      try {
        for (var s = __values(e3), i = s.next(); !i.done; i = s.next())
          if ((u = i.value).result.status === "valid")
            return u.result;
      } catch (e4) {
        t2 = { error: e4 };
      } finally {
        try {
          i && !i.done && (r3 = s.return) && r3.call(s);
        } finally {
          if (t2)
            throw t2.error;
        }
      }
      try {
        for (var u, d = __values(e3), p = d.next(); !p.done; p = d.next())
          if ((u = p.value).result.status === "dirty")
            return (o = c.issues).push.apply(o, __spreadArray([], __read(u.ctx.issues), false)), u.result;
      } catch (e4) {
        n = { error: e4 };
      } finally {
        try {
          p && !p.done && (a = d.return) && a.call(d);
        } finally {
          if (n)
            throw n.error;
        }
      }
      e3 = e3.map(function(e4) {
        return new ZodError(e4.ctx.issues);
      });
      return addIssueToContext(c, { code: ZodIssueCode.invalid_union, unionErrors: e3 }), INVALID;
    }
    return c.async ? Promise.all(e2.map(function(n) {
      return __awaiter(t, void 0, void 0, function() {
        var t2, r3;
        return __generator(this, function(e3) {
          switch (e3.label) {
            case 0:
              return t2 = __assign(__assign({}, c), { issues: [], parent: null }), r3 = {}, [4, n._parseAsync({ data: c.data, path: c.path, parent: t2 })];
            case 1:
              return [2, (r3.result = e3.sent(), r3.ctx = t2, r3)];
          }
        });
      });
    })).then(r2) : r2(e2.map(function(e3) {
      var t2 = __assign(__assign({}, c), { issues: [], parent: null });
      return { result: e3._parseSync({ data: c.data, path: c.path, parent: t2 }), ctx: t2 };
    }));
  }, Object.defineProperty(r.prototype, "options", { get: function() {
    return this._def.options;
  }, enumerable: false, configurable: true }), r.create = function(e2, t) {
    return new r(__assign({ options: e2, typeName: ZodFirstPartyTypeKind.ZodUnion }, processCreateParams(t)));
  }, r;
}(ZodType);
function mergeValues(e, t) {
  var r, n, a = getParsedType(e), o = getParsedType(t);
  if (e === t)
    return { valid: true, data: e };
  if (a === ZodParsedType.object && o === ZodParsedType.object) {
    var s = util.objectKeys(t), i = util.objectKeys(e).filter(function(e2) {
      return s.indexOf(e2) !== -1;
    }), u = __assign(__assign({}, e), t);
    try {
      for (var d = __values(i), p = d.next(); !p.done; p = d.next()) {
        var c = p.value;
        if (!(l = mergeValues(e[c], t[c])).valid)
          return { valid: false };
        u[c] = l.data;
      }
    } catch (e2) {
      r = { error: e2 };
    } finally {
      try {
        p && !p.done && (n = d.return) && n.call(d);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return { valid: true, data: u };
  }
  if (a !== ZodParsedType.array || o !== ZodParsedType.array)
    return { valid: false };
  if (e.length !== t.length)
    return { valid: false };
  for (var l, y = [], f = 0; f < e.length; f++) {
    if (!(l = mergeValues(e[f], t[f])).valid)
      return { valid: false };
    y.push(l.data);
  }
  return { valid: true, data: y };
}
var ZodIntersection = function(e) {
  function n() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(n, e), n.prototype._parse = function(e2) {
    function r(e3, t) {
      if (isAborted(e3) || isAborted(t))
        return INVALID;
      var r2 = mergeValues(e3.value, t.value);
      return r2.valid ? ((isDirty(e3) || isDirty(t)) && n2.dirty(), { status: n2.value, value: r2.data }) : (addIssueToContext(a, { code: ZodIssueCode.invalid_intersection_types }), INVALID);
    }
    var e2 = this._processInputParams(e2), n2 = e2.status, a = e2.ctx;
    return a.async ? Promise.all([this._def.left._parseAsync({ data: a.data, path: a.path, parent: a }), this._def.right._parseAsync({ data: a.data, path: a.path, parent: a })]).then(function(e3) {
      var t = __read(e3, 2), e3 = t[0], t = t[1];
      return r(e3, t);
    }) : r(this._def.left._parseSync({ data: a.data, path: a.path, parent: a }), this._def.right._parseSync({ data: a.data, path: a.path, parent: a }));
  }, n.create = function(e2, t, r) {
    return new n(__assign({ left: e2, right: t, typeName: ZodFirstPartyTypeKind.ZodIntersection }, processCreateParams(r)));
  }, n;
}(ZodType);
var ZodTuple = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(r, e), r.prototype._parse = function(e2) {
    var n = this, e2 = this._processInputParams(e2), t = e2.status, a = e2.ctx;
    if (a.parsedType !== ZodParsedType.array)
      return addIssueToContext(a, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.array, received: a.parsedType }), INVALID;
    if (a.data.length < this._def.items.length)
      return addIssueToContext(a, { code: ZodIssueCode.too_small, minimum: this._def.items.length, inclusive: true, type: "array" }), INVALID;
    !this._def.rest && a.data.length > this._def.items.length && (addIssueToContext(a, { code: ZodIssueCode.too_big, maximum: this._def.items.length, inclusive: true, type: "array" }), t.dirty());
    e2 = a.data.map(function(e3, t2) {
      var r2 = n._def.items[t2] || n._def.rest;
      return r2 ? r2._parse({ data: e3, path: __spreadArray(__spreadArray([], __read(a.path), false), [t2], false), parent: a }) : null;
    }).filter(function(e3) {
      return !!e3;
    });
    return a.async ? Promise.all(e2).then(function(e3) {
      return ParseStatus.mergeArray(t, e3);
    }) : ParseStatus.mergeArray(t, e2);
  }, Object.defineProperty(r.prototype, "items", { get: function() {
    return this._def.items;
  }, enumerable: false, configurable: true }), r.prototype.rest = function(e2) {
    return new r(__assign(__assign({}, this._def), { rest: e2 }));
  }, r.create = function(e2, t) {
    return new r(__assign({ items: e2, typeName: ZodFirstPartyTypeKind.ZodTuple, rest: null }, processCreateParams(t)));
  }, r;
}(ZodType);
var ZodRecord = function(e) {
  function n() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(n, e), Object.defineProperty(n.prototype, "keySchema", { get: function() {
    return this._def.keyType;
  }, enumerable: false, configurable: true }), Object.defineProperty(n.prototype, "valueSchema", { get: function() {
    return this._def.valueType;
  }, enumerable: false, configurable: true }), n.prototype._parse = function(e2) {
    var t = this._processInputParams(e2), e2 = t.status, r = t.ctx;
    if (r.parsedType !== ZodParsedType.object)
      return addIssueToContext(r, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.object, received: r.parsedType }), INVALID;
    var n2, a = [], o = this._def.keyType, s = this._def.valueType;
    for (n2 in r.data)
      a.push({ key: o._parse({ data: n2, path: __spreadArray(__spreadArray([], __read(r.path), false), [n2], false), parent: r }), value: s._parse({ data: r.data[n2], path: __spreadArray(__spreadArray([], __read(r.path), false), [n2], false), parent: r }) });
    return r.async ? ParseStatus.mergeObjectAsync(e2, a) : ParseStatus.mergeObjectSync(e2, a);
  }, Object.defineProperty(n.prototype, "element", { get: function() {
    return this._def.valueType;
  }, enumerable: false, configurable: true }), n.create = function(e2, t, r) {
    return new n(t instanceof ZodType ? __assign({ keyType: e2, valueType: t, typeName: ZodFirstPartyTypeKind.ZodRecord }, processCreateParams(r)) : __assign({ keyType: ZodString.create(), valueType: e2, typeName: ZodFirstPartyTypeKind.ZodRecord }, processCreateParams(t)));
  }, n;
}(ZodType);
var ZodMap = function(e) {
  function n() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(n, e), n.prototype._parse = function(e2) {
    var t, r, n2 = this, e2 = this._processInputParams(e2), u = e2.status, a = e2.ctx;
    if (a.parsedType !== ZodParsedType.map)
      return addIssueToContext(a, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.map, received: a.parsedType }), INVALID;
    var o = this._def.keyType, s = this._def.valueType, d = __spreadArray([], __read(a.data.entries()), false).map(function(e3, t2) {
      var r2 = __read(e3, 2), e3 = r2[0], r2 = r2[1];
      return { key: o._parse({ data: e3, path: __spreadArray(__spreadArray([], __read(a.path), false), [t2, "key"], false), parent: a }), value: s._parse({ data: r2, path: __spreadArray(__spreadArray([], __read(a.path), false), [t2, "value"], false), parent: a }) };
    });
    if (a.async) {
      var p = /* @__PURE__ */ new Map();
      return Promise.resolve().then(function() {
        return __awaiter(n2, void 0, void 0, function() {
          var t2, r2, n3, a2, o2, s2, i2;
          return __generator(this, function(e3) {
            switch (e3.label) {
              case 0:
                e3.trys.push([0, 6, 7, 8]), t2 = __values(d), r2 = t2.next(), e3.label = 1;
              case 1:
                return r2.done ? [3, 5] : [4, (n3 = r2.value).key];
              case 2:
                return a2 = e3.sent(), [4, n3.value];
              case 3:
                if (o2 = e3.sent(), a2.status === "aborted" || o2.status === "aborted")
                  return [2, INVALID];
                a2.status !== "dirty" && o2.status !== "dirty" || u.dirty(), p.set(a2.value, o2.value), e3.label = 4;
              case 4:
                return r2 = t2.next(), [3, 1];
              case 5:
                return [3, 8];
              case 6:
                return s2 = e3.sent(), s2 = { error: s2 }, [3, 8];
              case 7:
                try {
                  r2 && !r2.done && (i2 = t2.return) && i2.call(t2);
                } finally {
                  if (s2)
                    throw s2.error;
                }
                return [7];
              case 8:
                return [2, { status: u.value, value: p }];
            }
          });
        });
      });
    }
    var i = /* @__PURE__ */ new Map();
    try {
      for (var c = __values(d), l = c.next(); !l.done; l = c.next()) {
        var y = l.value, f = y.key, _ = y.value;
        if (f.status === "aborted" || _.status === "aborted")
          return INVALID;
        f.status !== "dirty" && _.status !== "dirty" || u.dirty(), i.set(f.value, _.value);
      }
    } catch (e3) {
      t = { error: e3 };
    } finally {
      try {
        l && !l.done && (r = c.return) && r.call(c);
      } finally {
        if (t)
          throw t.error;
      }
    }
    return { status: u.value, value: i };
  }, n.create = function(e2, t, r) {
    return new n(__assign({ valueType: t, keyType: e2, typeName: ZodFirstPartyTypeKind.ZodMap }, processCreateParams(r)));
  }, n;
}(ZodType);
var ZodSet = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(r, e), r.prototype._parse = function(e2) {
    var e2 = this._processInputParams(e2), i = e2.status, r2 = e2.ctx;
    if (r2.parsedType !== ZodParsedType.set)
      return addIssueToContext(r2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.set, received: r2.parsedType }), INVALID;
    var n = this._def.valueType;
    function t(e3) {
      var t2, r3, n2 = /* @__PURE__ */ new Set();
      try {
        for (var a = __values(e3), o = a.next(); !o.done; o = a.next()) {
          var s = o.value;
          if (s.status === "aborted")
            return INVALID;
          s.status === "dirty" && i.dirty(), n2.add(s.value);
        }
      } catch (e4) {
        t2 = { error: e4 };
      } finally {
        try {
          o && !o.done && (r3 = a.return) && r3.call(a);
        } finally {
          if (t2)
            throw t2.error;
        }
      }
      return { status: i.value, value: n2 };
    }
    e2 = __spreadArray([], __read(r2.data.values()), false).map(function(e3, t2) {
      return n._parse({ data: e3, path: __spreadArray(__spreadArray([], __read(r2.path), false), [t2], false), parent: r2 });
    });
    return r2.async ? Promise.all(e2).then(t) : t(e2);
  }, r.create = function(e2, t) {
    return new r(__assign({ valueType: e2, typeName: ZodFirstPartyTypeKind.ZodSet }, processCreateParams(t)));
  }, r;
}(ZodType);
var ZodFunction = function(t) {
  function n() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e.validate = e.implement, e;
  }
  return __extends(n, t), n.prototype._parse = function(e) {
    var o = this, r = this._processInputParams(e).ctx;
    if (r.parsedType !== ZodParsedType.function)
      return addIssueToContext(r, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.function, received: r.parsedType }), INVALID;
    function s(e2, t2) {
      return makeIssue({ data: e2, path: r.path, errorMaps: [r.contextualErrorMap, r.schemaErrorMap, overrideErrorMap, defaultErrorMap].filter(function(e3) {
        return !!e3;
      }), issueData: { code: ZodIssueCode.invalid_arguments, argumentsError: t2 } });
    }
    function i(e2, t2) {
      return makeIssue({ data: e2, path: r.path, errorMaps: [r.contextualErrorMap, r.schemaErrorMap, overrideErrorMap, defaultErrorMap].filter(function(e3) {
        return !!e3;
      }), issueData: { code: ZodIssueCode.invalid_return_type, returnTypeError: t2 } });
    }
    var u = { errorMap: r.contextualErrorMap }, d = r.data;
    return this._def.returns instanceof ZodPromise ? OK(function() {
      for (var a = [], e2 = 0; e2 < arguments.length; e2++)
        a[e2] = arguments[e2];
      return __awaiter(o, void 0, void 0, function() {
        var t2, r2, n2;
        return __generator(this, function(e3) {
          switch (e3.label) {
            case 0:
              return t2 = new ZodError([]), [4, this._def.args.parseAsync(a, u).catch(function(e4) {
                throw t2.addIssue(s(a, e4)), t2;
              })];
            case 1:
              return r2 = e3.sent(), [4, d.apply(void 0, __spreadArray([], __read(r2), false))];
            case 2:
              return n2 = e3.sent(), [4, this._def.returns._def.type.parseAsync(n2, u).catch(function(e4) {
                throw t2.addIssue(i(n2, e4)), t2;
              })];
            case 3:
              return [2, e3.sent()];
          }
        });
      });
    }) : OK(function() {
      for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
        e2[t2] = arguments[t2];
      var r2 = o._def.args.safeParse(e2, u);
      if (!r2.success)
        throw new ZodError([s(e2, r2.error)]);
      var n2 = d.apply(void 0, __spreadArray([], __read(r2.data), false)), r2 = o._def.returns.safeParse(n2, u);
      if (!r2.success)
        throw new ZodError([i(n2, r2.error)]);
      return r2.data;
    });
  }, n.prototype.parameters = function() {
    return this._def.args;
  }, n.prototype.returnType = function() {
    return this._def.returns;
  }, n.prototype.args = function() {
    for (var e = [], t2 = 0; t2 < arguments.length; t2++)
      e[t2] = arguments[t2];
    return new n(__assign(__assign({}, this._def), { args: ZodTuple.create(e).rest(ZodUnknown.create()) }));
  }, n.prototype.returns = function(e) {
    return new n(__assign(__assign({}, this._def), { returns: e }));
  }, n.prototype.implement = function(e) {
    return this.parse(e);
  }, n.prototype.strictImplement = function(e) {
    return this.parse(e);
  }, n.create = function(e, t2, r) {
    return new n(__assign({ args: (e || ZodTuple.create([])).rest(ZodUnknown.create()), returns: t2 || ZodUnknown.create(), typeName: ZodFirstPartyTypeKind.ZodFunction }, processCreateParams(r)));
  }, n;
}(ZodType);
var ZodLazy = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(r, e), Object.defineProperty(r.prototype, "schema", { get: function() {
    return this._def.getter();
  }, enumerable: false, configurable: true }), r.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return this._def.getter()._parse({ data: e2.data, path: e2.path, parent: e2 });
  }, r.create = function(e2, t) {
    return new r(__assign({ getter: e2, typeName: ZodFirstPartyTypeKind.ZodLazy }, processCreateParams(t)));
  }, r;
}(ZodType);
var ZodLiteral = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(r, e), r.prototype._parse = function(e2) {
    var t = this._processInputParams(e2), e2 = t.status, t = t.ctx;
    return t.data !== this._def.value ? (addIssueToContext(t, { code: ZodIssueCode.invalid_type, expected: this._def.value, received: t.data }), INVALID) : { status: e2.value, value: t.data };
  }, Object.defineProperty(r.prototype, "value", { get: function() {
    return this._def.value;
  }, enumerable: false, configurable: true }), r.create = function(e2, t) {
    return new r(__assign({ value: e2, typeName: ZodFirstPartyTypeKind.ZodLiteral }, processCreateParams(t)));
  }, r;
}(ZodType);
function createZodEnum(e) {
  return new ZodEnum({ values: e, typeName: ZodFirstPartyTypeKind.ZodEnum });
}
var ZodFirstPartyTypeKind;
var ZodEnum = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(t, e), t.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return this._def.values.indexOf(e2.data) === -1 ? (addIssueToContext(e2, { code: ZodIssueCode.invalid_enum_value, options: this._def.values }), INVALID) : OK(e2.data);
  }, Object.defineProperty(t.prototype, "options", { get: function() {
    return this._def.values;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "enum", { get: function() {
    var t2, e2, r = {};
    try {
      for (var n = __values(this._def.values), a = n.next(); !a.done; a = n.next()) {
        var o = a.value;
        r[o] = o;
      }
    } catch (e3) {
      t2 = { error: e3 };
    } finally {
      try {
        a && !a.done && (e2 = n.return) && e2.call(n);
      } finally {
        if (t2)
          throw t2.error;
      }
    }
    return r;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "Values", { get: function() {
    var t2, e2, r = {};
    try {
      for (var n = __values(this._def.values), a = n.next(); !a.done; a = n.next()) {
        var o = a.value;
        r[o] = o;
      }
    } catch (e3) {
      t2 = { error: e3 };
    } finally {
      try {
        a && !a.done && (e2 = n.return) && e2.call(n);
      } finally {
        if (t2)
          throw t2.error;
      }
    }
    return r;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "Enum", { get: function() {
    var t2, e2, r = {};
    try {
      for (var n = __values(this._def.values), a = n.next(); !a.done; a = n.next()) {
        var o = a.value;
        r[o] = o;
      }
    } catch (e3) {
      t2 = { error: e3 };
    } finally {
      try {
        a && !a.done && (e2 = n.return) && e2.call(n);
      } finally {
        if (t2)
          throw t2.error;
      }
    }
    return r;
  }, enumerable: false, configurable: true }), t.create = createZodEnum, t;
}(ZodType);
var ZodNativeEnum = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(r, e), r.prototype._parse = function(e2) {
    var t = this._processInputParams(e2).ctx, e2 = util.getValidEnumValues(this._def.values);
    return e2.indexOf(t.data) === -1 ? (addIssueToContext(t, { code: ZodIssueCode.invalid_enum_value, options: util.objectValues(e2) }), INVALID) : OK(t.data);
  }, r.create = function(e2, t) {
    return new r(__assign({ values: e2, typeName: ZodFirstPartyTypeKind.ZodNativeEnum }, processCreateParams(t)));
  }, r;
}(ZodType);
var ZodPromise = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(r, e), r.prototype._parse = function(e2) {
    var t = this, r2 = this._processInputParams(e2).ctx;
    if (r2.parsedType !== ZodParsedType.promise && r2.async === false)
      return addIssueToContext(r2, { code: ZodIssueCode.invalid_type, expected: ZodParsedType.promise, received: r2.parsedType }), INVALID;
    e2 = r2.parsedType === ZodParsedType.promise ? r2.data : Promise.resolve(r2.data);
    return OK(e2.then(function(e3) {
      return t._def.type.parseAsync(e3, { path: r2.path, errorMap: r2.contextualErrorMap });
    }));
  }, r.create = function(e2, t) {
    return new r(__assign({ type: e2, typeName: ZodFirstPartyTypeKind.ZodPromise }, processCreateParams(t)));
  }, r;
}(ZodType);
var ZodEffects = function(e) {
  function n() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(n, e), n.prototype.innerType = function() {
    return this._def.schema;
  }, n.prototype._parse = function(e2) {
    var t = this, e2 = this._processInputParams(e2), r = e2.status, n2 = e2.ctx, a = this._def.effect || null;
    if (a.type === "preprocess") {
      e2 = a.transform(n2.data);
      return n2.async ? Promise.resolve(e2).then(function(e3) {
        return t._def.schema._parseAsync({ data: e3, path: n2.path, parent: n2 });
      }) : this._def.schema._parseSync({ data: e2, path: n2.path, parent: n2 });
    }
    if (a.type === "refinement") {
      let s = function(e3) {
        var t2 = a.refinement(e3, o);
        if (n2.async)
          return Promise.resolve(t2);
        if (t2 instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return e3;
      };
      var o = { addIssue: function(e3) {
        addIssueToContext(n2, e3), e3.fatal ? r.abort() : r.dirty();
      }, get path() {
        return n2.path;
      } };
      o.addIssue = o.addIssue.bind(o);
      if (n2.async !== false)
        return this._def.schema._parseAsync({ data: n2.data, path: n2.path, parent: n2 }).then(function(e3) {
          return e3.status === "aborted" ? INVALID : (e3.status === "dirty" && r.dirty(), s(e3.value).then(function() {
            return { status: r.value, value: e3.value };
          }));
        });
      var i = this._def.schema._parseSync({ data: n2.data, path: n2.path, parent: n2 });
      return i.status === "aborted" ? INVALID : (i.status === "dirty" && r.dirty(), s(i.value), { status: r.value, value: i.value });
    }
    if (a.type === "transform") {
      if (n2.async !== false)
        return this._def.schema._parseAsync({ data: n2.data, path: n2.path, parent: n2 }).then(function(e3) {
          return isValid(e3) ? Promise.resolve(a.transform(e3.value)).then(OK) : e3;
        });
      i = this._def.schema._parseSync({ data: n2.data, path: n2.path, parent: n2 });
      if (!isValid(i))
        return i;
      i = a.transform(i.value);
      if (i instanceof Promise)
        throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
      return OK(i);
    }
    util.assertNever(a);
  }, n.create = function(e2, t, r) {
    return new n(__assign({ schema: e2, typeName: ZodFirstPartyTypeKind.ZodEffects, effect: t }, processCreateParams(r)));
  }, n.createWithPreprocess = function(e2, t, r) {
    return new n(__assign({ schema: t, effect: { type: "preprocess", transform: e2 }, typeName: ZodFirstPartyTypeKind.ZodEffects }, processCreateParams(r)));
  }, n;
}(ZodType);
var ZodOptional = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(r, e), r.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return e2.parsedType === ZodParsedType.undefined ? OK(void 0) : this._def.innerType._parse({ data: e2.data, path: e2.path, parent: e2 });
  }, r.prototype.unwrap = function() {
    return this._def.innerType;
  }, r.create = function(e2, t) {
    return new r(__assign({ innerType: e2, typeName: ZodFirstPartyTypeKind.ZodOptional }, processCreateParams(t)));
  }, r;
}(ZodType);
var ZodNullable = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(r, e), r.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return e2.parsedType === ZodParsedType.null ? OK(null) : this._def.innerType._parse({ data: e2.data, path: e2.path, parent: e2 });
  }, r.prototype.unwrap = function() {
    return this._def.innerType;
  }, r.create = function(e2, t) {
    return new r(__assign({ innerType: e2, typeName: ZodFirstPartyTypeKind.ZodNullable }, processCreateParams(t)));
  }, r;
}(ZodType);
var ZodDefault = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends(t, e), t.prototype._parse = function(e2) {
    var t2 = this._processInputParams(e2).ctx, e2 = t2.data;
    return t2.parsedType === ZodParsedType.undefined && (e2 = this._def.defaultValue()), this._def.innerType._parse({ data: e2, path: t2.path, parent: t2 });
  }, t.prototype.removeDefault = function() {
    return this._def.innerType;
  }, t.create = function(e2, t2) {
    return new ZodOptional(__assign({ innerType: e2, typeName: ZodFirstPartyTypeKind.ZodOptional }, processCreateParams(t2)));
  }, t;
}(ZodType);
var custom = function(e, t) {
  return e ? ZodAny.create().refine(e, t) : ZodAny.create();
};
var late = { object: ZodObject.lazycreate };
!function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodPromise = "ZodPromise";
}(ZodFirstPartyTypeKind = ZodFirstPartyTypeKind || {});
var instanceOfType = function(t, e) {
  return e === void 0 && (e = { message: "Input not instance of " + t.name }), custom(function(e2) {
    return e2 instanceof t;
  }, e);
};
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var ostring = function() {
  return stringType().optional();
};
var onumber = function() {
  return numberType().optional();
};
var oboolean = function() {
  return booleanType().optional();
};
var external = Object.freeze({ __proto__: null, ZodParsedType, getParsedType, makeIssue, EMPTY_PATH, addIssueToContext, ParseStatus, INVALID, DIRTY, OK, isAborted, isDirty, isValid, isAsync, ZodType, ZodString, ZodNumber, ZodBigInt, ZodBoolean, ZodDate, ZodUndefined, ZodNull, ZodAny, ZodUnknown, ZodNever, ZodVoid, ZodArray, get objectUtil() {
  return objectUtil;
}, ZodObject, ZodUnion, ZodIntersection, ZodTuple, ZodRecord, ZodMap, ZodSet, ZodFunction, ZodLazy, ZodLiteral, ZodEnum, ZodNativeEnum, ZodPromise, ZodEffects, ZodTransformer: ZodEffects, ZodOptional, ZodNullable, ZodDefault, custom, Schema: ZodType, ZodSchema: ZodType, late, get ZodFirstPartyTypeKind() {
  return ZodFirstPartyTypeKind;
}, any: anyType, array: arrayType, bigint: bigIntType, boolean: booleanType, date: dateType, effect: effectsType, enum: enumType, function: functionType, instanceof: instanceOfType, intersection: intersectionType, lazy: lazyType, literal: literalType, map: mapType, nativeEnum: nativeEnumType, never: neverType, null: nullType, nullable: nullableType, number: numberType, object: objectType, oboolean, onumber, optional: optionalType, ostring, preprocess: preprocessType, promise: promiseType, record: recordType, set: setType, strictObject: strictObjectType, string: stringType, transformer: effectsType, tuple: tupleType, undefined: undefinedType, union: unionType, unknown: unknownType, void: voidType, ZodIssueCode, quotelessJson, ZodError, defaultErrorMap, get overrideErrorMap() {
  return overrideErrorMap;
}, setErrorMap });
var literalSchema = external.union([external.string(), external.number(), external.boolean(), external.null()]);
var jsonSchema = external.lazy(() => external.union([literalSchema, external.array(jsonSchema), external.record(jsonSchema)]));
var versionSchema = external.number();
var nullableVersionSchema = external.union([versionSchema, external.null()]);
var versionKey = "version";
async function putVersion(version, storage) {
  await storage.put(versionKey, version);
}
async function getVersion(storage) {
  return await storage.get(versionKey, versionSchema);
}
var userValueSchema = external.object({
  version: versionSchema,
  deleted: external.boolean(),
  value: jsonSchema
});
var userValuePrefix = "user/";
function userValueKey(key3) {
  return `${userValuePrefix}${key3}`;
}
async function getPatch(durable, fromCookie) {
  const result = await durable.list({
    prefix: userValuePrefix,
    allowConcurrency: true
  });
  const patch = [];
  for (const [key3, value] of result) {
    const validValue = userValueSchema.parse(value);
    if (validValue.version <= fromCookie) {
      continue;
    }
    const unwrappedKey = key3.substring(userValuePrefix.length);
    const unwrappedValue = validValue.value;
    if (validValue.deleted) {
      patch.push({
        op: "del",
        key: unwrappedKey
      });
    } else {
      patch.push({
        op: "put",
        key: unwrappedKey,
        value: unwrappedValue
      });
    }
  }
  return patch;
}
async function fastForwardRoom(clients, getClientRecord2, currentVersion, durable, timestamp) {
  const getMapEntry = async (clientID) => [clientID, await getClientRecord2(clientID)];
  const records = new Map(await Promise.all(clients.map(getMapEntry)));
  const distinctBaseCookies = new Set([...records.values()].map((r) => r.baseCookie));
  distinctBaseCookies.delete(currentVersion);
  const getPatchEntry = async (baseCookie) => [baseCookie, await getPatch(durable, baseCookie ?? 0)];
  const distinctPatches = new Map(await Promise.all([...distinctBaseCookies].map(getPatchEntry)));
  const ret = [];
  for (const clientID of clients) {
    const record = must(records.get(clientID));
    if (record.baseCookie === currentVersion) {
      continue;
    }
    const patch = must(distinctPatches.get(record.baseCookie));
    const poke = {
      clientID,
      poke: {
        baseCookie: record.baseCookie,
        cookie: currentVersion,
        lastMutationID: record.lastMutationID,
        timestamp,
        patch
      }
    };
    ret.push(poke);
  }
  return ret;
}
var options = {
  allowConcurrency: true,
  allowUnconfirmed: true
};
async function getEntry(durable, key3, schema) {
  const value = await durable.get(key3, options);
  if (value === void 0) {
    return void 0;
  }
  return schema.parse(value);
}
async function putEntry(durable, key3, value) {
  await durable.put(key3, value, options);
}
async function delEntry(durable, key3) {
  await durable.delete(key3, options);
}
var DurableStorage = class {
  _durable;
  constructor(durable) {
    this._durable = durable;
  }
  async put(key3, value) {
    return putEntry(this._durable, key3, value);
  }
  async del(key3) {
    return delEntry(this._durable, key3);
  }
  async get(key3, schema) {
    return await getEntry(this._durable, key3, schema);
  }
};
var EntryCache = class {
  _storage;
  _cache = /* @__PURE__ */ new Map();
  constructor(storage) {
    this._storage = storage;
  }
  async put(key3, value) {
    this._cache.set(key3, { value, dirty: true });
  }
  async del(key3) {
    this._cache.set(key3, { value: void 0, dirty: true });
  }
  async get(key3, schema) {
    const cached = this._cache.get(key3);
    if (cached) {
      return cached.value;
    }
    const value = await this._storage.get(key3, schema);
    this._cache.set(key3, { value, dirty: false });
    return value;
  }
  pending() {
    const res = [];
    for (const [key3, { value, dirty }] of this._cache.entries()) {
      if (dirty) {
        if (value === void 0) {
          res.push({ op: "del", key: key3 });
        } else {
          res.push({ op: "put", key: key3, value });
        }
      }
    }
    return res;
  }
  async flush() {
    await Promise.all([...this._cache.entries()].filter(([, { dirty }]) => dirty).map(([k, { value }]) => {
      if (value === void 0) {
        return this._storage.del(k);
      } else {
        return this._storage.put(k, value);
      }
    }));
  }
};
var clientRecordSchema = external.object({
  lastMutationID: external.number(),
  baseCookie: nullableVersionSchema
});
var clientRecordPrefix = "client/";
function clientRecordKey(clientID) {
  return `${clientRecordPrefix}${clientID}`;
}
async function getClientRecord(clientID, storage) {
  return await storage.get(clientRecordKey(clientID), clientRecordSchema);
}
async function putClientRecord(clientID, record, storage) {
  return await storage.put(clientRecordKey(clientID), record);
}
var PeekIterator = class {
  _peeked = void 0;
  _iter;
  constructor(iter) {
    this._iter = iter;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    if (this._peeked !== void 0) {
      const p = this._peeked;
      this._peeked = void 0;
      return p;
    }
    return this._iter.next();
  }
  peek() {
    if (this._peeked !== void 0) {
      return this._peeked;
    }
    return this._peeked = this._iter.next();
  }
};
function* generateMergedMutations(clients) {
  const iterators = [];
  const insertIterator = (ins) => {
    const { value, done } = ins.peek();
    if (done) {
      return;
    }
    const pos = iterators.findIndex((it) => it.peek().value.timestamp > value.timestamp);
    iterators.splice(pos === -1 ? iterators.length : pos, 0, ins);
  };
  for (const [clientID, c] of clients) {
    const clientMutations = c.pending.map((m) => ({ clientID, ...m }));
    insertIterator(new PeekIterator(clientMutations.values()));
  }
  for (; ; ) {
    const next = iterators.shift();
    if (!next) {
      break;
    }
    const { value, done } = next.peek();
    if (done) {
      throw new Error("unexpected state");
    }
    yield value;
    next.next();
    insertIterator(next);
  }
}
var ReplicacheTransaction = class {
  _clientID;
  _inner;
  _version;
  get clientID() {
    return this._clientID;
  }
  constructor(inner, clientID, version) {
    this._inner = inner;
    this._clientID = clientID;
    this._version = version;
  }
  async put(key3, value) {
    const userValue = {
      deleted: false,
      version: this._version,
      value
    };
    await this._inner.put(userValueKey(key3), userValue);
  }
  async del(key3) {
    const prev = await this.get(key3);
    if (prev === void 0) {
      return false;
    }
    const userValue = {
      deleted: true,
      version: this._version,
      value: prev
    };
    await this._inner.put(userValueKey(key3), userValue);
    return prev !== void 0;
  }
  async get(key3) {
    const entry = await this._inner.get(userValueKey(key3), userValueSchema);
    if (entry === void 0) {
      return void 0;
    }
    return entry.deleted ? void 0 : entry.value;
  }
  async has(key3) {
    const val = await this.get(key3);
    return val !== void 0;
  }
  async isEmpty() {
    throw new Error("not implemented");
  }
  scan() {
    throw new Error("not implemented");
  }
  scanAll() {
    throw new Error("not implemented");
  }
};
function unwrapPatch(inner) {
  return inner.filter((p) => p.key.startsWith(userValuePrefix)).map((p) => {
    const { key: key3, op } = p;
    const unwrappedKey = key3.substring(userValuePrefix.length);
    if (op === "put") {
      const userValue = p.value;
      if (userValue.deleted) {
        return {
          op: "del",
          key: unwrappedKey
        };
      } else {
        return {
          op: "put",
          key: unwrappedKey,
          value: userValue.value
        };
      }
    } else {
      throw new Error(`unexpected op: ${op}`);
    }
  });
}
async function processMutation(lc, mutation, mutators2, storage, version) {
  const t0 = Date.now();
  try {
    lc.debug?.("processing mutation", JSON.stringify(mutation), "version", version);
    const { clientID } = mutation;
    const cache = new EntryCache(storage);
    const record = await getClientRecord(clientID, cache);
    if (!record) {
      lc.info?.("client not found");
      throw new Error(`Client ${clientID} not found`);
    }
    const expectedMutationID = record.lastMutationID + 1;
    if (mutation.id < expectedMutationID) {
      lc.debug?.("skipping duplicate mutation", JSON.stringify(mutation));
      return;
    }
    if (mutation.id > expectedMutationID) {
      lc.info?.("skipping out of order mutation", JSON.stringify(mutation));
      return;
    }
    const tx = new ReplicacheTransaction(cache, clientID, version);
    try {
      const mutator = mutators2.get(mutation.name);
      if (!mutator) {
        lc.info?.("skipping unknown mutator", JSON.stringify(mutation));
      } else {
        await mutator(tx, mutation.args);
      }
    } catch (e) {
      lc.info?.("skipping mutation because error", JSON.stringify(mutation), e);
    }
    record.lastMutationID = expectedMutationID;
    await putClientRecord(clientID, record, cache);
    await putVersion(version, cache);
    await cache.flush();
  } finally {
    lc.debug?.(`processMutation took ${Date.now() - t0} ms`);
  }
}
async function processFrame(lc, mutations, mutators2, clients, storage, timestamp) {
  lc.debug?.("processing frame - clients", clients);
  const cache = new EntryCache(storage);
  const prevVersion = must(await getVersion(cache));
  const nextVersion = (prevVersion ?? 0) + 1;
  lc.debug?.("prevVersion", prevVersion, "nextVersion", nextVersion);
  for (const mutation of mutations) {
    await processMutation(lc, mutation, mutators2, cache, nextVersion);
  }
  if (must(await getVersion(cache)) === prevVersion) {
    lc.debug?.("no change in frame, skipping poke");
    return [];
  }
  const patch = unwrapPatch(cache.pending());
  const ret = [];
  for (const clientID of clients) {
    const clientRecord = await getClientRecord(clientID, cache);
    clientRecord.baseCookie = nextVersion;
    await putClientRecord(clientID, clientRecord, cache);
    const poke = {
      clientID,
      poke: {
        baseCookie: prevVersion,
        cookie: nextVersion,
        lastMutationID: clientRecord.lastMutationID,
        patch,
        timestamp
      }
    };
    ret.push(poke);
  }
  await cache.flush();
  return ret;
}
var FRAME_LENGTH_MS = 1e3 / 60;
async function processRoom(lc, clients, mutators2, durable, timestamp) {
  const storage = new DurableStorage(durable);
  const cache = new EntryCache(storage);
  const clientIDs = [...clients.keys()];
  lc.debug?.("processing room", "clientIDs", clientIDs);
  const gcr = async (clientID) => must(await getClientRecord(clientID, cache), `Client record not found: ${clientID}`);
  let currentVersion = await getVersion(cache);
  if (currentVersion === void 0) {
    currentVersion = 0;
    await putVersion(currentVersion, cache);
  }
  lc.debug?.("currentVersion", currentVersion);
  const pokes = await fastForwardRoom(clientIDs, gcr, currentVersion, durable, timestamp);
  lc.debug?.("pokes from fastforward", JSON.stringify(pokes));
  for (const poke of pokes) {
    const cr = must(await getClientRecord(poke.clientID, cache));
    cr.baseCookie = poke.poke.cookie;
    await putClientRecord(poke.clientID, cr, cache);
  }
  const mergedMutations = generateMergedMutations(clients);
  pokes.push(...await processFrame(lc, mergedMutations, mutators2, clientIDs, cache, timestamp));
  await cache.flush();
  return pokes;
}
async function processPending(lc, durable, clients, mutators2, timestamp) {
  lc.debug?.("process pending");
  const t0 = Date.now();
  try {
    const pokes = await processRoom(lc, clients, mutators2, durable, timestamp);
    sendPokes(lc, pokes, clients);
    clearPendingMutations(lc, pokes, clients);
  } finally {
    lc.debug?.(`processPending took ${Date.now() - t0} ms`);
  }
}
function sendPokes(lc, pokes, clients) {
  for (const pokeBody of pokes) {
    const client = must(clients.get(pokeBody.clientID));
    const poke = ["poke", pokeBody.poke];
    lc.debug?.("sending client", pokeBody.clientID, "poke", pokeBody.poke);
    client.socket.send(JSON.stringify(poke));
  }
}
function clearPendingMutations(lc, pokes, clients) {
  lc.debug?.("clearing pending mutations");
  for (const pokeBody of pokes) {
    const client = must(clients.get(pokeBody.clientID));
    const idx = client.pending.findIndex((mutation) => mutation.id > pokeBody.poke.lastMutationID);
    client.pending.splice(0, idx > -1 ? idx : client.pending.length);
  }
}
function resolver() {
  let resolve;
  let reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
var Lock = class {
  _lockP = null;
  async lock() {
    const previous = this._lockP;
    const { promise, resolve } = resolver();
    this._lockP = promise;
    await previous;
    return resolve;
  }
  withLock(f) {
    return run(this.lock(), f);
  }
};
async function run(p, f) {
  const release = await p;
  try {
    return await f();
  } finally {
    release();
  }
}
var OptionalLoggerImpl = class {
  debug = void 0;
  info = void 0;
  error = void 0;
  constructor(logger, level = "info") {
    const impl = (level2) => (...args) => logger.log(level2, ...args);
    switch (level) {
      case "debug":
        this.debug = impl("debug");
      case "info":
        this.info = impl("info");
      case "error":
        this.error = impl("error");
    }
  }
};
var consoleLogger = {
  log(level, ...args) {
    console[level](...args);
  }
};
var LogContext = class extends OptionalLoggerImpl {
  _s;
  _logger;
  constructor(loggerOrLevel, tag = "") {
    const actualLogger = isLogLevel(loggerOrLevel) ? new OptionalLoggerImpl(consoleLogger, loggerOrLevel) : loggerOrLevel;
    super({
      log(name, ...args) {
        actualLogger[name](tag, ...args);
      }
    }, getLogLevel(actualLogger));
    this._s = tag;
    this._logger = actualLogger;
  }
  addContext(key3, value) {
    const space = this._s ? " " : "";
    const tag = value === void 0 ? key3 : `${key3}=${value}`;
    return new LogContext(this._logger, `${this._s}${space}${tag}`);
  }
};
function getLogLevel(logger) {
  return logger.debug ? "debug" : logger.info ? "info" : "error";
}
function isLogLevel(v) {
  switch (v) {
    case "error":
    case "info":
    case "debug":
      return true;
  }
  return false;
}
function handleClose(clients, clientID) {
  clients.delete(clientID);
}
var USER_DATA_HEADER_NAME = "x-reps-user-data";
function encodeHeaderValue(value) {
  return encodeURIComponent(value).replace(/%(3A|3B|2C|2F|22|3F|7B|7D|5B|5D|40|3C|3E|3D|2B|23|24|26|60|7C|5E|20)/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}
function decodeHeaderValue(encoded) {
  encoded;
  return decodeURIComponent(encoded);
}
async function handleConnection(lc, ws, durable, url, headers, clients, onMessage, onClose) {
  const { result, error } = getConnectRequest(url, headers);
  if (result === null) {
    lc.info?.("invalid connection request", error);
    ws.send(error);
    ws.close();
    return;
  }
  lc = lc.addContext("client", result.clientID);
  lc.info?.("parsed request", { ...result, userData: "redacted" });
  const { clientID, baseCookie } = result;
  const storage = new DurableStorage(durable);
  const existingRecord = await storage.get(clientRecordKey(clientID), clientRecordSchema);
  lc.debug?.("Existing client record", existingRecord);
  const lastMutationID = existingRecord?.lastMutationID ?? 0;
  const record = {
    baseCookie,
    lastMutationID
  };
  await storage.put(clientRecordKey(clientID), record);
  lc.debug?.("Put client record", record);
  const existing = clients.get(clientID);
  if (existing) {
    lc.debug?.("Closing old socket");
    existing.socket.close();
  }
  ws.addEventListener("message", (event) => onMessage(clientID, event.data.toString(), ws));
  ws.addEventListener("close", () => onClose(clientID));
  const client = {
    socket: ws,
    clockBehindByMs: void 0,
    pending: []
  };
  clients.set(clientID, client);
  const connectedMessage = ["connected", {}];
  ws.send(JSON.stringify(connectedMessage));
}
function getConnectRequest(url, headers) {
  const getParam = (name, required) => {
    const value = url.searchParams.get(name);
    if (value === "" || value === null) {
      if (required) {
        throw new Error(`invalid querystring - missing ${name}`);
      }
      return null;
    }
    return value;
  };
  const getIntegerParam = (name, required) => {
    const value = getParam(name, required);
    if (value === null) {
      return null;
    }
    const int = parseInt(value);
    if (isNaN(int)) {
      throw new Error(`invalid querystring parameter ${name}, url: ${url}, got: ${value}`);
    }
    return int;
  };
  const getUserData = (headers2) => {
    const encodedValue = headers2.get(USER_DATA_HEADER_NAME);
    if (!encodedValue) {
      throw new Error("missing user-data");
    }
    let jsonValue;
    try {
      jsonValue = JSON.parse(decodeHeaderValue(encodedValue));
    } catch (e) {
      throw new Error("invalid user-data - failed to decode/parse");
    }
    if (!jsonValue.userID) {
      throw new Error("invalid user-data - missing userID");
    }
    return jsonValue;
  };
  try {
    const clientID = getParam("clientID", true);
    const baseCookie = getIntegerParam("baseCookie", false);
    const timestamp = getIntegerParam("ts", true);
    const userData = getUserData(headers);
    return {
      result: {
        clientID,
        userData,
        baseCookie,
        timestamp
      },
      error: null
    };
  } catch (e) {
    return {
      result: null,
      error: String(e)
    };
  }
}
var pingBodySchema = external.object({});
var pingMessageSchema = external.tuple([external.literal("ping"), pingBodySchema]);
var mutationSchema = external.object({
  id: external.number(),
  name: external.string(),
  args: jsonSchema,
  timestamp: external.number()
});
var pushBodySchema = external.object({
  mutations: external.array(mutationSchema),
  pushVersion: external.number(),
  schemaVersion: external.string(),
  timestamp: external.number()
});
var pushMessageSchema = external.tuple([external.literal("push"), pushBodySchema]);
var upstreamSchema = external.union([pushMessageSchema, pingMessageSchema]);
function sendError(ws, body) {
  const message = ["error", body];
  ws.send(JSON.stringify(message));
}
function handlePush(lc, clients, clientID, body, ws, now, processUntilDone) {
  lc.debug?.("handling push", JSON.stringify(body));
  const client = clients.get(clientID);
  if (!client) {
    lc.info?.("client not found");
    sendError(ws, `no such client: ${clientID}`);
    return;
  }
  if (client.clockBehindByMs === void 0) {
    client.clockBehindByMs = now() - body.timestamp;
    lc.debug?.("initializing clock offset: clock behind by", client.clockBehindByMs);
  }
  for (const m of body.mutations) {
    let idx = client.pending.findIndex((pm) => pm.id >= m.id);
    if (idx === -1) {
      idx = client.pending.length;
    } else if (client.pending[idx].id === m.id) {
      lc.debug?.("mutation already been queued", m.id);
      continue;
    }
    m.timestamp += client.clockBehindByMs;
    client.pending.splice(idx, 0, m);
    lc.debug?.("inserted mutation, pending is now", JSON.stringify(client.pending));
  }
  processUntilDone();
}
function handlePing(lc, ws) {
  lc.debug?.("handling ping");
  const pongMessage = ["pong", {}];
  ws.send(JSON.stringify(pongMessage));
}
function handleMessage(lc, clientMap, clientID, data, ws, processUntilDone) {
  let message;
  try {
    message = getMessage(data);
  } catch (e) {
    lc.info?.("invalid message", e);
    sendError(ws, String(e));
    return;
  }
  switch (message[0]) {
    case "ping":
      handlePing(lc, ws);
      break;
    case "push":
      handlePush(lc, clientMap, clientID, message[1], ws, () => Date.now(), processUntilDone);
      break;
    default:
      throw new Error(`Unknown message type: ${message[0]}`);
  }
}
function getMessage(data) {
  const json = JSON.parse(data);
  return upstreamSchema.parse(json);
}
var Server = class {
  _clients = /* @__PURE__ */ new Map();
  _lock = new Lock();
  _mutators;
  _logger;
  _state;
  _turnTimerID = 0;
  constructor(options2) {
    const {
      mutators: mutators2,
      state,
      logger = consoleLogger,
      logLevel = "debug"
    } = options2;
    this._mutators = new Map([...Object.entries(mutators2)]);
    this._state = state;
    this._logger = new OptionalLoggerImpl(logger, logLevel);
    this._logger.info?.("Starting server");
  }
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/connect") {
      if (request.headers.get("Upgrade") !== "websocket") {
        return new Response("expected websocket", { status: 400 });
      }
      const pair = new WebSocketPair();
      void this._handleConnection(pair[1], url, request.headers);
      return new Response(null, { status: 101, webSocket: pair[0] });
    }
    throw new Error("unexpected path");
  }
  async _handleConnection(ws, url, headers) {
    const lc = new LogContext(this._logger).addContext("req", randomID());
    lc.debug?.("connection request", url.toString(), "waiting for lock");
    ws.accept();
    await this._lock.withLock(async () => {
      lc.debug?.("received lock");
      await handleConnection(lc, ws, this._state.storage, url, headers, this._clients, this._handleMessage, this._handleClose);
    });
  }
  _handleMessage = async (clientID, data, ws) => {
    const lc = new LogContext(this._logger).addContext("req", randomID()).addContext("client", clientID);
    lc.debug?.("handling message", data, "waiting for lock");
    await this._lock.withLock(async () => {
      lc.debug?.("received lock");
      handleMessage(lc, this._clients, clientID, data, ws, () => this._processUntilDone());
    });
  };
  async _processUntilDone() {
    const lc = new LogContext(this._logger).addContext("req", randomID());
    lc.debug?.("handling processUntilDone");
    if (this._turnTimerID) {
      lc.debug?.("already processing, nothing to do");
      return;
    }
    this._turnTimerID = setInterval(() => {
      void this._processNext(lc);
    }, 1e3 / 60);
  }
  async _processNext(lc) {
    lc.debug?.(`processNext - starting turn at ${Date.now()} - waiting for lock`);
    await this._lock.withLock(async () => {
      lc.debug?.(`received lock at ${Date.now()}`);
      if (!hasPendingMutations(this._clients)) {
        lc.debug?.("No pending mutations to process, exiting");
        if (this._turnTimerID) {
          clearInterval(this._turnTimerID);
          this._turnTimerID = 0;
        }
        return;
      }
      await processPending(lc, this._state.storage, this._clients, this._mutators, Date.now());
    });
  }
  _handleClose = async (clientID) => {
    const lc = new LogContext(this._logger).addContext("req", randomID()).addContext("client", clientID);
    lc.debug?.("handling close - waiting for lock");
    await this._lock.withLock(async () => {
      lc.debug?.("received lock");
      handleClose(this._clients, clientID);
    });
  };
};
function hasPendingMutations(clients) {
  for (const clientState of clients.values()) {
    if (clientState.pending.length > 0) {
      return true;
    }
  }
  return false;
}
function randomID() {
  return Math.random().toString(36).substring(2);
}
function createUnauthorizedResponse(message = "Unauthorized") {
  return new Response(message, {
    status: 401
  });
}
async function handleRequest(request, env, authHandler) {
  const url = new URL(request.url);
  if (url.pathname !== "/connect") {
    return new Response("unknown route", {
      status: 400
    });
  }
  const roomID = url.searchParams.get("roomID");
  if (roomID === null || roomID === "") {
    return new Response("roomID parameter required", {
      status: 400
    });
  }
  const clientID = url.searchParams.get("clientID");
  if (clientID === null || clientID === "") {
    return new Response("clientID parameter required", {
      status: 400
    });
  }
  const encodedAuth = request.headers.get("Sec-WebSocket-Protocol");
  if (encodedAuth === null) {
    return createUnauthorizedResponse("auth required");
  }
  let auth;
  try {
    auth = decodeURIComponent(encodedAuth);
  } catch (e) {
    return createUnauthorizedResponse("invalid auth");
  }
  let userData;
  try {
    userData = await authHandler(auth, roomID);
  } catch (e) {
    return createUnauthorizedResponse();
  }
  if (!userData || !userData.userID) {
    return createUnauthorizedResponse();
  }
  const { server } = env;
  const id = server.idFromName(roomID);
  const stub = server.get(id);
  const requestToDO = new Request(request);
  requestToDO.headers.set(USER_DATA_HEADER_NAME, encodeHeaderValue(JSON.stringify(userData)));
  const responseFromDO = await stub.fetch(requestToDO);
  const responseHeaders = new Headers(responseFromDO.headers);
  responseHeaders.set("Sec-WebSocket-Protocol", encodedAuth);
  const response = new Response(responseFromDO.body, {
    status: responseFromDO.status,
    statusText: responseFromDO.statusText,
    webSocket: responseFromDO.webSocket,
    headers: responseHeaders
  });
  return response;
}
function createWorker(authHandler) {
  return {
    fetch: (request, env) => handleRequest(request, env, authHandler)
  };
}
var DD_URL = "https://http-intake.logs.datadoghq.com/api/v2/logs";
var DatadogLogger = class {
  _messages = [];
  _apiKey;
  _service;
  _host;
  _interval;
  _timerID = 0;
  _flushLock = new Lock();
  _signal = void 0;
  constructor(options2) {
    const { apiKey, service, host, interval = 1e4, signal } = options2;
    this._apiKey = apiKey;
    this._service = service;
    this._host = host;
    this._interval = interval;
    this._signal = signal;
    if (signal) {
      signal.addEventListener("abort", () => {
        if (this._timerID) {
          clearTimeout(this._timerID);
        }
      });
    }
  }
  log(level, ...args) {
    if (this._signal?.aborted) {
      return;
    }
    this._messages.push(makeMessage(args, level));
    if (level === "error") {
      void this.flush();
    } else {
      this._startTimer();
    }
  }
  _startTimer() {
    if (this._signal?.aborted) {
      return;
    }
    if (this._timerID) {
      return;
    }
    this._timerID = setTimeout(() => {
      this._timerID = 0;
      void this.flush();
    }, this._interval);
  }
  flush() {
    return this._flushLock.withLock(async () => {
      if (this._signal?.aborted) {
        return;
      }
      const { length } = this._messages;
      if (length === 0) {
        return;
      }
      const messages = this._messages;
      this._messages = [];
      const body = messages.map((m) => JSON.stringify(m)).join("\n");
      const url = new URL(DD_URL);
      url.searchParams.set("ddsource", "worker");
      this._service && url.searchParams.set("service", this._service);
      this._host && url.searchParams.set("host", this._host);
      let ok = false;
      try {
        const response = await fetch(url.toString(), {
          headers: {
            "DD-API-KEY": this._apiKey
          },
          method: "POST",
          body,
          signal: this._signal
        });
        ok = response.ok;
      } catch {
      }
      if (!ok) {
        this._messages.splice(0, 0, ...messages);
      }
      if (this._messages.length) {
        this._startTimer();
      }
    });
  }
};
function flattenMessage(message) {
  if (Array.isArray(message) && message.length === 1) {
    return flattenMessage(message[0]);
  }
  return message;
}
function makeMessage(message, logLevel) {
  const msg = {
    date: Date.now(),
    message: flattenMessage(message),
    status: logLevel
  };
  if (logLevel === "error") {
    msg.error = { origin: "logger" };
  }
  return msg;
}
var TeeLogger = class {
  _loggers;
  constructor(loggers) {
    this._loggers = loggers;
  }
  log(level, ...args) {
    for (const logger of this._loggers) {
      logger.log(level, ...args);
    }
  }
};

// node_modules/zod/lib/index.mjs
var extendStatics2 = function(e, t) {
  return (extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e2, t2) {
    e2.__proto__ = t2;
  } || function(e2, t2) {
    for (var r in t2)
      Object.prototype.hasOwnProperty.call(t2, r) && (e2[r] = t2[r]);
  })(e, t);
};
function __extends2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  function r() {
    this.constructor = e;
  }
  extendStatics2(e, t), e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var util2;
var __assign2 = function() {
  return (__assign2 = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++)
      for (var a in t = arguments[r])
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    return e;
  }).apply(this, arguments);
};
function __awaiter2(e, s, i, u) {
  return new (i = i || Promise)(function(r, t) {
    function n(e2) {
      try {
        o(u.next(e2));
      } catch (e3) {
        t(e3);
      }
    }
    function a(e2) {
      try {
        o(u.throw(e2));
      } catch (e3) {
        t(e3);
      }
    }
    function o(e2) {
      var t2;
      e2.done ? r(e2.value) : ((t2 = e2.value) instanceof i ? t2 : new i(function(e3) {
        e3(t2);
      })).then(n, a);
    }
    o((u = u.apply(e, s || [])).next());
  });
}
function __generator2(r, n) {
  var a, o, s, i = { label: 0, sent: function() {
    if (1 & s[0])
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, e = { next: t(0), throw: t(1), return: t(2) };
  return typeof Symbol == "function" && (e[Symbol.iterator] = function() {
    return this;
  }), e;
  function t(t2) {
    return function(e2) {
      return function(t3) {
        if (a)
          throw new TypeError("Generator is already executing.");
        for (; i; )
          try {
            if (a = 1, o && (s = 2 & t3[0] ? o.return : t3[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, t3[1])).done)
              return s;
            switch (o = 0, (t3 = s ? [2 & t3[0], s.value] : t3)[0]) {
              case 0:
              case 1:
                s = t3;
                break;
              case 4:
                return i.label++, { value: t3[1], done: false };
              case 5:
                i.label++, o = t3[1], t3 = [0];
                continue;
              case 7:
                t3 = i.ops.pop(), i.trys.pop();
                continue;
              default:
                if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (t3[0] === 6 || t3[0] === 2)) {
                  i = 0;
                  continue;
                }
                if (t3[0] === 3 && (!s || t3[1] > s[0] && t3[1] < s[3])) {
                  i.label = t3[1];
                  break;
                }
                if (t3[0] === 6 && i.label < s[1]) {
                  i.label = s[1], s = t3;
                  break;
                }
                if (s && i.label < s[2]) {
                  i.label = s[2], i.ops.push(t3);
                  break;
                }
                s[2] && i.ops.pop(), i.trys.pop();
                continue;
            }
            t3 = n.call(r, i);
          } catch (e3) {
            t3 = [6, e3], o = 0;
          } finally {
            a = s = 0;
          }
        if (5 & t3[0])
          throw t3[1];
        return { value: t3[0] ? t3[1] : void 0, done: true };
      }([t2, e2]);
    };
  }
}
function __values2(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r)
    return r.call(e);
  if (e && typeof e.length == "number")
    return { next: function() {
      return { value: (e = e && n >= e.length ? void 0 : e) && e[n++], done: !e };
    } };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read2(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n, a, o = r.call(e), s = [];
  try {
    for (; (t === void 0 || 0 < t--) && !(n = o.next()).done; )
      s.push(n.value);
  } catch (e2) {
    a = { error: e2 };
  } finally {
    try {
      n && !n.done && (r = o.return) && r.call(o);
    } finally {
      if (a)
        throw a.error;
    }
  }
  return s;
}
function __spreadArray2(e, t, r) {
  if (r || arguments.length === 2)
    for (var n, a = 0, o = t.length; a < o; a++)
      !n && a in t || ((n = n || Array.prototype.slice.call(t, 0, a))[a] = t[a]);
  return e.concat(n || Array.prototype.slice.call(t));
}
!function(u) {
  u.assertNever = function(e) {
    throw new Error();
  }, u.arrayToEnum = function(e) {
    var t, r, n = {};
    try {
      for (var a = __values2(e), o = a.next(); !o.done; o = a.next()) {
        var s = o.value;
        n[s] = s;
      }
    } catch (e2) {
      t = { error: e2 };
    } finally {
      try {
        o && !o.done && (r = a.return) && r.call(a);
      } finally {
        if (t)
          throw t.error;
      }
    }
    return n;
  }, u.getValidEnumValues = function(t) {
    var r, e, n = u.objectKeys(t).filter(function(e2) {
      return typeof t[t[e2]] != "number";
    }), a = {};
    try {
      for (var o = __values2(n), s = o.next(); !s.done; s = o.next()) {
        var i = s.value;
        a[i] = t[i];
      }
    } catch (e2) {
      r = { error: e2 };
    } finally {
      try {
        s && !s.done && (e = o.return) && e.call(o);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return u.objectValues(a);
  }, u.objectValues = function(t) {
    return u.objectKeys(t).map(function(e) {
      return t[e];
    });
  }, u.objectKeys = typeof Object.keys == "function" ? function(e) {
    return Object.keys(e);
  } : function(e) {
    var t, r = [];
    for (t in e)
      Object.prototype.hasOwnProperty.call(e, t) && r.push(t);
    return r;
  }, u.find = function(e, t) {
    var r, n;
    try {
      for (var a = __values2(e), o = a.next(); !o.done; o = a.next()) {
        var s = o.value;
        if (t(s))
          return s;
      }
    } catch (e2) {
      r = { error: e2 };
    } finally {
      try {
        o && !o.done && (n = a.return) && n.call(a);
      } finally {
        if (r)
          throw r.error;
      }
    }
  }, u.isInteger = typeof Number.isInteger == "function" ? function(e) {
    return Number.isInteger(e);
  } : function(e) {
    return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
  };
}(util2 = util2 || {});
var ZodIssueCode2 = util2.arrayToEnum(["invalid_type", "custom", "invalid_union", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of"]);
var quotelessJson2 = function(e) {
  return JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
};
var ZodError2 = function(r) {
  function t(e) {
    var t2 = this.constructor, u = r.call(this) || this;
    u.issues = [], u.format = function() {
      var p = { _errors: [] }, c = function(e2) {
        var t3, r2;
        try {
          for (var n = __values2(e2.issues), a = n.next(); !a.done; a = n.next()) {
            var o = a.value;
            if (o.code === "invalid_union")
              o.unionErrors.map(c);
            else if (o.code === "invalid_return_type")
              c(o.returnTypeError);
            else if (o.code === "invalid_arguments")
              c(o.argumentsError);
            else if (o.path.length === 0)
              p._errors.push(o.message);
            else
              for (var s = p, i = 0; i < o.path.length; ) {
                var u2, d = o.path[i];
                i === o.path.length - 1 ? (s[d] = s[d] || { _errors: [] }, s[d]._errors.push(o.message)) : typeof d == "string" ? s[d] = s[d] || { _errors: [] } : typeof d == "number" && ((u2 = [])._errors = [], s[d] = s[d] || u2), s = s[d], i++;
              }
          }
        } catch (e3) {
          t3 = { error: e3 };
        } finally {
          try {
            a && !a.done && (r2 = n.return) && r2.call(n);
          } finally {
            if (t3)
              throw t3.error;
          }
        }
      };
      return c(u), p;
    }, u.addIssue = function(e2) {
      u.issues = __spreadArray2(__spreadArray2([], __read2(u.issues), false), [e2], false);
    }, u.addIssues = function(e2) {
      e2 === void 0 && (e2 = []), u.issues = __spreadArray2(__spreadArray2([], __read2(u.issues), false), __read2(e2), false);
    }, u.flatten = function(e2) {
      var t3, r2;
      e2 === void 0 && (e2 = function(e3) {
        return e3.message;
      });
      var n = {}, a = [];
      try {
        for (var o = __values2(u.issues), s = o.next(); !s.done; s = o.next()) {
          var i = s.value;
          0 < i.path.length ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(e2(i))) : a.push(e2(i));
        }
      } catch (e3) {
        t3 = { error: e3 };
      } finally {
        try {
          s && !s.done && (r2 = o.return) && r2.call(o);
        } finally {
          if (t3)
            throw t3.error;
        }
      }
      return { formErrors: a, fieldErrors: n };
    };
    t2 = t2.prototype;
    return Object.setPrototypeOf ? Object.setPrototypeOf(u, t2) : u.__proto__ = t2, u.name = "ZodError", u.issues = e, u;
  }
  return __extends2(t, r), Object.defineProperty(t.prototype, "errors", { get: function() {
    return this.issues;
  }, enumerable: false, configurable: true }), t.prototype.toString = function() {
    return this.message;
  }, Object.defineProperty(t.prototype, "message", { get: function() {
    return JSON.stringify(this.issues, null, 2);
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "isEmpty", { get: function() {
    return this.issues.length === 0;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "formErrors", { get: function() {
    return this.flatten();
  }, enumerable: false, configurable: true }), t.create = function(e) {
    return new t(e);
  }, t;
}(Error);
var defaultErrorMap2 = function(e, t) {
  var r;
  switch (e.code) {
    case ZodIssueCode2.invalid_type:
      r = e.received === "undefined" ? "Required" : "Expected " + e.expected + ", received " + e.received;
      break;
    case ZodIssueCode2.unrecognized_keys:
      r = "Unrecognized key(s) in object: " + e.keys.map(function(e2) {
        return "'" + e2 + "'";
      }).join(", ");
      break;
    case ZodIssueCode2.invalid_union:
      r = "Invalid input";
      break;
    case ZodIssueCode2.invalid_enum_value:
      r = "Invalid enum value. Expected " + e.options.map(function(e2) {
        return typeof e2 == "string" ? "'" + e2 + "'" : e2;
      }).join(" | ") + ", received " + (typeof t.data == "string" ? "'" + t.data + "'" : t.data);
      break;
    case ZodIssueCode2.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case ZodIssueCode2.invalid_return_type:
      r = "Invalid function return type";
      break;
    case ZodIssueCode2.invalid_date:
      r = "Invalid date";
      break;
    case ZodIssueCode2.invalid_string:
      r = e.validation !== "regex" ? "Invalid " + e.validation : "Invalid";
      break;
    case ZodIssueCode2.too_small:
      r = e.type === "array" ? "Should have " + (e.inclusive ? "at least" : "more than") + " " + e.minimum + " items" : e.type === "string" ? "Should be " + (e.inclusive ? "at least" : "over") + " " + e.minimum + " characters" : e.type === "number" ? "Value should be greater than " + (e.inclusive ? "or equal to " : "") + e.minimum : "Invalid input";
      break;
    case ZodIssueCode2.too_big:
      r = e.type === "array" ? "Should have " + (e.inclusive ? "at most" : "less than") + " " + e.maximum + " items" : e.type === "string" ? "Should be " + (e.inclusive ? "at most" : "under") + " " + e.maximum + " characters long" : e.type === "number" ? "Value should be less than " + (e.inclusive ? "or equal to " : "") + e.maximum : "Invalid input";
      break;
    case ZodIssueCode2.custom:
      r = "Invalid input";
      break;
    case ZodIssueCode2.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case ZodIssueCode2.not_multiple_of:
      r = "Should be multiple of " + e.multipleOf;
      break;
    default:
      r = t.defaultError, util2.assertNever(e);
  }
  return { message: r };
};
var overrideErrorMap2 = defaultErrorMap2;
var setErrorMap2 = function(e) {
  overrideErrorMap2 = e;
};
var ZodParsedType2 = util2.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
function cacheAndReturn2(e, t, r) {
  return r && r.set(e, t), t;
}
var getParsedType2 = function(e, t) {
  if (t && t.has(e))
    return t.get(e);
  switch (typeof e) {
    case "undefined":
      return cacheAndReturn2(e, ZodParsedType2.undefined, t);
    case "string":
      return cacheAndReturn2(e, ZodParsedType2.string, t);
    case "number":
      return cacheAndReturn2(e, isNaN(e) ? ZodParsedType2.nan : ZodParsedType2.number, t);
    case "boolean":
      return cacheAndReturn2(e, ZodParsedType2.boolean, t);
    case "function":
      return cacheAndReturn2(e, ZodParsedType2.function, t);
    case "bigint":
      return cacheAndReturn2(e, ZodParsedType2.bigint, t);
    case "object":
      return Array.isArray(e) ? cacheAndReturn2(e, ZodParsedType2.array, t) : e === null ? cacheAndReturn2(e, ZodParsedType2.null, t) : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? cacheAndReturn2(e, ZodParsedType2.promise, t) : e instanceof Map ? cacheAndReturn2(e, ZodParsedType2.map, t) : e instanceof Set ? cacheAndReturn2(e, ZodParsedType2.set, t) : e instanceof Date ? cacheAndReturn2(e, ZodParsedType2.date, t) : cacheAndReturn2(e, ZodParsedType2.object, t);
    default:
      return cacheAndReturn2(e, ZodParsedType2.unknown, t);
  }
};
var makeIssue2 = function(e) {
  var t, r, n = e.data, a = e.path, o = e.errorMaps, e = e.issueData, a = __spreadArray2(__spreadArray2([], __read2(a), false), __read2(e.path || []), false), s = __assign2(__assign2({}, e), { path: a }), i = "", o = o.filter(function(e2) {
    return !!e2;
  }).slice().reverse();
  try {
    for (var u = __values2(o), d = u.next(); !d.done; d = u.next())
      i = (0, d.value)(s, { data: n, defaultError: i }).message;
  } catch (e2) {
    t = { error: e2 };
  } finally {
    try {
      d && !d.done && (r = u.return) && r.call(u);
    } finally {
      if (t)
        throw t.error;
    }
  }
  return __assign2(__assign2({}, e), { path: a, message: e.message || i });
};
var EMPTY_PATH2 = [];
function addIssueToContext2(e, t) {
  t = makeIssue2({ issueData: t, data: e.data, path: e.path, errorMaps: [e.contextualErrorMap, e.schemaErrorMap, overrideErrorMap2, defaultErrorMap2].filter(function(e2) {
    return !!e2;
  }) });
  e.issues.push(t);
}
var errorUtil2;
var ParseStatus2 = function() {
  function l() {
    this.value = "valid";
  }
  return l.prototype.dirty = function() {
    this.value === "valid" && (this.value = "dirty");
  }, l.prototype.abort = function() {
    this.value !== "aborted" && (this.value = "aborted");
  }, l.mergeArray = function(e, t) {
    var r, n, a = [];
    try {
      for (var o = __values2(t), s = o.next(); !s.done; s = o.next()) {
        var i = s.value;
        if (i.status === "aborted")
          return INVALID2;
        i.status === "dirty" && e.dirty(), a.push(i.value);
      }
    } catch (e2) {
      r = { error: e2 };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return { status: e.value, value: a };
  }, l.mergeObjectAsync = function(p, c) {
    return __awaiter2(this, void 0, void 0, function() {
      var t, r, n, a, o, s, i, u, d;
      return __generator2(this, function(e) {
        switch (e.label) {
          case 0:
            t = [], e.label = 1;
          case 1:
            e.trys.push([1, 7, 8, 9]), r = __values2(c), n = r.next(), e.label = 2;
          case 2:
            return n.done ? [3, 6] : (a = n.value, s = (o = t).push, d = {}, [4, a.key]);
          case 3:
            return d.key = e.sent(), [4, a.value];
          case 4:
            s.apply(o, [(d.value = e.sent(), d)]), e.label = 5;
          case 5:
            return n = r.next(), [3, 2];
          case 6:
            return [3, 9];
          case 7:
            return i = e.sent(), i = { error: i }, [3, 9];
          case 8:
            try {
              n && !n.done && (u = r.return) && u.call(r);
            } finally {
              if (i)
                throw i.error;
            }
            return [7];
          case 9:
            return [2, l.mergeObjectSync(p, t)];
        }
      });
    });
  }, l.mergeObjectSync = function(e, t) {
    var r, n, a = {};
    try {
      for (var o = __values2(t), s = o.next(); !s.done; s = o.next()) {
        var i = s.value, u = i.key, d = i.value;
        if (u.status === "aborted")
          return INVALID2;
        if (d.status === "aborted")
          return INVALID2;
        u.status === "dirty" && e.dirty(), d.status === "dirty" && e.dirty(), d.value === void 0 && !i.alwaysSet || (a[u.value] = d.value);
      }
    } catch (e2) {
      r = { error: e2 };
    } finally {
      try {
        s && !s.done && (n = o.return) && n.call(o);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return { status: e.value, value: a };
  }, l;
}();
var INVALID2 = Object.freeze({ status: "aborted" });
var DIRTY2 = function(e) {
  return { status: "dirty", value: e };
};
var OK2 = function(e) {
  return { status: "valid", value: e };
};
var isAborted2 = function(e) {
  return e.status === "aborted";
};
var isDirty2 = function(e) {
  return e.status === "dirty";
};
var isValid2 = function(e) {
  return e.status === "valid";
};
var isAsync2 = function(e) {
  return e instanceof Promise;
};
!function(e) {
  e.errToObj = function(e2) {
    return typeof e2 == "string" ? { message: e2 } : e2 || {};
  }, e.toString = function(e2) {
    return typeof e2 == "string" ? e2 : e2 == null ? void 0 : e2.message;
  };
}(errorUtil2 = errorUtil2 || {});
var handleResult2 = function(e, t) {
  if (isValid2(t))
    return { success: true, data: t.value };
  if (!e.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return { success: false, error: new ZodError2(e.issues) };
};
function processCreateParams2(r) {
  if (!r)
    return {};
  if (r.errorMap && (r.invalid_type_error || r.required_error))
    throw new Error(`Can't use "invalid" or "required" in conjunction with custom error map.`);
  if (r.errorMap)
    return { errorMap: r.errorMap };
  return { errorMap: function(e, t) {
    return e.code !== "invalid_type" ? { message: t.defaultError } : t.data === void 0 && r.required_error ? { message: r.required_error } : r.invalid_type_error ? { message: r.invalid_type_error } : { message: t.defaultError };
  } };
}
var objectUtil2;
var ZodType2 = function() {
  function e(e2) {
    this.spa = this.safeParseAsync, this.superRefine = this._refinement, this._def = e2, this.transform = this.transform.bind(this), this.default = this.default.bind(this);
  }
  return Object.defineProperty(e.prototype, "description", { get: function() {
    return this._def.description;
  }, enumerable: false, configurable: true }), e.prototype._processInputParams = function(e2) {
    return { status: new ParseStatus2(), ctx: __assign2(__assign2({}, e2.parent), { data: e2.data, parsedType: getParsedType2(e2.data, e2.parent.typeCache), schemaErrorMap: this._def.errorMap, path: e2.path, parent: e2.parent }) };
  }, e.prototype._parseSync = function(e2) {
    e2 = this._parse(e2);
    if (isAsync2(e2))
      throw new Error("Synchronous parse encountered promise.");
    return e2;
  }, e.prototype._parseAsync = function(e2) {
    e2 = this._parse(e2);
    return Promise.resolve(e2);
  }, e.prototype.parse = function(e2, t) {
    t = this.safeParse(e2, t);
    if (t.success)
      return t.data;
    throw t.error;
  }, e.prototype.safeParse = function(e2, t) {
    t = { path: (t == null ? void 0 : t.path) || [], issues: [], contextualErrorMap: t == null ? void 0 : t.errorMap, schemaErrorMap: this._def.errorMap, async: (t = t == null ? void 0 : t.async) !== null && t !== void 0 && t, typeCache: /* @__PURE__ */ new Map(), parent: null, data: e2, parsedType: getParsedType2(e2) }, e2 = this._parseSync({ data: e2, path: t.path, parent: t });
    return handleResult2(t, e2);
  }, e.prototype.parseAsync = function(r, n) {
    return __awaiter2(this, void 0, void 0, function() {
      var t;
      return __generator2(this, function(e2) {
        switch (e2.label) {
          case 0:
            return [4, this.safeParseAsync(r, n)];
          case 1:
            if ((t = e2.sent()).success)
              return [2, t.data];
            throw t.error;
        }
      });
    });
  }, e.prototype.safeParseAsync = function(n, a) {
    return __awaiter2(this, void 0, void 0, function() {
      var t, r;
      return __generator2(this, function(e2) {
        switch (e2.label) {
          case 0:
            return t = { path: (a == null ? void 0 : a.path) || [], issues: [], contextualErrorMap: a == null ? void 0 : a.errorMap, schemaErrorMap: this._def.errorMap, async: true, typeCache: /* @__PURE__ */ new Map(), parent: null, data: n, parsedType: getParsedType2(n) }, r = this._parse({ data: n, path: [], parent: t }), [4, isAsync2(r) ? r : Promise.resolve(r)];
          case 1:
            return r = e2.sent(), [2, handleResult2(t, r)];
        }
      });
    });
  }, e.prototype.refine = function(a, o) {
    return this._refinement(function(t, r) {
      function n() {
        return r.addIssue(__assign2({ code: ZodIssueCode2.custom }, (e3 = t, typeof o == "string" || o === void 0 ? { message: o } : typeof o == "function" ? o(e3) : o)));
        var e3;
      }
      var e2 = a(t);
      return e2 instanceof Promise ? e2.then(function(e3) {
        return !!e3 || (n(), false);
      }) : !!e2 || (n(), false);
    });
  }, e.prototype.refinement = function(r, n) {
    return this._refinement(function(e2, t) {
      return !!r(e2) || (t.addIssue(typeof n == "function" ? n(e2, t) : n), false);
    });
  }, e.prototype._refinement = function(e2) {
    return new ZodEffects2({ schema: this, typeName: ZodFirstPartyTypeKind2.ZodEffects, effect: { type: "refinement", refinement: e2 } });
  }, e.prototype.optional = function() {
    return ZodOptional2.create(this);
  }, e.prototype.nullable = function() {
    return ZodNullable2.create(this);
  }, e.prototype.nullish = function() {
    return this.optional().nullable();
  }, e.prototype.array = function() {
    return ZodArray2.create(this);
  }, e.prototype.promise = function() {
    return ZodPromise2.create(this);
  }, e.prototype.or = function(e2) {
    return ZodUnion2.create([this, e2]);
  }, e.prototype.and = function(e2) {
    return ZodIntersection2.create(this, e2);
  }, e.prototype.transform = function(e2) {
    return new ZodEffects2({ schema: this, typeName: ZodFirstPartyTypeKind2.ZodEffects, effect: { type: "transform", transform: e2 } });
  }, e.prototype.default = function(e2) {
    return new ZodDefault2({ innerType: this, defaultValue: typeof e2 == "function" ? e2 : function() {
      return e2;
    }, typeName: ZodFirstPartyTypeKind2.ZodDefault });
  }, e.prototype.describe = function(e2) {
    return new this.constructor(__assign2(__assign2({}, this._def), { description: e2 }));
  }, e.prototype.isOptional = function() {
    return this.safeParse(void 0).success;
  }, e.prototype.isNullable = function() {
    return this.safeParse(null).success;
  }, e;
}();
var cuidRegex2 = /^c[^\s-]{8,}$/i;
var uuidRegex2 = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
var emailRegex2 = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var ZodString2 = function(e) {
  function t() {
    var n = e !== null && e.apply(this, arguments) || this;
    return n._regex = function(t2, e2, r) {
      return n.refinement(function(e3) {
        return t2.test(e3);
      }, __assign2({ validation: e2, code: ZodIssueCode2.invalid_string }, errorUtil2.errToObj(r)));
    }, n.nonempty = function(e2) {
      return n.min(1, errorUtil2.errToObj(e2));
    }, n;
  }
  return __extends2(t, e), t.prototype._parse = function(e2) {
    var t2, r, e2 = this._processInputParams(e2), n = e2.status, a = e2.ctx;
    if (a.parsedType !== ZodParsedType2.string)
      return addIssueToContext2(a, { code: ZodIssueCode2.invalid_type, expected: ZodParsedType2.string, received: a.parsedType }), INVALID2;
    try {
      for (var o = __values2(this._def.checks), s = o.next(); !s.done; s = o.next()) {
        var i = s.value;
        if (i.kind === "min")
          a.data.length < i.value && (addIssueToContext2(a, { code: ZodIssueCode2.too_small, minimum: i.value, type: "string", inclusive: true, message: i.message }), n.dirty());
        else if (i.kind === "max")
          a.data.length > i.value && (addIssueToContext2(a, { code: ZodIssueCode2.too_big, maximum: i.value, type: "string", inclusive: true, message: i.message }), n.dirty());
        else if (i.kind === "email")
          emailRegex2.test(a.data) || (addIssueToContext2(a, { validation: "email", code: ZodIssueCode2.invalid_string, message: i.message }), n.dirty());
        else if (i.kind === "uuid")
          uuidRegex2.test(a.data) || (addIssueToContext2(a, { validation: "uuid", code: ZodIssueCode2.invalid_string, message: i.message }), n.dirty());
        else if (i.kind === "cuid")
          cuidRegex2.test(a.data) || (addIssueToContext2(a, { validation: "cuid", code: ZodIssueCode2.invalid_string, message: i.message }), n.dirty());
        else if (i.kind === "url")
          try {
            new URL(a.data);
          } catch (e3) {
            addIssueToContext2(a, { validation: "url", code: ZodIssueCode2.invalid_string, message: i.message }), n.dirty();
          }
        else
          i.kind === "regex" && (i.regex.lastIndex = 0, i.regex.test(a.data) || (addIssueToContext2(a, { validation: "regex", code: ZodIssueCode2.invalid_string, message: i.message }), n.dirty()));
      }
    } catch (e3) {
      t2 = { error: e3 };
    } finally {
      try {
        s && !s.done && (r = o.return) && r.call(o);
      } finally {
        if (t2)
          throw t2.error;
      }
    }
    return { status: n.value, value: a.data };
  }, t.prototype._addCheck = function(e2) {
    return new t(__assign2(__assign2({}, this._def), { checks: __spreadArray2(__spreadArray2([], __read2(this._def.checks), false), [e2], false) }));
  }, t.prototype.email = function(e2) {
    return this._addCheck(__assign2({ kind: "email" }, errorUtil2.errToObj(e2)));
  }, t.prototype.url = function(e2) {
    return this._addCheck(__assign2({ kind: "url" }, errorUtil2.errToObj(e2)));
  }, t.prototype.uuid = function(e2) {
    return this._addCheck(__assign2({ kind: "uuid" }, errorUtil2.errToObj(e2)));
  }, t.prototype.cuid = function(e2) {
    return this._addCheck(__assign2({ kind: "cuid" }, errorUtil2.errToObj(e2)));
  }, t.prototype.regex = function(e2, t2) {
    return this._addCheck(__assign2({ kind: "regex", regex: e2 }, errorUtil2.errToObj(t2)));
  }, t.prototype.min = function(e2, t2) {
    return this._addCheck(__assign2({ kind: "min", value: e2 }, errorUtil2.errToObj(t2)));
  }, t.prototype.max = function(e2, t2) {
    return this._addCheck(__assign2({ kind: "max", value: e2 }, errorUtil2.errToObj(t2)));
  }, t.prototype.length = function(e2, t2) {
    return this.min(e2, t2).max(e2, t2);
  }, Object.defineProperty(t.prototype, "isEmail", { get: function() {
    return !!this._def.checks.find(function(e2) {
      return e2.kind === "email";
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "isURL", { get: function() {
    return !!this._def.checks.find(function(e2) {
      return e2.kind === "url";
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "isUUID", { get: function() {
    return !!this._def.checks.find(function(e2) {
      return e2.kind === "uuid";
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "isCUID", { get: function() {
    return !!this._def.checks.find(function(e2) {
      return e2.kind === "cuid";
    });
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "minLength", { get: function() {
    var t2 = -1 / 0;
    return this._def.checks.map(function(e2) {
      e2.kind === "min" && (t2 === null || e2.value > t2) && (t2 = e2.value);
    }), t2;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "maxLength", { get: function() {
    var t2 = null;
    return this._def.checks.map(function(e2) {
      e2.kind === "max" && (t2 === null || e2.value < t2) && (t2 = e2.value);
    }), t2;
  }, enumerable: false, configurable: true }), t.create = function(e2) {
    return new t(__assign2({ checks: [], typeName: ZodFirstPartyTypeKind2.ZodString }, processCreateParams2(e2)));
  }, t;
}(ZodType2);
var ZodNumber2 = function(t) {
  function a() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e.min = e.gte, e.max = e.lte, e.step = e.multipleOf, e;
  }
  return __extends2(a, t), a.prototype._parse = function(e) {
    var t2, r, e = this._processInputParams(e), n = e.status, a2 = e.ctx;
    if (a2.parsedType !== ZodParsedType2.number)
      return addIssueToContext2(a2, { code: ZodIssueCode2.invalid_type, expected: ZodParsedType2.number, received: a2.parsedType }), INVALID2;
    try {
      for (var o = __values2(this._def.checks), s = o.next(); !s.done; s = o.next()) {
        var i = s.value;
        i.kind === "int" ? util2.isInteger(a2.data) || (addIssueToContext2(a2, { code: ZodIssueCode2.invalid_type, expected: "integer", received: "float", message: i.message }), n.dirty()) : i.kind === "min" ? (i.inclusive ? a2.data < i.value : a2.data <= i.value) && (addIssueToContext2(a2, { code: ZodIssueCode2.too_small, minimum: i.value, type: "number", inclusive: i.inclusive, message: i.message }), n.dirty()) : i.kind === "max" ? (i.inclusive ? a2.data > i.value : a2.data >= i.value) && (addIssueToContext2(a2, { code: ZodIssueCode2.too_big, maximum: i.value, type: "number", inclusive: i.inclusive, message: i.message }), n.dirty()) : i.kind === "multipleOf" ? a2.data % i.value != 0 && (addIssueToContext2(a2, { code: ZodIssueCode2.not_multiple_of, multipleOf: i.value, message: i.message }), n.dirty()) : util2.assertNever(i);
      }
    } catch (e2) {
      t2 = { error: e2 };
    } finally {
      try {
        s && !s.done && (r = o.return) && r.call(o);
      } finally {
        if (t2)
          throw t2.error;
      }
    }
    return { status: n.value, value: a2.data };
  }, a.prototype.gte = function(e, t2) {
    return this.setLimit("min", e, true, errorUtil2.toString(t2));
  }, a.prototype.gt = function(e, t2) {
    return this.setLimit("min", e, false, errorUtil2.toString(t2));
  }, a.prototype.lte = function(e, t2) {
    return this.setLimit("max", e, true, errorUtil2.toString(t2));
  }, a.prototype.lt = function(e, t2) {
    return this.setLimit("max", e, false, errorUtil2.toString(t2));
  }, a.prototype.setLimit = function(e, t2, r, n) {
    return new a(__assign2(__assign2({}, this._def), { checks: __spreadArray2(__spreadArray2([], __read2(this._def.checks), false), [{ kind: e, value: t2, inclusive: r, message: errorUtil2.toString(n) }], false) }));
  }, a.prototype._addCheck = function(e) {
    return new a(__assign2(__assign2({}, this._def), { checks: __spreadArray2(__spreadArray2([], __read2(this._def.checks), false), [e], false) }));
  }, a.prototype.int = function(e) {
    return this._addCheck({ kind: "int", message: errorUtil2.toString(e) });
  }, a.prototype.positive = function(e) {
    return this._addCheck({ kind: "min", value: 0, inclusive: false, message: errorUtil2.toString(e) });
  }, a.prototype.negative = function(e) {
    return this._addCheck({ kind: "max", value: 0, inclusive: false, message: errorUtil2.toString(e) });
  }, a.prototype.nonpositive = function(e) {
    return this._addCheck({ kind: "max", value: 0, inclusive: true, message: errorUtil2.toString(e) });
  }, a.prototype.nonnegative = function(e) {
    return this._addCheck({ kind: "min", value: 0, inclusive: true, message: errorUtil2.toString(e) });
  }, a.prototype.multipleOf = function(e, t2) {
    return this._addCheck({ kind: "multipleOf", value: e, message: errorUtil2.toString(t2) });
  }, Object.defineProperty(a.prototype, "minValue", { get: function() {
    var t2, e, r = null;
    try {
      for (var n = __values2(this._def.checks), a2 = n.next(); !a2.done; a2 = n.next()) {
        var o = a2.value;
        o.kind === "min" && (r === null || o.value > r) && (r = o.value);
      }
    } catch (e2) {
      t2 = { error: e2 };
    } finally {
      try {
        a2 && !a2.done && (e = n.return) && e.call(n);
      } finally {
        if (t2)
          throw t2.error;
      }
    }
    return r;
  }, enumerable: false, configurable: true }), Object.defineProperty(a.prototype, "maxValue", { get: function() {
    var t2, e, r = null;
    try {
      for (var n = __values2(this._def.checks), a2 = n.next(); !a2.done; a2 = n.next()) {
        var o = a2.value;
        o.kind === "max" && (r === null || o.value < r) && (r = o.value);
      }
    } catch (e2) {
      t2 = { error: e2 };
    } finally {
      try {
        a2 && !a2.done && (e = n.return) && e.call(n);
      } finally {
        if (t2)
          throw t2.error;
      }
    }
    return r;
  }, enumerable: false, configurable: true }), Object.defineProperty(a.prototype, "isInt", { get: function() {
    return !!this._def.checks.find(function(e) {
      return e.kind === "int";
    });
  }, enumerable: false, configurable: true }), a.create = function(e) {
    return new a(__assign2(__assign2({ checks: [], typeName: ZodFirstPartyTypeKind2.ZodNumber }, processCreateParams2(e)), processCreateParams2(e)));
  }, a;
}(ZodType2);
var ZodBigInt2 = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(t, e), t.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return e2.parsedType !== ZodParsedType2.bigint ? (addIssueToContext2(e2, { code: ZodIssueCode2.invalid_type, expected: ZodParsedType2.bigint, received: e2.parsedType }), INVALID2) : OK2(e2.data);
  }, t.create = function(e2) {
    return new t(__assign2({ typeName: ZodFirstPartyTypeKind2.ZodBigInt }, processCreateParams2(e2)));
  }, t;
}(ZodType2);
var ZodBoolean2 = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(t, e), t.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return e2.parsedType !== ZodParsedType2.boolean ? (addIssueToContext2(e2, { code: ZodIssueCode2.invalid_type, expected: ZodParsedType2.boolean, received: e2.parsedType }), INVALID2) : OK2(e2.data);
  }, t.create = function(e2) {
    return new t(__assign2({ typeName: ZodFirstPartyTypeKind2.ZodBoolean }, processCreateParams2(e2)));
  }, t;
}(ZodType2);
var ZodDate2 = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(t, e), t.prototype._parse = function(e2) {
    var t2 = this._processInputParams(e2), e2 = t2.status, t2 = t2.ctx;
    return t2.parsedType !== ZodParsedType2.date ? (addIssueToContext2(t2, { code: ZodIssueCode2.invalid_type, expected: ZodParsedType2.date, received: t2.parsedType }), INVALID2) : isNaN(t2.data.getTime()) ? (addIssueToContext2(t2, { code: ZodIssueCode2.invalid_date }), INVALID2) : { status: e2.value, value: new Date(t2.data.getTime()) };
  }, t.create = function(e2) {
    return new t(__assign2({ typeName: ZodFirstPartyTypeKind2.ZodDate }, processCreateParams2(e2)));
  }, t;
}(ZodType2);
var ZodUndefined2 = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(t, e), t.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return e2.parsedType !== ZodParsedType2.undefined ? (addIssueToContext2(e2, { code: ZodIssueCode2.invalid_type, expected: ZodParsedType2.undefined, received: e2.parsedType }), INVALID2) : OK2(e2.data);
  }, t.create = function(e2) {
    return new t(__assign2({ typeName: ZodFirstPartyTypeKind2.ZodUndefined }, processCreateParams2(e2)));
  }, t;
}(ZodType2);
var ZodNull2 = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(t, e), t.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return e2.parsedType !== ZodParsedType2.null ? (addIssueToContext2(e2, { code: ZodIssueCode2.invalid_type, expected: ZodParsedType2.null, received: e2.parsedType }), INVALID2) : OK2(e2.data);
  }, t.create = function(e2) {
    return new t(__assign2({ typeName: ZodFirstPartyTypeKind2.ZodNull }, processCreateParams2(e2)));
  }, t;
}(ZodType2);
var ZodAny2 = function(t) {
  function r() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e._any = true, e;
  }
  return __extends2(r, t), r.prototype._parse = function(e) {
    e = this._processInputParams(e).ctx;
    return OK2(e.data);
  }, r.create = function(e) {
    return new r(__assign2({ typeName: ZodFirstPartyTypeKind2.ZodAny }, processCreateParams2(e)));
  }, r;
}(ZodType2);
var ZodUnknown2 = function(t) {
  function r() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e._unknown = true, e;
  }
  return __extends2(r, t), r.prototype._parse = function(e) {
    e = this._processInputParams(e).ctx;
    return OK2(e.data);
  }, r.create = function(e) {
    return new r(__assign2({ typeName: ZodFirstPartyTypeKind2.ZodUnknown }, processCreateParams2(e)));
  }, r;
}(ZodType2);
var ZodNever2 = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(t, e), t.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return addIssueToContext2(e2, { code: ZodIssueCode2.invalid_type, expected: ZodParsedType2.never, received: e2.parsedType }), INVALID2;
  }, t.create = function(e2) {
    return new t(__assign2({ typeName: ZodFirstPartyTypeKind2.ZodNever }, processCreateParams2(e2)));
  }, t;
}(ZodType2);
var ZodVoid2 = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(t, e), t.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return e2.parsedType !== ZodParsedType2.undefined ? (addIssueToContext2(e2, { code: ZodIssueCode2.invalid_type, expected: ZodParsedType2.void, received: e2.parsedType }), INVALID2) : OK2(e2.data);
  }, t.create = function(e2) {
    return new t(__assign2({ typeName: ZodFirstPartyTypeKind2.ZodVoid }, processCreateParams2(e2)));
  }, t;
}(ZodType2);
var ZodArray2 = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(r, e), r.prototype._parse = function(e2) {
    var e2 = this._processInputParams(e2), t = e2.status, r2 = e2.ctx, n = this._def;
    if (r2.parsedType !== ZodParsedType2.array)
      return addIssueToContext2(r2, { code: ZodIssueCode2.invalid_type, expected: ZodParsedType2.array, received: r2.parsedType }), INVALID2;
    if (n.minLength !== null && r2.data.length < n.minLength.value && (addIssueToContext2(r2, { code: ZodIssueCode2.too_small, minimum: n.minLength.value, type: "array", inclusive: true, message: n.minLength.message }), t.dirty()), n.maxLength !== null && r2.data.length > n.maxLength.value && (addIssueToContext2(r2, { code: ZodIssueCode2.too_big, maximum: n.maxLength.value, type: "array", inclusive: true, message: n.maxLength.message }), t.dirty()), r2.async)
      return Promise.all(r2.data.map(function(e3, t2) {
        return n.type._parseAsync({ parent: r2, path: __spreadArray2(__spreadArray2([], __read2(r2.path), false), [t2], false), data: e3 });
      })).then(function(e3) {
        return ParseStatus2.mergeArray(t, e3);
      });
    e2 = r2.data.map(function(e3, t2) {
      return n.type._parseSync({ parent: r2, path: __spreadArray2(__spreadArray2([], __read2(r2.path), false), [t2], false), data: e3 });
    });
    return ParseStatus2.mergeArray(t, e2);
  }, Object.defineProperty(r.prototype, "element", { get: function() {
    return this._def.type;
  }, enumerable: false, configurable: true }), r.prototype.min = function(e2, t) {
    return new r(__assign2(__assign2({}, this._def), { minLength: { value: e2, message: errorUtil2.toString(t) } }));
  }, r.prototype.max = function(e2, t) {
    return new r(__assign2(__assign2({}, this._def), { maxLength: { value: e2, message: errorUtil2.toString(t) } }));
  }, r.prototype.length = function(e2, t) {
    return this.min(e2, t).max(e2, t);
  }, r.prototype.nonempty = function(e2) {
    return this.min(1, e2);
  }, r.create = function(e2, t) {
    return new r(__assign2({ type: e2, minLength: null, maxLength: null, typeName: ZodFirstPartyTypeKind2.ZodArray }, processCreateParams2(t)));
  }, r;
}(ZodType2);
(objectUtil2 || (objectUtil2 = {})).mergeShapes = function(e, t) {
  return __assign2(__assign2({}, e), t);
};
var AugmentFactory2 = function(t) {
  return function(e) {
    return new ZodObject2(__assign2(__assign2({}, t), { shape: function() {
      return __assign2(__assign2({}, t.shape()), e);
    } }));
  };
};
function deepPartialify2(e) {
  if (e instanceof ZodObject2) {
    var t, r = {};
    for (t in e.shape) {
      var n = e.shape[t];
      r[t] = ZodOptional2.create(deepPartialify2(n));
    }
    return new ZodObject2(__assign2(__assign2({}, e._def), { shape: function() {
      return r;
    } }));
  }
  return e instanceof ZodArray2 ? ZodArray2.create(deepPartialify2(e.element)) : e instanceof ZodOptional2 ? ZodOptional2.create(deepPartialify2(e.unwrap())) : e instanceof ZodNullable2 ? ZodNullable2.create(deepPartialify2(e.unwrap())) : e instanceof ZodTuple2 ? ZodTuple2.create(e.items.map(function(e2) {
    return deepPartialify2(e2);
  })) : e;
}
var ZodObject2 = function(t) {
  function s() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e._cached = null, e.nonstrict = e.passthrough, e.augment = AugmentFactory2(e._def), e.extend = AugmentFactory2(e._def), e;
  }
  return __extends2(s, t), s.prototype._getCached = function() {
    if (this._cached !== null)
      return this._cached;
    var e = this._def.shape(), t2 = util2.objectKeys(e);
    return this._cached = { shape: e, keys: t2 };
  }, s.prototype._parse = function(e) {
    var t2, r, n, a, o, s2 = this, i = this._processInputParams(e), u = i.status, d = i.ctx;
    if (d.parsedType !== ZodParsedType2.object)
      return addIssueToContext2(d, { code: ZodIssueCode2.invalid_type, expected: ZodParsedType2.object, received: d.parsedType }), INVALID2;
    var e = this._getCached(), p = e.shape, i = e.keys, e = util2.objectKeys(d.data).filter(function(e2) {
      return !(e2 in p);
    }), c = [];
    try {
      for (var l = __values2(i), y = l.next(); !y.done; y = l.next()) {
        var f = y.value, _ = p[f], h = d.data[f];
        c.push({ key: { status: "valid", value: f }, value: _._parse({ parent: d, data: h, path: __spreadArray2(__spreadArray2([], __read2(d.path), false), [f], false) }), alwaysSet: f in d.data });
      }
    } catch (e2) {
      v = { error: e2 };
    } finally {
      try {
        y && !y.done && (t2 = l.return) && t2.call(l);
      } finally {
        if (v)
          throw v.error;
      }
    }
    if (this._def.catchall instanceof ZodNever2) {
      var v = this._def.unknownKeys;
      if (v === "passthrough")
        try {
          for (var m = __values2(e), Z = m.next(); !Z.done; Z = m.next()) {
            f = Z.value;
            c.push({ key: { status: "valid", value: f }, value: { status: "valid", value: d.data[f] } });
          }
        } catch (e2) {
          r = { error: e2 };
        } finally {
          try {
            Z && !Z.done && (n = m.return) && n.call(m);
          } finally {
            if (r)
              throw r.error;
          }
        }
      else if (v === "strict")
        0 < e.length && (addIssueToContext2(d, { code: ZodIssueCode2.unrecognized_keys, keys: e }), u.dirty());
      else if (v !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      var g = this._def.catchall;
      try {
        for (var T = __values2(e), b = T.next(); !b.done; b = T.next()) {
          f = b.value, h = d.data[f];
          c.push({ key: { status: "valid", value: f }, value: g._parse({ parent: d, path: __spreadArray2(__spreadArray2([], __read2(d.path), false), [f], false), data: h }), alwaysSet: f in d.data });
        }
      } catch (e2) {
        a = { error: e2 };
      } finally {
        try {
          b && !b.done && (o = T.return) && o.call(T);
        } finally {
          if (a)
            throw a.error;
        }
      }
    }
    return d.async ? Promise.resolve().then(function() {
      return __awaiter2(s2, void 0, void 0, function() {
        var t3, r2, n2, a2, o2, s3, i2, u2, d2;
        return __generator2(this, function(e2) {
          switch (e2.label) {
            case 0:
              t3 = [], e2.label = 1;
            case 1:
              e2.trys.push([1, 7, 8, 9]), r2 = __values2(c), n2 = r2.next(), e2.label = 2;
            case 2:
              return n2.done ? [3, 6] : [4, (a2 = n2.value).key];
            case 3:
              return d2 = e2.sent(), s3 = (o2 = t3).push, d2 = { key: d2 }, [4, a2.value];
            case 4:
              s3.apply(o2, [(d2.value = e2.sent(), d2.alwaysSet = a2.alwaysSet, d2)]), e2.label = 5;
            case 5:
              return n2 = r2.next(), [3, 2];
            case 6:
              return [3, 9];
            case 7:
              return i2 = e2.sent(), i2 = { error: i2 }, [3, 9];
            case 8:
              try {
                n2 && !n2.done && (u2 = r2.return) && u2.call(r2);
              } finally {
                if (i2)
                  throw i2.error;
              }
              return [7];
            case 9:
              return [2, t3];
          }
        });
      });
    }).then(function(e2) {
      return ParseStatus2.mergeObjectSync(u, e2);
    }) : ParseStatus2.mergeObjectSync(u, c);
  }, Object.defineProperty(s.prototype, "shape", { get: function() {
    return this._def.shape();
  }, enumerable: false, configurable: true }), s.prototype.strict = function(a) {
    var o = this;
    return errorUtil2.errToObj, new s(__assign2(__assign2(__assign2({}, this._def), { unknownKeys: "strict" }), a !== void 0 ? { errorMap: function(e, t2) {
      var r, n, t2 = (n = (r = (n = o._def).errorMap) === null || r === void 0 ? void 0 : r.call(n, e, t2).message) !== null && n !== void 0 ? n : t2.defaultError;
      return e.code === "unrecognized_keys" ? { message: (e = errorUtil2.errToObj(a).message) !== null && e !== void 0 ? e : t2 } : { message: t2 };
    } } : {}));
  }, s.prototype.strip = function() {
    return new s(__assign2(__assign2({}, this._def), { unknownKeys: "strip" }));
  }, s.prototype.passthrough = function() {
    return new s(__assign2(__assign2({}, this._def), { unknownKeys: "passthrough" }));
  }, s.prototype.setKey = function(e, t2) {
    var r;
    return this.augment(((r = {})[e] = t2, r));
  }, s.prototype.merge = function(e) {
    var t2 = objectUtil2.mergeShapes(this._def.shape(), e._def.shape());
    return new s({ unknownKeys: e._def.unknownKeys, catchall: e._def.catchall, shape: function() {
      return t2;
    }, typeName: ZodFirstPartyTypeKind2.ZodObject });
  }, s.prototype.catchall = function(e) {
    return new s(__assign2(__assign2({}, this._def), { catchall: e }));
  }, s.prototype.pick = function(e) {
    var t2 = this, r = {};
    return util2.objectKeys(e).map(function(e2) {
      r[e2] = t2.shape[e2];
    }), new s(__assign2(__assign2({}, this._def), { shape: function() {
      return r;
    } }));
  }, s.prototype.omit = function(t2) {
    var r = this, n = {};
    return util2.objectKeys(this.shape).map(function(e) {
      util2.objectKeys(t2).indexOf(e) === -1 && (n[e] = r.shape[e]);
    }), new s(__assign2(__assign2({}, this._def), { shape: function() {
      return n;
    } }));
  }, s.prototype.deepPartial = function() {
    return deepPartialify2(this);
  }, s.prototype.partial = function(t2) {
    var e, r = this, n = {};
    if (t2)
      return util2.objectKeys(this.shape).map(function(e2) {
        util2.objectKeys(t2).indexOf(e2) === -1 ? n[e2] = r.shape[e2] : n[e2] = r.shape[e2].optional();
      }), new s(__assign2(__assign2({}, this._def), { shape: function() {
        return n;
      } }));
    for (e in this.shape) {
      var a = this.shape[e];
      n[e] = a.optional();
    }
    return new s(__assign2(__assign2({}, this._def), { shape: function() {
      return n;
    } }));
  }, s.prototype.required = function() {
    var e, t2 = {};
    for (e in this.shape) {
      for (var r = this.shape[e]; r instanceof ZodOptional2; )
        r = r._def.innerType;
      t2[e] = r;
    }
    return new s(__assign2(__assign2({}, this._def), { shape: function() {
      return t2;
    } }));
  }, s.create = function(e, t2) {
    return new s(__assign2({ shape: function() {
      return e;
    }, unknownKeys: "strip", catchall: ZodNever2.create(), typeName: ZodFirstPartyTypeKind2.ZodObject }, processCreateParams2(t2)));
  }, s.strictCreate = function(e, t2) {
    return new s(__assign2({ shape: function() {
      return e;
    }, unknownKeys: "strict", catchall: ZodNever2.create(), typeName: ZodFirstPartyTypeKind2.ZodObject }, processCreateParams2(t2)));
  }, s.lazycreate = function(e, t2) {
    return new s(__assign2({ shape: e, unknownKeys: "strip", catchall: ZodNever2.create(), typeName: ZodFirstPartyTypeKind2.ZodObject }, processCreateParams2(t2)));
  }, s;
}(ZodType2);
var ZodUnion2 = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(r, e), r.prototype._parse = function(e2) {
    var t = this, c = this._processInputParams(e2).ctx, e2 = this._def.options;
    function r2(e3) {
      var t2, r3, n, a, o;
      try {
        for (var s = __values2(e3), i = s.next(); !i.done; i = s.next())
          if ((u = i.value).result.status === "valid")
            return u.result;
      } catch (e4) {
        t2 = { error: e4 };
      } finally {
        try {
          i && !i.done && (r3 = s.return) && r3.call(s);
        } finally {
          if (t2)
            throw t2.error;
        }
      }
      try {
        for (var u, d = __values2(e3), p = d.next(); !p.done; p = d.next())
          if ((u = p.value).result.status === "dirty")
            return (o = c.issues).push.apply(o, __spreadArray2([], __read2(u.ctx.issues), false)), u.result;
      } catch (e4) {
        n = { error: e4 };
      } finally {
        try {
          p && !p.done && (a = d.return) && a.call(d);
        } finally {
          if (n)
            throw n.error;
        }
      }
      e3 = e3.map(function(e4) {
        return new ZodError2(e4.ctx.issues);
      });
      return addIssueToContext2(c, { code: ZodIssueCode2.invalid_union, unionErrors: e3 }), INVALID2;
    }
    return c.async ? Promise.all(e2.map(function(n) {
      return __awaiter2(t, void 0, void 0, function() {
        var t2, r3;
        return __generator2(this, function(e3) {
          switch (e3.label) {
            case 0:
              return t2 = __assign2(__assign2({}, c), { issues: [], parent: null }), r3 = {}, [4, n._parseAsync({ data: c.data, path: c.path, parent: t2 })];
            case 1:
              return [2, (r3.result = e3.sent(), r3.ctx = t2, r3)];
          }
        });
      });
    })).then(r2) : r2(e2.map(function(e3) {
      var t2 = __assign2(__assign2({}, c), { issues: [], parent: null });
      return { result: e3._parseSync({ data: c.data, path: c.path, parent: t2 }), ctx: t2 };
    }));
  }, Object.defineProperty(r.prototype, "options", { get: function() {
    return this._def.options;
  }, enumerable: false, configurable: true }), r.create = function(e2, t) {
    return new r(__assign2({ options: e2, typeName: ZodFirstPartyTypeKind2.ZodUnion }, processCreateParams2(t)));
  }, r;
}(ZodType2);
function mergeValues2(e, t) {
  var r, n, a = getParsedType2(e), o = getParsedType2(t);
  if (e === t)
    return { valid: true, data: e };
  if (a === ZodParsedType2.object && o === ZodParsedType2.object) {
    var s = util2.objectKeys(t), i = util2.objectKeys(e).filter(function(e2) {
      return s.indexOf(e2) !== -1;
    }), u = __assign2(__assign2({}, e), t);
    try {
      for (var d = __values2(i), p = d.next(); !p.done; p = d.next()) {
        var c = p.value;
        if (!(l = mergeValues2(e[c], t[c])).valid)
          return { valid: false };
        u[c] = l.data;
      }
    } catch (e2) {
      r = { error: e2 };
    } finally {
      try {
        p && !p.done && (n = d.return) && n.call(d);
      } finally {
        if (r)
          throw r.error;
      }
    }
    return { valid: true, data: u };
  }
  if (a !== ZodParsedType2.array || o !== ZodParsedType2.array)
    return { valid: false };
  if (e.length !== t.length)
    return { valid: false };
  for (var l, y = [], f = 0; f < e.length; f++) {
    if (!(l = mergeValues2(e[f], t[f])).valid)
      return { valid: false };
    y.push(l.data);
  }
  return { valid: true, data: y };
}
var ZodIntersection2 = function(e) {
  function n() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(n, e), n.prototype._parse = function(e2) {
    function r(e3, t) {
      if (isAborted2(e3) || isAborted2(t))
        return INVALID2;
      var r2 = mergeValues2(e3.value, t.value);
      return r2.valid ? ((isDirty2(e3) || isDirty2(t)) && n2.dirty(), { status: n2.value, value: r2.data }) : (addIssueToContext2(a, { code: ZodIssueCode2.invalid_intersection_types }), INVALID2);
    }
    var e2 = this._processInputParams(e2), n2 = e2.status, a = e2.ctx;
    return a.async ? Promise.all([this._def.left._parseAsync({ data: a.data, path: a.path, parent: a }), this._def.right._parseAsync({ data: a.data, path: a.path, parent: a })]).then(function(e3) {
      var t = __read2(e3, 2), e3 = t[0], t = t[1];
      return r(e3, t);
    }) : r(this._def.left._parseSync({ data: a.data, path: a.path, parent: a }), this._def.right._parseSync({ data: a.data, path: a.path, parent: a }));
  }, n.create = function(e2, t, r) {
    return new n(__assign2({ left: e2, right: t, typeName: ZodFirstPartyTypeKind2.ZodIntersection }, processCreateParams2(r)));
  }, n;
}(ZodType2);
var ZodTuple2 = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(r, e), r.prototype._parse = function(e2) {
    var n = this, e2 = this._processInputParams(e2), t = e2.status, a = e2.ctx;
    if (a.parsedType !== ZodParsedType2.array)
      return addIssueToContext2(a, { code: ZodIssueCode2.invalid_type, expected: ZodParsedType2.array, received: a.parsedType }), INVALID2;
    if (a.data.length < this._def.items.length)
      return addIssueToContext2(a, { code: ZodIssueCode2.too_small, minimum: this._def.items.length, inclusive: true, type: "array" }), INVALID2;
    !this._def.rest && a.data.length > this._def.items.length && (addIssueToContext2(a, { code: ZodIssueCode2.too_big, maximum: this._def.items.length, inclusive: true, type: "array" }), t.dirty());
    e2 = a.data.map(function(e3, t2) {
      var r2 = n._def.items[t2] || n._def.rest;
      return r2 ? r2._parse({ data: e3, path: __spreadArray2(__spreadArray2([], __read2(a.path), false), [t2], false), parent: a }) : null;
    }).filter(function(e3) {
      return !!e3;
    });
    return a.async ? Promise.all(e2).then(function(e3) {
      return ParseStatus2.mergeArray(t, e3);
    }) : ParseStatus2.mergeArray(t, e2);
  }, Object.defineProperty(r.prototype, "items", { get: function() {
    return this._def.items;
  }, enumerable: false, configurable: true }), r.prototype.rest = function(e2) {
    return new r(__assign2(__assign2({}, this._def), { rest: e2 }));
  }, r.create = function(e2, t) {
    return new r(__assign2({ items: e2, typeName: ZodFirstPartyTypeKind2.ZodTuple, rest: null }, processCreateParams2(t)));
  }, r;
}(ZodType2);
var ZodRecord2 = function(e) {
  function n() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(n, e), Object.defineProperty(n.prototype, "keySchema", { get: function() {
    return this._def.keyType;
  }, enumerable: false, configurable: true }), Object.defineProperty(n.prototype, "valueSchema", { get: function() {
    return this._def.valueType;
  }, enumerable: false, configurable: true }), n.prototype._parse = function(e2) {
    var t = this._processInputParams(e2), e2 = t.status, r = t.ctx;
    if (r.parsedType !== ZodParsedType2.object)
      return addIssueToContext2(r, { code: ZodIssueCode2.invalid_type, expected: ZodParsedType2.object, received: r.parsedType }), INVALID2;
    var n2, a = [], o = this._def.keyType, s = this._def.valueType;
    for (n2 in r.data)
      a.push({ key: o._parse({ data: n2, path: __spreadArray2(__spreadArray2([], __read2(r.path), false), [n2], false), parent: r }), value: s._parse({ data: r.data[n2], path: __spreadArray2(__spreadArray2([], __read2(r.path), false), [n2], false), parent: r }) });
    return r.async ? ParseStatus2.mergeObjectAsync(e2, a) : ParseStatus2.mergeObjectSync(e2, a);
  }, Object.defineProperty(n.prototype, "element", { get: function() {
    return this._def.valueType;
  }, enumerable: false, configurable: true }), n.create = function(e2, t, r) {
    return new n(t instanceof ZodType2 ? __assign2({ keyType: e2, valueType: t, typeName: ZodFirstPartyTypeKind2.ZodRecord }, processCreateParams2(r)) : __assign2({ keyType: ZodString2.create(), valueType: e2, typeName: ZodFirstPartyTypeKind2.ZodRecord }, processCreateParams2(t)));
  }, n;
}(ZodType2);
var ZodMap2 = function(e) {
  function n() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(n, e), n.prototype._parse = function(e2) {
    var t, r, n2 = this, e2 = this._processInputParams(e2), u = e2.status, a = e2.ctx;
    if (a.parsedType !== ZodParsedType2.map)
      return addIssueToContext2(a, { code: ZodIssueCode2.invalid_type, expected: ZodParsedType2.map, received: a.parsedType }), INVALID2;
    var o = this._def.keyType, s = this._def.valueType, d = __spreadArray2([], __read2(a.data.entries()), false).map(function(e3, t2) {
      var r2 = __read2(e3, 2), e3 = r2[0], r2 = r2[1];
      return { key: o._parse({ data: e3, path: __spreadArray2(__spreadArray2([], __read2(a.path), false), [t2, "key"], false), parent: a }), value: s._parse({ data: r2, path: __spreadArray2(__spreadArray2([], __read2(a.path), false), [t2, "value"], false), parent: a }) };
    });
    if (a.async) {
      var p = /* @__PURE__ */ new Map();
      return Promise.resolve().then(function() {
        return __awaiter2(n2, void 0, void 0, function() {
          var t2, r2, n3, a2, o2, s2, i2;
          return __generator2(this, function(e3) {
            switch (e3.label) {
              case 0:
                e3.trys.push([0, 6, 7, 8]), t2 = __values2(d), r2 = t2.next(), e3.label = 1;
              case 1:
                return r2.done ? [3, 5] : [4, (n3 = r2.value).key];
              case 2:
                return a2 = e3.sent(), [4, n3.value];
              case 3:
                if (o2 = e3.sent(), a2.status === "aborted" || o2.status === "aborted")
                  return [2, INVALID2];
                a2.status !== "dirty" && o2.status !== "dirty" || u.dirty(), p.set(a2.value, o2.value), e3.label = 4;
              case 4:
                return r2 = t2.next(), [3, 1];
              case 5:
                return [3, 8];
              case 6:
                return s2 = e3.sent(), s2 = { error: s2 }, [3, 8];
              case 7:
                try {
                  r2 && !r2.done && (i2 = t2.return) && i2.call(t2);
                } finally {
                  if (s2)
                    throw s2.error;
                }
                return [7];
              case 8:
                return [2, { status: u.value, value: p }];
            }
          });
        });
      });
    }
    var i = /* @__PURE__ */ new Map();
    try {
      for (var c = __values2(d), l = c.next(); !l.done; l = c.next()) {
        var y = l.value, f = y.key, _ = y.value;
        if (f.status === "aborted" || _.status === "aborted")
          return INVALID2;
        f.status !== "dirty" && _.status !== "dirty" || u.dirty(), i.set(f.value, _.value);
      }
    } catch (e3) {
      t = { error: e3 };
    } finally {
      try {
        l && !l.done && (r = c.return) && r.call(c);
      } finally {
        if (t)
          throw t.error;
      }
    }
    return { status: u.value, value: i };
  }, n.create = function(e2, t, r) {
    return new n(__assign2({ valueType: t, keyType: e2, typeName: ZodFirstPartyTypeKind2.ZodMap }, processCreateParams2(r)));
  }, n;
}(ZodType2);
var ZodSet2 = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(r, e), r.prototype._parse = function(e2) {
    var e2 = this._processInputParams(e2), i = e2.status, r2 = e2.ctx;
    if (r2.parsedType !== ZodParsedType2.set)
      return addIssueToContext2(r2, { code: ZodIssueCode2.invalid_type, expected: ZodParsedType2.set, received: r2.parsedType }), INVALID2;
    var n = this._def.valueType;
    function t(e3) {
      var t2, r3, n2 = /* @__PURE__ */ new Set();
      try {
        for (var a = __values2(e3), o = a.next(); !o.done; o = a.next()) {
          var s = o.value;
          if (s.status === "aborted")
            return INVALID2;
          s.status === "dirty" && i.dirty(), n2.add(s.value);
        }
      } catch (e4) {
        t2 = { error: e4 };
      } finally {
        try {
          o && !o.done && (r3 = a.return) && r3.call(a);
        } finally {
          if (t2)
            throw t2.error;
        }
      }
      return { status: i.value, value: n2 };
    }
    e2 = __spreadArray2([], __read2(r2.data.values()), false).map(function(e3, t2) {
      return n._parse({ data: e3, path: __spreadArray2(__spreadArray2([], __read2(r2.path), false), [t2], false), parent: r2 });
    });
    return r2.async ? Promise.all(e2).then(t) : t(e2);
  }, r.create = function(e2, t) {
    return new r(__assign2({ valueType: e2, typeName: ZodFirstPartyTypeKind2.ZodSet }, processCreateParams2(t)));
  }, r;
}(ZodType2);
var ZodFunction2 = function(t) {
  function n() {
    var e = t !== null && t.apply(this, arguments) || this;
    return e.validate = e.implement, e;
  }
  return __extends2(n, t), n.prototype._parse = function(e) {
    var o = this, r = this._processInputParams(e).ctx;
    if (r.parsedType !== ZodParsedType2.function)
      return addIssueToContext2(r, { code: ZodIssueCode2.invalid_type, expected: ZodParsedType2.function, received: r.parsedType }), INVALID2;
    function s(e2, t2) {
      return makeIssue2({ data: e2, path: r.path, errorMaps: [r.contextualErrorMap, r.schemaErrorMap, overrideErrorMap2, defaultErrorMap2].filter(function(e3) {
        return !!e3;
      }), issueData: { code: ZodIssueCode2.invalid_arguments, argumentsError: t2 } });
    }
    function i(e2, t2) {
      return makeIssue2({ data: e2, path: r.path, errorMaps: [r.contextualErrorMap, r.schemaErrorMap, overrideErrorMap2, defaultErrorMap2].filter(function(e3) {
        return !!e3;
      }), issueData: { code: ZodIssueCode2.invalid_return_type, returnTypeError: t2 } });
    }
    var u = { errorMap: r.contextualErrorMap }, d = r.data;
    return this._def.returns instanceof ZodPromise2 ? OK2(function() {
      for (var a = [], e2 = 0; e2 < arguments.length; e2++)
        a[e2] = arguments[e2];
      return __awaiter2(o, void 0, void 0, function() {
        var t2, r2, n2;
        return __generator2(this, function(e3) {
          switch (e3.label) {
            case 0:
              return t2 = new ZodError2([]), [4, this._def.args.parseAsync(a, u).catch(function(e4) {
                throw t2.addIssue(s(a, e4)), t2;
              })];
            case 1:
              return r2 = e3.sent(), [4, d.apply(void 0, __spreadArray2([], __read2(r2), false))];
            case 2:
              return n2 = e3.sent(), [4, this._def.returns._def.type.parseAsync(n2, u).catch(function(e4) {
                throw t2.addIssue(i(n2, e4)), t2;
              })];
            case 3:
              return [2, e3.sent()];
          }
        });
      });
    }) : OK2(function() {
      for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
        e2[t2] = arguments[t2];
      var r2 = o._def.args.safeParse(e2, u);
      if (!r2.success)
        throw new ZodError2([s(e2, r2.error)]);
      var n2 = d.apply(void 0, __spreadArray2([], __read2(r2.data), false)), r2 = o._def.returns.safeParse(n2, u);
      if (!r2.success)
        throw new ZodError2([i(n2, r2.error)]);
      return r2.data;
    });
  }, n.prototype.parameters = function() {
    return this._def.args;
  }, n.prototype.returnType = function() {
    return this._def.returns;
  }, n.prototype.args = function() {
    for (var e = [], t2 = 0; t2 < arguments.length; t2++)
      e[t2] = arguments[t2];
    return new n(__assign2(__assign2({}, this._def), { args: ZodTuple2.create(e).rest(ZodUnknown2.create()) }));
  }, n.prototype.returns = function(e) {
    return new n(__assign2(__assign2({}, this._def), { returns: e }));
  }, n.prototype.implement = function(e) {
    return this.parse(e);
  }, n.prototype.strictImplement = function(e) {
    return this.parse(e);
  }, n.create = function(e, t2, r) {
    return new n(__assign2({ args: (e || ZodTuple2.create([])).rest(ZodUnknown2.create()), returns: t2 || ZodUnknown2.create(), typeName: ZodFirstPartyTypeKind2.ZodFunction }, processCreateParams2(r)));
  }, n;
}(ZodType2);
var ZodLazy2 = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(r, e), Object.defineProperty(r.prototype, "schema", { get: function() {
    return this._def.getter();
  }, enumerable: false, configurable: true }), r.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return this._def.getter()._parse({ data: e2.data, path: e2.path, parent: e2 });
  }, r.create = function(e2, t) {
    return new r(__assign2({ getter: e2, typeName: ZodFirstPartyTypeKind2.ZodLazy }, processCreateParams2(t)));
  }, r;
}(ZodType2);
var ZodLiteral2 = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(r, e), r.prototype._parse = function(e2) {
    var t = this._processInputParams(e2), e2 = t.status, t = t.ctx;
    return t.data !== this._def.value ? (addIssueToContext2(t, { code: ZodIssueCode2.invalid_type, expected: this._def.value, received: t.data }), INVALID2) : { status: e2.value, value: t.data };
  }, Object.defineProperty(r.prototype, "value", { get: function() {
    return this._def.value;
  }, enumerable: false, configurable: true }), r.create = function(e2, t) {
    return new r(__assign2({ value: e2, typeName: ZodFirstPartyTypeKind2.ZodLiteral }, processCreateParams2(t)));
  }, r;
}(ZodType2);
function createZodEnum2(e) {
  return new ZodEnum2({ values: e, typeName: ZodFirstPartyTypeKind2.ZodEnum });
}
var ZodFirstPartyTypeKind2;
var ZodEnum2 = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(t, e), t.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return this._def.values.indexOf(e2.data) === -1 ? (addIssueToContext2(e2, { code: ZodIssueCode2.invalid_enum_value, options: this._def.values }), INVALID2) : OK2(e2.data);
  }, Object.defineProperty(t.prototype, "options", { get: function() {
    return this._def.values;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "enum", { get: function() {
    var t2, e2, r = {};
    try {
      for (var n = __values2(this._def.values), a = n.next(); !a.done; a = n.next()) {
        var o = a.value;
        r[o] = o;
      }
    } catch (e3) {
      t2 = { error: e3 };
    } finally {
      try {
        a && !a.done && (e2 = n.return) && e2.call(n);
      } finally {
        if (t2)
          throw t2.error;
      }
    }
    return r;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "Values", { get: function() {
    var t2, e2, r = {};
    try {
      for (var n = __values2(this._def.values), a = n.next(); !a.done; a = n.next()) {
        var o = a.value;
        r[o] = o;
      }
    } catch (e3) {
      t2 = { error: e3 };
    } finally {
      try {
        a && !a.done && (e2 = n.return) && e2.call(n);
      } finally {
        if (t2)
          throw t2.error;
      }
    }
    return r;
  }, enumerable: false, configurable: true }), Object.defineProperty(t.prototype, "Enum", { get: function() {
    var t2, e2, r = {};
    try {
      for (var n = __values2(this._def.values), a = n.next(); !a.done; a = n.next()) {
        var o = a.value;
        r[o] = o;
      }
    } catch (e3) {
      t2 = { error: e3 };
    } finally {
      try {
        a && !a.done && (e2 = n.return) && e2.call(n);
      } finally {
        if (t2)
          throw t2.error;
      }
    }
    return r;
  }, enumerable: false, configurable: true }), t.create = createZodEnum2, t;
}(ZodType2);
var ZodNativeEnum2 = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(r, e), r.prototype._parse = function(e2) {
    var t = this._processInputParams(e2).ctx, e2 = util2.getValidEnumValues(this._def.values);
    return e2.indexOf(t.data) === -1 ? (addIssueToContext2(t, { code: ZodIssueCode2.invalid_enum_value, options: util2.objectValues(e2) }), INVALID2) : OK2(t.data);
  }, r.create = function(e2, t) {
    return new r(__assign2({ values: e2, typeName: ZodFirstPartyTypeKind2.ZodNativeEnum }, processCreateParams2(t)));
  }, r;
}(ZodType2);
var ZodPromise2 = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(r, e), r.prototype._parse = function(e2) {
    var t = this, r2 = this._processInputParams(e2).ctx;
    if (r2.parsedType !== ZodParsedType2.promise && r2.async === false)
      return addIssueToContext2(r2, { code: ZodIssueCode2.invalid_type, expected: ZodParsedType2.promise, received: r2.parsedType }), INVALID2;
    e2 = r2.parsedType === ZodParsedType2.promise ? r2.data : Promise.resolve(r2.data);
    return OK2(e2.then(function(e3) {
      return t._def.type.parseAsync(e3, { path: r2.path, errorMap: r2.contextualErrorMap });
    }));
  }, r.create = function(e2, t) {
    return new r(__assign2({ type: e2, typeName: ZodFirstPartyTypeKind2.ZodPromise }, processCreateParams2(t)));
  }, r;
}(ZodType2);
var ZodEffects2 = function(e) {
  function n() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(n, e), n.prototype.innerType = function() {
    return this._def.schema;
  }, n.prototype._parse = function(e2) {
    var t = this, e2 = this._processInputParams(e2), r = e2.status, n2 = e2.ctx, a = this._def.effect || null;
    if (a.type === "preprocess") {
      e2 = a.transform(n2.data);
      return n2.async ? Promise.resolve(e2).then(function(e3) {
        return t._def.schema._parseAsync({ data: e3, path: n2.path, parent: n2 });
      }) : this._def.schema._parseSync({ data: e2, path: n2.path, parent: n2 });
    }
    if (a.type === "refinement") {
      let s = function(e3) {
        var t2 = a.refinement(e3, o);
        if (n2.async)
          return Promise.resolve(t2);
        if (t2 instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return e3;
      };
      var o = { addIssue: function(e3) {
        addIssueToContext2(n2, e3), e3.fatal ? r.abort() : r.dirty();
      }, get path() {
        return n2.path;
      } };
      o.addIssue = o.addIssue.bind(o);
      if (n2.async !== false)
        return this._def.schema._parseAsync({ data: n2.data, path: n2.path, parent: n2 }).then(function(e3) {
          return e3.status === "aborted" ? INVALID2 : (e3.status === "dirty" && r.dirty(), s(e3.value).then(function() {
            return { status: r.value, value: e3.value };
          }));
        });
      var i = this._def.schema._parseSync({ data: n2.data, path: n2.path, parent: n2 });
      return i.status === "aborted" ? INVALID2 : (i.status === "dirty" && r.dirty(), s(i.value), { status: r.value, value: i.value });
    }
    if (a.type === "transform") {
      if (n2.async !== false)
        return this._def.schema._parseAsync({ data: n2.data, path: n2.path, parent: n2 }).then(function(e3) {
          return isValid2(e3) ? Promise.resolve(a.transform(e3.value)).then(OK2) : e3;
        });
      i = this._def.schema._parseSync({ data: n2.data, path: n2.path, parent: n2 });
      if (!isValid2(i))
        return i;
      i = a.transform(i.value);
      if (i instanceof Promise)
        throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
      return OK2(i);
    }
    util2.assertNever(a);
  }, n.create = function(e2, t, r) {
    return new n(__assign2({ schema: e2, typeName: ZodFirstPartyTypeKind2.ZodEffects, effect: t }, processCreateParams2(r)));
  }, n.createWithPreprocess = function(e2, t, r) {
    return new n(__assign2({ schema: t, effect: { type: "preprocess", transform: e2 }, typeName: ZodFirstPartyTypeKind2.ZodEffects }, processCreateParams2(r)));
  }, n;
}(ZodType2);
var ZodOptional2 = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(r, e), r.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return e2.parsedType === ZodParsedType2.undefined ? OK2(void 0) : this._def.innerType._parse({ data: e2.data, path: e2.path, parent: e2 });
  }, r.prototype.unwrap = function() {
    return this._def.innerType;
  }, r.create = function(e2, t) {
    return new r(__assign2({ innerType: e2, typeName: ZodFirstPartyTypeKind2.ZodOptional }, processCreateParams2(t)));
  }, r;
}(ZodType2);
var ZodNullable2 = function(e) {
  function r() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(r, e), r.prototype._parse = function(e2) {
    e2 = this._processInputParams(e2).ctx;
    return e2.parsedType === ZodParsedType2.null ? OK2(null) : this._def.innerType._parse({ data: e2.data, path: e2.path, parent: e2 });
  }, r.prototype.unwrap = function() {
    return this._def.innerType;
  }, r.create = function(e2, t) {
    return new r(__assign2({ innerType: e2, typeName: ZodFirstPartyTypeKind2.ZodNullable }, processCreateParams2(t)));
  }, r;
}(ZodType2);
var ZodDefault2 = function(e) {
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return __extends2(t, e), t.prototype._parse = function(e2) {
    var t2 = this._processInputParams(e2).ctx, e2 = t2.data;
    return t2.parsedType === ZodParsedType2.undefined && (e2 = this._def.defaultValue()), this._def.innerType._parse({ data: e2, path: t2.path, parent: t2 });
  }, t.prototype.removeDefault = function() {
    return this._def.innerType;
  }, t.create = function(e2, t2) {
    return new ZodOptional2(__assign2({ innerType: e2, typeName: ZodFirstPartyTypeKind2.ZodOptional }, processCreateParams2(t2)));
  }, t;
}(ZodType2);
var custom2 = function(e, t) {
  return e ? ZodAny2.create().refine(e, t) : ZodAny2.create();
};
var late2 = { object: ZodObject2.lazycreate };
!function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodPromise = "ZodPromise";
}(ZodFirstPartyTypeKind2 = ZodFirstPartyTypeKind2 || {});
var instanceOfType2 = function(t, e) {
  return e === void 0 && (e = { message: "Input not instance of " + t.name }), custom2(function(e2) {
    return e2 instanceof t;
  }, e);
};
var stringType2 = ZodString2.create;
var numberType2 = ZodNumber2.create;
var bigIntType2 = ZodBigInt2.create;
var booleanType2 = ZodBoolean2.create;
var dateType2 = ZodDate2.create;
var undefinedType2 = ZodUndefined2.create;
var nullType2 = ZodNull2.create;
var anyType2 = ZodAny2.create;
var unknownType2 = ZodUnknown2.create;
var neverType2 = ZodNever2.create;
var voidType2 = ZodVoid2.create;
var arrayType2 = ZodArray2.create;
var objectType2 = ZodObject2.create;
var strictObjectType2 = ZodObject2.strictCreate;
var unionType2 = ZodUnion2.create;
var intersectionType2 = ZodIntersection2.create;
var tupleType2 = ZodTuple2.create;
var recordType2 = ZodRecord2.create;
var mapType2 = ZodMap2.create;
var setType2 = ZodSet2.create;
var functionType2 = ZodFunction2.create;
var lazyType2 = ZodLazy2.create;
var literalType2 = ZodLiteral2.create;
var enumType2 = ZodEnum2.create;
var nativeEnumType2 = ZodNativeEnum2.create;
var promiseType2 = ZodPromise2.create;
var effectsType2 = ZodEffects2.create;
var optionalType2 = ZodOptional2.create;
var nullableType2 = ZodNullable2.create;
var preprocessType2 = ZodEffects2.createWithPreprocess;
var ostring2 = function() {
  return stringType2().optional();
};
var onumber2 = function() {
  return numberType2().optional();
};
var oboolean2 = function() {
  return booleanType2().optional();
};
var external2 = Object.freeze({ __proto__: null, ZodParsedType: ZodParsedType2, getParsedType: getParsedType2, makeIssue: makeIssue2, EMPTY_PATH: EMPTY_PATH2, addIssueToContext: addIssueToContext2, ParseStatus: ParseStatus2, INVALID: INVALID2, DIRTY: DIRTY2, OK: OK2, isAborted: isAborted2, isDirty: isDirty2, isValid: isValid2, isAsync: isAsync2, ZodType: ZodType2, ZodString: ZodString2, ZodNumber: ZodNumber2, ZodBigInt: ZodBigInt2, ZodBoolean: ZodBoolean2, ZodDate: ZodDate2, ZodUndefined: ZodUndefined2, ZodNull: ZodNull2, ZodAny: ZodAny2, ZodUnknown: ZodUnknown2, ZodNever: ZodNever2, ZodVoid: ZodVoid2, ZodArray: ZodArray2, get objectUtil() {
  return objectUtil2;
}, ZodObject: ZodObject2, ZodUnion: ZodUnion2, ZodIntersection: ZodIntersection2, ZodTuple: ZodTuple2, ZodRecord: ZodRecord2, ZodMap: ZodMap2, ZodSet: ZodSet2, ZodFunction: ZodFunction2, ZodLazy: ZodLazy2, ZodLiteral: ZodLiteral2, ZodEnum: ZodEnum2, ZodNativeEnum: ZodNativeEnum2, ZodPromise: ZodPromise2, ZodEffects: ZodEffects2, ZodTransformer: ZodEffects2, ZodOptional: ZodOptional2, ZodNullable: ZodNullable2, ZodDefault: ZodDefault2, custom: custom2, Schema: ZodType2, ZodSchema: ZodType2, late: late2, get ZodFirstPartyTypeKind() {
  return ZodFirstPartyTypeKind2;
}, any: anyType2, array: arrayType2, bigint: bigIntType2, boolean: booleanType2, date: dateType2, effect: effectsType2, enum: enumType2, function: functionType2, instanceof: instanceOfType2, intersection: intersectionType2, lazy: lazyType2, literal: literalType2, map: mapType2, nativeEnum: nativeEnumType2, never: neverType2, null: nullType2, nullable: nullableType2, number: numberType2, object: objectType2, oboolean: oboolean2, onumber: onumber2, optional: optionalType2, ostring: ostring2, preprocess: preprocessType2, promise: promiseType2, record: recordType2, set: setType2, strictObject: strictObjectType2, string: stringType2, transformer: effectsType2, tuple: tupleType2, undefined: undefinedType2, union: unionType2, unknown: unknownType2, void: voidType2, ZodIssueCode: ZodIssueCode2, quotelessJson: quotelessJson2, ZodError: ZodError2, defaultErrorMap: defaultErrorMap2, get overrideErrorMap() {
  return overrideErrorMap2;
}, setErrorMap: setErrorMap2 });

// src/datamodel/proposal.ts
var proposalSchema = external2.object({
  type: external2.literal("proposal"),
  title: external2.string(),
  content: external2.string()
});
function putProposal(tx, { id, proposal }) {
  return tx.put(key(id), proposal);
}
function key(id) {
  return `${proposalPrefix}${id}`;
}
var proposalPrefix = "proposal-";

// src/datamodel/client-state.ts
var userInfoSchema = external2.object({
  avatar: external2.string(),
  name: external2.string(),
  color: external2.string()
});
var clientStateSchema = external2.object({
  cursor: external2.object({
    x: external2.number(),
    y: external2.number()
  }),
  overID: external2.string(),
  selectedID: external2.string(),
  userInfo: userInfoSchema
});
async function initClientState(tx, { id, defaultUserInfo }) {
  if (await tx.has(key2(id))) {
    return;
  }
  await putClientState(tx, {
    id,
    clientState: {
      cursor: {
        x: 0,
        y: 0
      },
      overID: "",
      selectedID: "",
      userInfo: defaultUserInfo
    }
  });
}
function putClientState(tx, { id, clientState }) {
  return tx.put(key2(id), clientState);
}
function key2(id) {
  return `${clientStatePrefix}${id}`;
}
var clientStatePrefix = `client-state-`;

// src/datamodel/mutators.ts
var mutators = {
  createProposal: putProposal,
  initClientState,
  nop: async (_) => {
  }
};

// worker/index.ts
var Server2 = class extends Server {
  constructor(state, env) {
    let logger = consoleLogger;
    if (env.DATADOG_LOG_LEVEL) {
      logger = new TeeLogger([
        logger,
        new DatadogLogger({
          apiKey: env.DATADOG_API_KEY,
          service: "replidraw"
        })
      ]);
    }
    super({
      mutators,
      state,
      logger
    });
  }
};
var worker_default = createWorker(async (auth, roomID) => {
  const authJson = JSON.parse(auth);
  if (!authJson) {
    throw Error("Empty auth");
  }
  if (authJson.roomID !== roomID) {
    throw new Error("incorrect roomID");
  }
  if (!authJson.userID || typeof authJson.userID !== "string") {
    throw new Error("Missing userID");
  }
  return {
    userID: authJson.userID
  };
});
export {
  Server2 as Server,
  worker_default as default
};
