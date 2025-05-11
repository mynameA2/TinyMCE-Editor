/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/custom-dropdown.js":
/*!********************************!*\
  !*** ./src/custom-dropdown.js ***!
  \********************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Компонент custom-dropdown реализует выпадающий список, связанный с глобальными шаблонами.
// При изменении глобального списка вызывается setTemplates для обновления всех экземпляров.
var CustomDropdown = /*#__PURE__*/function (_HTMLElement) {
  function CustomDropdown() {
    var _this;
    _classCallCheck(this, CustomDropdown);
    _this = _callSuper(this, CustomDropdown);
    _this.selected = -1;
    _this.isOpen = false;
    return _this;
  }
  _inherits(CustomDropdown, _HTMLElement);
  return _createClass(CustomDropdown, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;
      // Читаем data-init при вставке, чтобы выставить selected из HTML
      var attr = this.getAttribute('data-init');
      if (attr !== null) {
        this.selected = parseInt(attr);
      }
      // Вызывается при подключении элемента к DOM. Инициализирует рендеринг и добавляет обработчик изменения.
      setTimeout(function () {
        _this2.render();
        var select = _this2.querySelector('select');
        if (select) {
          select.addEventListener('change', function (e) {
            _this2.selected = parseInt(e.currentTarget.value);
            _this2.render();
          });
          // Обработка события mousedown
          // select.addEventListener('mousedown', (e) => {
          //     // Программно устанавливаем фокус на выбранный элемент
          //     const selectedOption = select.querySelector(`option[value="${this.selected}"]`);
          //     if (selectedOption) {
          //         selectedOption.focus();  // Устанавливаем фокус на выбранный элемент
          //     }
          // });
        }
      });
      this.addEventListener('mousedown', function (e) {
        e.stopPropagation();
      });
      this.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    }
  }, {
    key: "setTemplates",
    value: function setTemplates(newTemplates) {
      // Обновляет глобальный список шаблонов и повторно рендерит компонент.
      CustomDropdown.templates = newTemplates;
      if (this.selected === -1 && newTemplates.length > 0) {
        this.selected = 0;
      }
      if (this.selected >= newTemplates.length) {
        this.selected = -1;
      }
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      // Рендерит компонент в зависимости от доступных шаблонов. Показывает <select> или <span>ERROR.
      var templates = CustomDropdown.templates;
      var hasValid = this.selected >= 0 && this.selected < templates.length;
      this.innerHTML = "\n            <style>\n                select {\n                    font-size: 14px;\n                    padding: 2px;\n                    }\n            </style>\n            ".concat(hasValid ? "<select>\n                ".concat(templates.map(function (t, i) {
        return "<option value=\"".concat(i, "\" ").concat(i === _this3.selected ? 'selected' : '', ">").concat(t, "</option>");
      }).join(''), "\n                </select>") : '<span style="color:red">ERROR</span>', ";\n            ");
    }
  }]);
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
_defineProperty(CustomDropdown, "templates", []);
customElements.define('custom-dropdown', CustomDropdown);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_dropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-dropdown.js */ "./src/custom-dropdown.js");
/* harmony import */ var _custom_dropdown_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom_dropdown_js__WEBPACK_IMPORTED_MODULE_0__);

var templates = ['template 1', 'template 2', 'template 3'];
function saveTemplatesToLocalStorage() {
  localStorage.setItem('templates', JSON.stringify(templates));
}
function loadTemplatesFromLocalStorage() {
  var saved = localStorage.getItem('templates');
  if (saved) {
    templates = JSON.parse(saved);
  }
}
loadTemplatesFromLocalStorage();
var selectedIndex = null;
var templateListEl = document.getElementById('templates-list');
var templateEditEl = document.getElementById('template-edit');
var insertButtonEl = document.getElementById('insert-button');

// функция для отображения списка шаблонов
function renderTemplateList() {
  console.log(templates);
  templateListEl.innerHTML = '';
  templates.forEach(function (tp1, index) {
    var div = document.createElement('div');
    div.className = 'template-item' + (selectedIndex === index ? ' selected' : '');
    div.textContent = tp1;
    div.onclick = function () {
      selectedIndex = index;
      templateEditEl.value = tp1;
      renderTemplateList();
    };
    templateListEl.appendChild(div);
  });
}

// функция для обновления компонентов в редакторе
function updateAllDropdowns() {
  document.querySelectorAll('custom-dropdown').forEach(function (dropdown) {
    dropdown.setTemplates(templates);
  });
}

// обработчик изменения текста в шаблоне
templateEditEl.addEventListener('input', function (e) {
  if (selectedIndex !== null) {
    templates[selectedIndex] = e.target.value;
    updateAllDropdowns();
    renderTemplateList();
    saveTemplatesToLocalStorage();
  }
});

// слушатель для изменения состояния фокуса
templateEditEl.addEventListener('blur', function () {
  renderTemplateList();
});

// добавление шаблона
document.getElementById('add-template').onclick = function () {
  templates.push('template');
  selectedIndex = templates.length - 1;
  renderTemplateList();
  updateAllDropdowns();
  saveTemplatesToLocalStorage();
};

// удаление шаблона
document.getElementById('remove-template').onclick = function () {
  if (selectedIndex !== null) {
    templates.splice(selectedIndex, 1);
    selectedIndex = null;
    templateEditEl.value = '';
    updateAllDropdowns();
    renderTemplateList();
    saveTemplatesToLocalStorage();
  }
};

// вставка custom-dropdown компонент в редактор
insertButtonEl.onclick = function () {
  if (templates.length > 0) {
    var dropdown = document.createElement('custom-dropdown');
    dropdown.setAttribute('data-init', '0');
    dropdown.setAttribute('contenteditable', 'false');
    dropdown.setTemplates(templates);
    var wrapper = document.createElement('div');
    wrapper.appendChild(dropdown);
    tinymce.activeEditor.insertContent('<custom-dropdown contenteditable="false" data-init="0"></custom-dropdown>');
  } else {
    tinymce.activeEditor.insertContent('<custom-dropdown contenteditable="false"></custom-dropdown>');
  }
};

//инициализация tinymce в inline режиме
// позволяет инициализировать редактор в див
// поддерживает добавление и редактирование кастомных элементов
tinymce.init({
  selector: '#editor',
  inline: true,
  menubar: false,
  toolbar: 'undo redo | bold italic underline | removeformat',
  extended_valid_elements: 'custom-dropdown[*]',
  content_style: 'custom-dropdown { display: inline-block; padding: 2px 4px;}',
  setup: function setup(editor) {
    editor.on('init', function () {
      updateAllDropdowns();
    });
  }
});

// начальный рендер шаблонов
renderTemplateList();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map