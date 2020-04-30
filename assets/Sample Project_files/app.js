/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var GameScene_1 = __webpack_require__(/*! ./scenes/GameScene */ "./src/scenes/GameScene.ts");
var gameConfig = {
    title: 'Sample',
    type: Phaser.AUTO,
    scale: {
        //width: window.innerWidth,
        //height: window.innerHeight,
        mode: Phaser.Scale.FIT
    },
    scene: [GameScene_1.GameScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    parent: 'game',
    backgroundColor: '#BADA55',
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ "./src/scenes/GameScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/GameScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Forklift_1 = __webpack_require__(/*! ../sprites/Forklift */ "./src/sprites/Forklift.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
var text;
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super.call(this, sceneConfig) || this;
    }
    GameScene.prototype.preload = function () {
        this.load.multiatlas('forklift', './assets/forklift.json', 'assets');
        this.load.multiatlas('foot-controls', './assets/foot-controls.json', 'assets');
        this.load.image("background", "./assets/background.jpg");
    };
    GameScene.prototype.create = function () {
        var _this = this;
        this.add.image(0, -150, "background").setOrigin(0, 0);
        this.forklift = new Forklift_1.Forklift(this, 0, 410); //.setOrigin(0, 0);
        this.forklift.body.useDamping = true;
        var drag = 0.94;
        this.forklift.body.setDrag(drag, drag);
        text = this.add.text(10, 10, '', { font: '16px Courier', fill: 'black' });
        var brake = this.add.image(100, 600, "foot-controls", "brake.png").setOrigin(0, 0).setInteractive();
        var accelerator = this.add.image(300, 600, "foot-controls", "accelerator.png").setOrigin(0, 0).setInteractive();
        brake.on('pointerdown', function () { _this.goingLeft = true; });
        brake.on('pointerup', function () { _this.goingLeft = false; });
        accelerator.on('pointerdown', function () { _this.goingRight = true; });
        accelerator.on('pointerup', function () { _this.goingRight = false; });
        this.keys = {
            tiltBack: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.OPEN_BRACKET),
            tiltForward: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CLOSED_BRACKET),
        };
        // this.forklift.mast.setInteractive();
        // this.input.setDraggable(this.forklift.mast);
        // this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        //   gameObject.x = dragX;
        //   gameObject.y = dragY;
        //   console.log(dragX, dragY);
        // });
    };
    GameScene.prototype.update = function () {
        var cursorKeys = this.input.keyboard.createCursorKeys();
        var speed = 100;
        this.input.mousePointer.x;
        this.input.mousePointer.y;
        if (cursorKeys.right.isDown || this.goingRight) {
            //this.physics.accelerateTo(this.forklift, window.innerWidth, 0, 200);
            //this.forklift.body.setVelocityX(200);
            this.forklift.body.acceleration.x = speed;
        }
        else if (cursorKeys.left.isDown || this.goingLeft) {
            //this.physics.accelerateTo(this.forklift, 0, 0, 200);
            //this.forklift.body.setVelocityX(-200);
            this.forklift.body.acceleration.x = -speed;
        }
        else {
            //this.forklift.body.setVelocityX(0);
            this.forklift.body.acceleration.x = 0;
        }
        // Tilt controls
        if (this.keys.tiltBack && this.keys.tiltBack.isDown) {
            this.forklift.tiltBack();
        }
        if (this.keys.tiltForward && this.keys.tiltForward.isDown) {
            this.forklift.tiltForward();
        }
        text.setText('x: ' + this.input.mousePointer.x + ', y: ' + this.input.mousePointer.y);
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;


/***/ }),

