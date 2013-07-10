// Generated by CoffeeScript 1.6.2
var height, main, makeColor, moveLetter, width, yo;

$(width = window.innerWidth, height = window.innerHeight, moveLetter = function($elt, i) {
  var $child;

  $elt.css({
    top: Math.random() * (height - 50) * (Math.max(24 - i, 0) + 1) / 24,
    left: Math.random() * (width - 125)
  });
  $child = $($elt.children()[0]);
  return $child.css({
    'font-size': Math.random() * 290 + 6
  });
}, makeColor = function() {
  var a, hex, i, nums, _i, _len;

  hex = '#';
  nums = (function() {
    var _i, _results;

    _results = [];
    for (i = _i = 0; _i <= 5; i = ++_i) {
      _results.push(Math.floor(Math.random() * 16).toString(16));
    }
    return _results;
  })();
  for (_i = 0, _len = nums.length; _i < _len; _i++) {
    a = nums[_i];
    hex += a;
  }
  return hex;
}, yo = function() {
  var $faa, colory, faa, _i, _len, _ref, _results;

  _ref = $('div');
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    faa = _ref[_i];
    colory = makeColor();
    console.log(colory);
    $faa = $(faa);
    $(faa).css('color', colory);
    $faa.css('top', $faa.css('top'));
    _results.push($faa.css('left', $faa.css('left')));
  }
  return _results;
}, main = function() {
  var elt, i, temp, _i, _len, _ref;

  _ref = $('div');
  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
    elt = _ref[i];
    moveLetter($(elt), i);
  }
  temp = Math.floor(Math.random() * 2).toString(16);
  return $('body').css('background', '#' + temp + temp + temp);
}, setTimeout(yo, 10), setInterval(main, 400));
