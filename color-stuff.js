var iout = 0;
var ifoc;

YUI().use('dial', 'slider', 'event-valuechange', 'color', function (Y) {
  Y.one('.picker').addClass('yui3-skin-sam');

  var hue = new Y.Dial({
      min: 0,
      max: 360,
      stepsPerRevolution: 360,
      continuous: true,
      centerButtonDiameter: 0.4,
      render: '#hue-dial',
      strings: {
        label: 'Hue:',
        resetStr: 'Reset',
        tooltipHandle: 'Drag to set',
      },
    }),
    sat = new Y.Slider({
      min: 0,
      max: 100,
      value: 100,
      render: '#sat-slider',
    }),
    lum = new Y.Slider({
      min: 0,
      max: 100,
      value: 50,
      render: '#lum-slider',
    }),
    satValue = Y.one('#sat-slider span'),
    lumValue = Y.one('#lum-slider span'),
    color = Y.one('.color');

  hue.after('valueChange', function (e) {
    updatePickerUI();
  });

  sat.after('thumbMove', function (e) {
    updatePickerUI();
  });

  lum.after('thumbMove', function (e) {
    lumValue.set('text', lum.get('value') + '%');
    updatePickerUI();
  });

  function setPickerUI(hsl) {
    if (typeof hsl.h !== 'undefined') {
      hue.set('value', +hsl.h);
    }

    if (typeof hsl.s !== 'undefined') {
      sat.set('value', +hsl.s);
    }

    if (typeof hsl.l !== 'undefined') {
      lum.set('value', +hsl.l);
    }
  }

  function updatePickerUI() {
    var h = hue.get('value'),
      s = sat.get('value'),
      l = lum.get('value'),
      hslString = Y.Color.fromArray([h, s, l], Y.Color.TYPES.HSL);

    satValue.set('text', s + '%');
    lumValue.set('text', l + '%');

    color.setStyle('backgroundColor', hslString);

    updateOutput(hslString);
  }

  var hexOutput = Y.one('#hex-output'),
    rgbOutput = Y.one('#rgb-output'),
    hslOutput = Y.one('#hsl-output'),
    focused = null,
    complementary = Y.one('#h-complementary'),
    split = Y.one('#h-split-complementary'),
    analogous = Y.one('#h-analogous'),
    triad = Y.one('#h-triad'),
    square = Y.one('#h-square'),
    tetrad = Y.one('#h-tetrad'),
    mono = Y.one('#h-monochromatic'),
    similar = Y.one('#h-similar'),
    swatchTip = Y.Node.create('<div class="tooltip"></div>');

  hexOutput.on('focus', setFocused);
  hexOutput.on('blur', unsetFocused);
  hexOutput.on('valueChange', updatePickerFromValue);

  rgbOutput.on('focus', setFocused);
  rgbOutput.on('blur', unsetFocused);
  rgbOutput.on('valueChange', updatePickerFromValue);

  hslOutput.on('focus', setFocused);
  hslOutput.on('blur', unsetFocused);
  hslOutput.on('valueChange', updatePickerFromValue);

  function updateOutput(hslString) {
    if (hexOutput !== focused) {
      hexOutput.set('value', Y.Color.toHex(hslString).toUpperCase());
    }
    if (rgbOutput !== focused) {
      rgbOutput.set('value', Y.Color.toRGB(hslString));
    }
    if (hslOutput !== focused) {
      hslOutput.set('value', hslString);
    }

    swatchTip.remove();
    clearColorSwatches();
    makeColorSwatches(hslString);
  }

  function updatePickerFromValue(e) {
    var val = e.newVal,
      hsl = [];

    if (Y.Color.toArray(val)) {
      hsl = Y.Color.toArray(Y.Color.toHSL(val));
      setPickerUI({
        h: hsl[0],
        s: hsl[1],
        l: hsl[2],
      });
    }
  }

  function setFocused(e) {
    focused = e.currentTarget;
  }

  function unsetFocused(e) {
    if (focused === e.currentTarget) {
      focused = null;
    }
  }

  function clearColorSwatches() {
    complementary.empty();
    split.empty();
    analogous.empty();
    triad.empty();
    square.empty();
    tetrad.empty();
    mono.empty();
    similar.empty();
  }

  function makeColorSwatches(hslString) {
    // complementary swatches
    Y.Array.each(Y.Color.getComplementary(hslString), function (color) {
      complementary.append(getColorSwatch(color));
    });

    // split complementary swatches
    Y.Array.each(Y.Color.getSplit(hslString), function (color) {
      split.append(getColorSwatch(color));
    });

    // analogous swatches
    Y.Array.each(Y.Color.getAnalogous(hslString), function (color) {
      analogous.append(getColorSwatch(color));
    });

    // triad swatches
    Y.Array.each(Y.Color.getTriad(hslString), function (color) {
      triad.append(getColorSwatch(color));
    });

    // square swatches
    Y.Array.each(Y.Color.getSquare(hslString), function (color) {
      square.append(getColorSwatch(color));
    });

    // tetrad swatches
    Y.Array.each(Y.Color.getTetrad(hslString), function (color) {
      tetrad.append(getColorSwatch(color));
    });

    // monochrome swatches
    Y.Array.each(Y.Color.getMonochrome(hslString), function (color) {
      mono.append(getColorSwatch(color));
    });

    // similar swatches
    Y.Array.each(Y.Color.getSimilar(hslString), function (color) {
      similar.append(getColorSwatch(color));
    });
  }

  function getColorSwatch(color) {
    return (
      '<span class="color swatch" style="background-color:' +
      color +
      '" title="' +
      color +
      '"></span>'
    );
  }

  Y.one('.picker-output2').delegate(
    'click',
    function (e) {
      swatchTip.empty();
      var str = '<ul>',
        swatch = e.currentTarget,
        color = swatch.get('title');

      if (swatch.contains(swatchTip)) {
        swatchTip.remove();
      } else {
        str +=
          '<li><strong>Hex: </strong> ' +
          Y.Color.toHex(color).toUpperCase() +
          '</li>';
        str += '<li><strong>RGB: </strong> ' + Y.Color.toRGB(color) + '</li>';
        str += '<li><strong>HSL: </strong> ' + Y.Color.toHSL(color) + '</li>';

        str += '</ul>';

        swatch.append(swatchTip);
        swatchTip.setHTML(str);
      }
    },
    '.swatch'
  );

  updatePickerUI();
});