/***/ "./src/sprites/Forklift.ts":
/*!*********************************!*\
  !*** ./src/sprites/Forklift.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TEXTURE = "forklift";
var Forklift = /** @class */ (function (_super) {
    __extends(Forklift, _super);
    function Forklift(scene, x, y, children) {
        var _this = _super.call(this, scene, x, y, children) || this;
        _this.tiltSpeed = 0.03;
        _this.minTiltAngle = -5; // max angle tilting back
        _this.maxTitleAngle = 0; // max angle tilting forward
        _this.mast = new Phaser.GameObjects.Sprite(scene, 688, 446, TEXTURE, "mast.png").setOrigin(0.425, 0.772); //.setOrigin(-58, -456);
        _this.add(_this.mast);
        var hull = new Phaser.GameObjects.Sprite(scene, 0, 0, TEXTURE, "hull.png");
        hull.setOrigin(0, 0);
        _this.add(hull);
        _this.rearWheel = new Phaser.GameObjects.Sprite(scene, 140, 600, TEXTURE, "rear-wheel.png");
        _this.add(_this.rearWheel);
        _this.frontWheel = new Phaser.GameObjects.Sprite(scene, 660, 570, TEXTURE, "front-wheel.png");
        _this.add(_this.frontWheel);
        scene.physics.world.enable(_this);
        scene.add.existing(_this);
        _this.scene.events.on('update', function (time, delta) { _this.update(time, delta); });
        _this.scale = 0.5;
        return _this;
    }
    Forklift.prototype.update = function (time, delta) {
        this.rearWheel.angle = this.x;
        this.frontWheel.angle = this.x;
        //this.mast.angle ++;
    };
    Forklift.prototype.tiltBack = function () {
        this.mast.angle -= this.tiltSpeed;
        if (this.mast.angle < this.minTiltAngle) {
            this.mast.angle = this.minTiltAngle;
        }
    };
    Forklift.prototype.tiltForward = function () {
        this.mast.angle += this.tiltSpeed;
        if (this.mast.angle > this.maxTitleAngle) {
            this.mast.angle = this.maxTitleAngle;
        }
    };
    return Forklift;
}(Phaser.GameObjects.Container));
exports.Forklift = Forklift;


/***/ }),

/***/ 0:
/*!****************************************************************************!*\
  !*** multi (webpack)-dev-server/client?https://0.0.0.0:8080 ./src/main.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/wouter/SynologyDrive/hobby/forklift/repositories/forklift/node_modules/webpack-dev-server/client/index.js?https://0.0.0.0:8080 */"./node_modules/webpack-dev-server/client/index.js?https://0.0.0.0:8080");
