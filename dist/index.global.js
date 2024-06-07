"use strict";
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
(function() {
    var applyMixins = // src/utils.ts
    function applyMixins(derivedCtor, baseCtors) {
        baseCtors.forEach(function(baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function(name) {
                Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
            });
        });
    };
    // src/types.ts
    var Events = /* @__PURE__ */ function(Events2) {
        Events2["LoginModalOpen"] = "LoginModalOpen";
        Events2["LoginSuccess"] = "LoginSuccess";
        Events2["RecargaModalOpen"] = "RecargaModalOpen";
        Events2["IframeWrapperConfig"] = "IframeWrapperConfig";
        return Events2;
    }(Events || {});
    // src/index.ts
    var AtsdkBase = /*#__PURE__*/ function() {
        function AtsdkBase() {
            var _this = this;
            _class_call_check(this, AtsdkBase);
            var eventListener = "message";
            window.addEventListener(eventListener, function(message) {
                return _this.receiveMessage(message);
            });
        }
        _create_class(AtsdkBase, [
            {
                key: "setIframe",
                value: function setIframe(iframe) {
                    this.iframe = iframe;
                }
            },
            {
                key: "setNotificationCallback",
                value: function setNotificationCallback(notification) {
                    this.notificationCallback = notification;
                }
            },
            {
                key: "sendMessageToIframe",
                value: function sendMessageToIframe(message) {
                    if (this.iframe && this.iframe.contentWindow) {
                        this.iframe.contentWindow.postMessage(message, "*");
                    }
                }
            },
            {
                key: "sendMessageToTopAncestor",
                value: function sendMessageToTopAncestor(message) {
                    if (window.top) {
                        window.top.postMessage(message, "*");
                    }
                }
            },
            {
                key: "sendMessageToParent",
                value: function sendMessageToParent(message) {
                    window.parent.postMessage(message, "*");
                }
            },
            {
                key: "receiveMessage",
                value: function receiveMessage(message) {
                    if (Events[message.data.event] && this.notificationCallback) {
                        this.notificationCallback(message.data);
                    }
                }
            },
            {
                key: "getEvents",
                value: function getEvents() {
                    return Events;
                }
            }
        ]);
        return AtsdkBase;
    }();
    var Atsdk = /*#__PURE__*/ function(AtsdkBase) {
        _inherits(Atsdk, AtsdkBase);
        var _super = _create_super(Atsdk);
        function Atsdk() {
            _class_call_check(this, Atsdk);
            return _super.apply(this, arguments);
        }
        return Atsdk;
    }(AtsdkBase);
    applyMixins(Atsdk, []);
    (function(w) {
        if (w) {
            w.Atsdk = new Atsdk();
        }
    })(window);
})();