function OnAddColor() {
  var color = document.getElementById('hex-output').value;
  var ccell = document.getElementById('clist').getElementsByTagName('td');
  ccell[iout].style.backgroundColor = color;
  var hcell = document.getElementById('hlist').getElementsByTagName('input');
  hcell[iout].value = color.toUpperCase();
  hcell[iout].select();
  ccell[iout].style.visibility = 'visible';
  hcell[iout].style.visibility = 'visible';
  if (++iout > 7) iout = 0;
}
function OnGetColor(obj) {
  var ccell = document.getElementById('clist').getElementsByTagName('td');
  var hcell = document.getElementById('hlist').getElementsByTagName('input');
  i = 0;
  color = '';
  for (i = 0; i < 8; i++)
    if (ccell[i] == obj) {
      color = hcell[i].value;
      break;
    }
  if (color == '') return;
  hex = document.getElementById('hex-output');
  hex.focus();
  hex.value = color;
  ifoc = i;
  setTimeout(function () {
    hex.blur();
    hcell[ifoc].focus();
  }, 500);
}
function OnClear() {
  var ccell = document.getElementById('clist').getElementsByTagName('td');
  var hcell = document.getElementById('hlist').getElementsByTagName('input');
  for (i = 0; i < 8; i++) {
    ccell[i].style.backgroundColor = 'inherit';
    hcell[i].value = '';
    ccell[i].style.visibility = 'hidden';
    hcell[i].style.visibility = 'hidden';
  }
  iout = 0;
}
function OnCopy(obj) {
  obj.select();
}

GetStorage();
window.onbeforeunload = function () {
  SetStorage();
};
function GetStorage() {
  var ccell = document.getElementById('clist').getElementsByTagName('td');
  var hcell = document.getElementById('hlist').getElementsByTagName('input');

  if (localStorage) {
    if (localStorage.color_scheme) {
      iout = localStorage.color_scheme_iout;
      hcell[0].value = ccell[0].style.backgroundColor =
        localStorage.color_scheme_color0;
      hcell[1].value = ccell[1].style.backgroundColor =
        localStorage.color_scheme_color1;
      hcell[2].value = ccell[2].style.backgroundColor =
        localStorage.color_scheme_color2;
      hcell[3].value = ccell[3].style.backgroundColor =
        localStorage.color_scheme_color3;
      hcell[4].value = ccell[4].style.backgroundColor =
        localStorage.color_scheme_color4;
      hcell[5].value = ccell[5].style.backgroundColor =
        localStorage.color_scheme_color5;
      hcell[6].value = ccell[6].style.backgroundColor =
        localStorage.color_scheme_color6;
      hcell[7].value = ccell[7].style.backgroundColor =
        localStorage.color_scheme_color7;
      for (i = 0; i < 8; i++) {
        if (hcell[i].value == '') v = 'hidden';
        else v = 'visible';
        ccell[i].style.visibility = v;
        hcell[i].style.visibility = v;
      }
    }
  }
}
function SetStorage() {
  var hcell = document.getElementById('hlist').getElementsByTagName('input');

  localStorage.color_scheme = 'on';
  localStorage.color_scheme_iout = iout;
  localStorage.color_scheme_color0 = hcell[0].value;
  localStorage.color_scheme_color1 = hcell[1].value;
  localStorage.color_scheme_color2 = hcell[2].value;
  localStorage.color_scheme_color3 = hcell[3].value;
  localStorage.color_scheme_color4 = hcell[4].value;
  localStorage.color_scheme_color5 = hcell[5].value;
  localStorage.color_scheme_color6 = hcell[6].value;
  localStorage.color_scheme_color7 = hcell[7].value;
}