module.exports = __webpack_require__(/*! ./src/main.ts */"./src/main.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9HYW1lU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvRm9ya2xpZnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNy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QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELDhCQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2xDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLENBdEQ2QixNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FzRHpEO0FBdERZLDRCQUFRIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2xvZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdCBzeW5jIF5cXFxcLlxcXFwvbG9nJFwiOyIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9zY2VuZXMvR2FtZVNjZW5lJztcblxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcbiAgdGl0bGU6ICdTYW1wbGUnLFxuICBcbiAgdHlwZTogUGhhc2VyLkFVVE8sXG4gIFxuICBzY2FsZToge1xuICAgIC8vd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIC8vaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgbW9kZTogUGhhc2VyLlNjYWxlLkZJVFxuICB9LFxuICBzY2VuZTogW0dhbWVTY2VuZV0sXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiAnYXJjYWRlJyxcbiAgICBhcmNhZGU6IHtcbiAgICAgIGRlYnVnOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIFxuICBwYXJlbnQ6ICdnYW1lJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI0JBREE1NScsXG59O1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTsiLCJpbXBvcnQgeyBGb3JrbGlmdCB9IGZyb20gXCIuLi9zcHJpdGVzL0ZvcmtsaWZ0XCI7XG5pbXBvcnQgeyBJbWFnZU1hbmlmZXN0IH0gZnJvbSBcIi4uL21hbmlmZXN0cy9JbWFnZU1hbmlmZXN0XCI7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiAnR2FtZScsXG59O1xuXG5sZXQgdGV4dDtcblxuaW50ZXJmYWNlIEtleXMge1xuICBsZWZ0PzogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcbiAgcmlnaHQ/OiBQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5O1xuICB0aWx0QmFjaz86IFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXk7XG4gIHRpbHRGb3J3YXJkPzogUGhhc2VyLklucHV0LktleWJvYXJkLktleTtcbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIHByaXZhdGUgc3F1YXJlOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlICYgeyBib2R5OiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSB9O1xuICBwcml2YXRlIGZvcmtsaWZ0OiBGb3JrbGlmdDsgLy9QaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2UgJiB7IGJvZHk6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5IH07XG5cbiAgcHJpdmF0ZSBnb2luZ1JpZ2h0OiBCb29sZWFuO1xuICBwcml2YXRlIGdvaW5nTGVmdDogQm9vbGVhbjtcblxuICBwcml2YXRlIGtleXM6IEtleXM7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgdGhpcy5sb2FkLm11bHRpYXRsYXMoJ2ZvcmtsaWZ0JywgJy4vYXNzZXRzL2ZvcmtsaWZ0Lmpzb24nLCAnYXNzZXRzJyk7XG4gICAgdGhpcy5sb2FkLm11bHRpYXRsYXMoJ2Zvb3QtY29udHJvbHMnLCAnLi9hc3NldHMvZm9vdC1jb250cm9scy5qc29uJywgJ2Fzc2V0cycpO1xuICAgIFxuICAgIHRoaXMubG9hZC5pbWFnZShcImJhY2tncm91bmRcIiwgXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgdGhpcy5hZGQuaW1hZ2UoMCwgLTE1MCwgXCJiYWNrZ3JvdW5kXCIpLnNldE9yaWdpbigwLCAwKTtcblxuICAgIHRoaXMuZm9ya2xpZnQgPSBuZXcgRm9ya2xpZnQodGhpcywgMCwgNDEwKTsvLy5zZXRPcmlnaW4oMCwgMCk7XG4gICAgdGhpcy5mb3JrbGlmdC5ib2R5LnVzZURhbXBpbmcgPSB0cnVlO1xuICAgIGNvbnN0IGRyYWcgPSAwLjk0O1xuICAgIHRoaXMuZm9ya2xpZnQuYm9keS5zZXREcmFnKGRyYWcsIGRyYWcpO1xuXG4gICAgdGV4dCA9IHRoaXMuYWRkLnRleHQoMTAsIDEwLCAnJywgeyBmb250OiAnMTZweCBDb3VyaWVyJywgZmlsbDogJ2JsYWNrJyB9KTtcblxuICAgIGNvbnN0IGJyYWtlID0gdGhpcy5hZGQuaW1hZ2UoMTAwLCA2MDAsIFwiZm9vdC1jb250cm9sc1wiLCBcImJyYWtlLnBuZ1wiKS5zZXRPcmlnaW4oMCwgMCkuc2V0SW50ZXJhY3RpdmUoKTtcbiAgICBjb25zdCBhY2NlbGVyYXRvciA9IHRoaXMuYWRkLmltYWdlKDMwMCwgNjAwLCBcImZvb3QtY29udHJvbHNcIiwgXCJhY2NlbGVyYXRvci5wbmdcIikuc2V0T3JpZ2luKDAsIDApLnNldEludGVyYWN0aXZlKCk7XG4gICAgYnJha2Uub24oJ3BvaW50ZXJkb3duJywgKCkgPT4geyB0aGlzLmdvaW5nTGVmdCA9IHRydWUgfSApO1xuICAgIGJyYWtlLm9uKCdwb2ludGVydXAnLCAoKSA9PiB7IHRoaXMuZ29pbmdMZWZ0ID0gZmFsc2UgfSApO1xuICAgIGFjY2VsZXJhdG9yLm9uKCdwb2ludGVyZG93bicsICgpID0+IHsgdGhpcy5nb2luZ1JpZ2h0ID0gdHJ1ZSB9ICk7XG4gICAgYWNjZWxlcmF0b3Iub24oJ3BvaW50ZXJ1cCcsICgpID0+IHsgdGhpcy5nb2luZ1JpZ2h0ID0gZmFsc2UgfSApO1xuXG4gICAgdGhpcy5rZXlzID0ge1xuICAgICAgdGlsdEJhY2s6IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5PUEVOX0JSQUNLRVQpLFxuICAgICAgdGlsdEZvcndhcmQ6IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5DTE9TRURfQlJBQ0tFVCksXG5cbiAgICB9IFxuXG4gICAgLy8gdGhpcy5mb3JrbGlmdC5tYXN0LnNldEludGVyYWN0aXZlKCk7XG4gICAgLy8gdGhpcy5pbnB1dC5zZXREcmFnZ2FibGUodGhpcy5mb3JrbGlmdC5tYXN0KTtcbiAgICAvLyB0aGlzLmlucHV0Lm9uKCdkcmFnJywgZnVuY3Rpb24gKHBvaW50ZXIsIGdhbWVPYmplY3QsIGRyYWdYLCBkcmFnWSkge1xuICAgIC8vICAgZ2FtZU9iamVjdC54ID0gZHJhZ1g7XG4gICAgLy8gICBnYW1lT2JqZWN0LnkgPSBkcmFnWTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGRyYWdYLCBkcmFnWSk7XG4gICAgLy8gfSk7XG4gIH1cbiAgXG4gIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgY29uc3QgY3Vyc29yS2V5cyA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xuICAgIGNvbnN0IHNwZWVkID0gMTAwO1xuICAgIFxuICAgIHRoaXMuaW5wdXQubW91c2VQb2ludGVyLng7XG4gICAgdGhpcy5pbnB1dC5tb3VzZVBvaW50ZXIueTtcblxuICAgIGlmIChjdXJzb3JLZXlzLnJpZ2h0LmlzRG93biB8fCB0aGlzLmdvaW5nUmlnaHQpIHtcbiAgICAgIC8vdGhpcy5waHlzaWNzLmFjY2VsZXJhdGVUbyh0aGlzLmZvcmtsaWZ0LCB3aW5kb3cuaW5uZXJXaWR0aCwgMCwgMjAwKTtcbiAgICAgIC8vdGhpcy5mb3JrbGlmdC5ib2R5LnNldFZlbG9jaXR5WCgyMDApO1xuICAgICAgdGhpcy5mb3JrbGlmdC5ib2R5LmFjY2VsZXJhdGlvbi54ID0gc3BlZWQ7XG4gICAgfSBlbHNlIGlmIChjdXJzb3JLZXlzLmxlZnQuaXNEb3duIHx8IHRoaXMuZ29pbmdMZWZ0KSB7XG4gICAgICAvL3RoaXMucGh5c2ljcy5hY2NlbGVyYXRlVG8odGhpcy5mb3JrbGlmdCwgMCwgMCwgMjAwKTtcbiAgICAgIC8vdGhpcy5mb3JrbGlmdC5ib2R5LnNldFZlbG9jaXR5WCgtMjAwKTtcbiAgICAgIHRoaXMuZm9ya2xpZnQuYm9keS5hY2NlbGVyYXRpb24ueCA9IC1zcGVlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy90aGlzLmZvcmtsaWZ0LmJvZHkuc2V0VmVsb2NpdHlYKDApO1xuICAgICAgdGhpcy5mb3JrbGlmdC5ib2R5LmFjY2VsZXJhdGlvbi54ID0gMDtcbiAgICB9XG5cbiAgICAvLyBUaWx0IGNvbnRyb2xzXG4gICAgaWYgKHRoaXMua2V5cy50aWx0QmFjayAmJiB0aGlzLmtleXMudGlsdEJhY2suaXNEb3duKSB7XG4gICAgICB0aGlzLmZvcmtsaWZ0LnRpbHRCYWNrKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmtleXMudGlsdEZvcndhcmQgJiYgdGhpcy5rZXlzLnRpbHRGb3J3YXJkLmlzRG93bikge1xuICAgICAgdGhpcy5mb3JrbGlmdC50aWx0Rm9yd2FyZCgpO1xuICAgIH1cblxuICAgIHRleHQuc2V0VGV4dCgneDogJyArIHRoaXMuaW5wdXQubW91c2VQb2ludGVyLnggKyAnLCB5OiAnICsgdGhpcy5pbnB1dC5tb3VzZVBvaW50ZXIueSk7XG4gIH1cbn0iLCJjb25zdCBURVhUVVJFID0gXCJmb3JrbGlmdFwiO1xuXG5cbmV4cG9ydCBjbGFzcyBGb3JrbGlmdCBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xuLy9leHBvcnQgY2xhc3MgRm9ya2xpZnQgZXh0ZW5kcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuU3ByaXRlIHtcbiAgYm9keTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkJvZHk7XG4gIHJlYXJXaGVlbDogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcbiAgZnJvbnRXaGVlbDogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcbiAgbWFzdDogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcbiAgXG4gIHByaXZhdGUgdGlsdFNwZWVkID0gMC4wMzsgIFxuICBwcml2YXRlIG1pblRpbHRBbmdsZSA9IC01OyAvLyBtYXggYW5nbGUgdGlsdGluZyBiYWNrXG4gIHByaXZhdGUgbWF4VGl0bGVBbmdsZSA9IDA7IC8vIG1heCBhbmdsZSB0aWx0aW5nIGZvcndhcmRcblxuICBjb25zdHJ1Y3RvcihzY2VuZSwgeCwgeSwgY2hpbGRyZW4/KSB7XG4gICAgc3VwZXIoc2NlbmUsIHgsIHksIGNoaWxkcmVuKTtcbiAgICBcbiAgICB0aGlzLm1hc3QgPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZShzY2VuZSwgNjg4LCA0NDYsIFRFWFRVUkUsIFwibWFzdC5wbmdcIikuc2V0T3JpZ2luKDAuNDI1LCAwLjc3Mik7Ly8uc2V0T3JpZ2luKC01OCwgLTQ1Nik7XG4gICAgdGhpcy5hZGQodGhpcy5tYXN0KTtcblxuICAgIHZhciBodWxsID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUoc2NlbmUsIDAsIDAsIFRFWFRVUkUsIFwiaHVsbC5wbmdcIik7XG4gICAgaHVsbC5zZXRPcmlnaW4oMCwgMCk7XG4gICAgdGhpcy5hZGQoaHVsbCk7XG4gICAgXG4gICAgdGhpcy5yZWFyV2hlZWwgPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZShzY2VuZSwgMTQwLCA2MDAsIFRFWFRVUkUsIFwicmVhci13aGVlbC5wbmdcIik7XG4gICAgdGhpcy5hZGQodGhpcy5yZWFyV2hlZWwpO1xuICAgIFxuICAgIHRoaXMuZnJvbnRXaGVlbCA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKHNjZW5lLCA2NjAsIDU3MCwgVEVYVFVSRSwgXCJmcm9udC13aGVlbC5wbmdcIik7XG4gICAgdGhpcy5hZGQodGhpcy5mcm9udFdoZWVsKTtcblxuICAgIHNjZW5lLnBoeXNpY3Mud29ybGQuZW5hYmxlKHRoaXMpO1xuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcblxuICAgIHRoaXMuc2NlbmUuZXZlbnRzLm9uKCd1cGRhdGUnLCAodGltZSwgZGVsdGEpID0+IHsgdGhpcy51cGRhdGUodGltZSwgZGVsdGEpfSApO1xuICAgIHRoaXMuc2NhbGUgPSAwLjU7XG4gIH1cblxuICB1cGRhdGUgKHRpbWUsIGRlbHRhKSB7XG4gICAgdGhpcy5yZWFyV2hlZWwuYW5nbGUgPSB0aGlzLng7XG4gICAgdGhpcy5mcm9udFdoZWVsLmFuZ2xlID0gdGhpcy54O1xuXG4gICAgLy90aGlzLm1hc3QuYW5nbGUgKys7XG4gIH1cblxuICB0aWx0QmFjayAoKSB7XG4gICAgdGhpcy5tYXN0LmFuZ2xlIC09IHRoaXMudGlsdFNwZWVkO1xuICAgIGlmICh0aGlzLm1hc3QuYW5nbGUgPCB0aGlzLm1pblRpbHRBbmdsZSkge1xuICAgICAgdGhpcy5tYXN0LmFuZ2xlID0gdGhpcy5taW5UaWx0QW5nbGU7XG4gICAgfVxuICB9XG5cbiAgdGlsdEZvcndhcmQgKCkge1xuICAgIHRoaXMubWFzdC5hbmdsZSArPSB0aGlzLnRpbHRTcGVlZDtcbiAgICBpZiAodGhpcy5tYXN0LmFuZ2xlID4gdGhpcy5tYXhUaXRsZUFuZ2xlKSB7XG4gICAgICB0aGlzLm1hc3QuYW5nbGUgPSB0aGlzLm1heFRpdGxlQW5nbGU7XG4gICAgfVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==