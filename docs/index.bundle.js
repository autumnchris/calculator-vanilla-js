(()=>{"use strict";var __webpack_modules__={452:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval("\n;// CONCATENATED MODULE: ./src/modules/calculator.js\nvar Calculator = function () {\n  var calcButtons = [{\n    value: '+/-',\n    id: 'pos-neg'\n  }, {\n    value: '%',\n    id: 'percentage'\n  }, {\n    value: 'CE',\n    className: 'clear',\n    id: 'clear-entry'\n  }, {\n    value: 'AC',\n    className: 'clear',\n    id: 'clear-all'\n  }, {\n    value: '7',\n    className: 'number',\n    id: '7'\n  }, {\n    value: '8',\n    className: 'number',\n    id: '8'\n  }, {\n    value: '9',\n    className: 'number',\n    id: '9'\n  }, {\n    value: '&divide;',\n    className: 'operator',\n    id: '/'\n  }, {\n    value: '4',\n    className: 'number',\n    id: '4'\n  }, {\n    value: '5',\n    className: 'number',\n    id: '5'\n  }, {\n    value: '6',\n    className: 'number',\n    id: '6'\n  }, {\n    value: '&times;',\n    className: 'operator',\n    id: '*'\n  }, {\n    value: '1',\n    className: 'number',\n    id: '1'\n  }, {\n    value: '2',\n    className: 'number',\n    id: '2'\n  }, {\n    value: '3',\n    className: 'number',\n    id: '3'\n  }, {\n    value: '-',\n    className: 'operator',\n    id: '-'\n  }, {\n    value: '0',\n    className: 'number',\n    id: '0'\n  }, {\n    value: '.',\n    id: 'decimal'\n  }, {\n    value: '=',\n    id: 'equals'\n  }, {\n    value: '+',\n    className: 'operator',\n    id: '+'\n  }];\n  var result = '0';\n  var endsWithOperator = result.charAt(result.length - 1).match(/\\s/);\n\n  function renderCalcButtons() {\n    document.querySelector('.calc-buttons-container').innerHTML = calcButtons.map(function (button) {\n      return \"<button type=\\\"button\\\" class=\\\"button calc-button\".concat(typeof button.className !== 'undefined' ? ' ' + button.className : '', \"\\\" id=\\\"\").concat(button.id, \"\\\">\").concat(button.value, \"</button>\");\n    }).join('');\n  }\n\n  function renderCalculator() {\n    document.querySelector('.calculator').innerHTML = \"\\n    <div class=\\\"screen\\\">\".concat(result, \"</div>\\n    <div class=\\\"calc-buttons-container\\\"></div>\");\n    renderCalcButtons();\n  }\n\n  function selectNumber(number) {\n    result = result.split(' ');\n\n    if (result[result.length - 1] === '0') {\n      result[result.length - 1] = result[result.length - 1].substr(1);\n    }\n\n    result[result.length - 1] += number;\n    document.querySelector('.screen').innerHTML = result[result.length - 1];\n    result = result.join(' ');\n  }\n\n  function selectOperator(operator) {\n    solveEquation();\n\n    if (endsWithOperator) {\n      result = result.substr(0, result.length - 3);\n    }\n\n    result += \" \".concat(operator, \" \");\n  }\n\n  function togglePosNeg() {\n    if (!endsWithOperator) {\n      result = result.split(' ');\n\n      if (result[result.length - 1] < 0) {\n        result[result.length - 1] = Math.abs(result[result.length - 1]);\n      } else if (result[result.length - 1] > 0) {\n        result[result.length - 1] = -result[result.length - 1];\n      } else {\n        result[result.length - 1] = 0;\n      }\n\n      document.querySelector('.screen').innerHTML = result[result.length - 1];\n      result = result.join(' ');\n    }\n  }\n\n  function convertToPercent() {\n    if (!endsWithOperator) {\n      result = result.split(' ');\n      result[result.length - 1] /= 100;\n      document.querySelector('.screen').innerHTML = result[result.length - 1];\n      result = result.join(' ');\n    }\n  }\n\n  function clearEntry() {\n    if (!endsWithOperator) {\n      result = result.split(' ');\n      result[result.length - 1] = '0';\n      document.querySelector('.screen').innerHTML = result[result.length - 1];\n      result = result.join(' ');\n    } else {\n      result = result.substr(0, result.length - 3);\n    }\n  }\n\n  function clearAll() {\n    result = '0';\n    document.querySelector('.screen').innerHTML = result;\n  }\n\n  function selectDecimal() {\n    if (!endsWithOperator) {\n      result = result.split(' ');\n\n      if (!result[result.length - 1].includes('.')) {\n        result[result.length - 1] += '.';\n        document.querySelector('.screen').innerHTML = result[result.length - 1];\n      }\n\n      result = result.join(' ');\n    }\n  }\n\n  function solveEquation() {\n    var a;\n    var b;\n\n    if (result.includes(' ') && !endsWithOperator) {\n      result = result.split(' ');\n      a = Number(result[0]);\n      b = Number(result[2]);\n\n      switch (result[1]) {\n        case '+':\n          result = a + b;\n          break;\n\n        case '-':\n          result = a - b;\n          break;\n\n        case '*':\n          result = a * b;\n          break;\n\n        case '/':\n          result = a / b;\n      }\n\n      result = result.toString();\n      document.querySelector('.screen').innerHTML = result;\n    }\n  }\n\n  function setKeys(event) {\n    event.preventDefault();\n\n    if (event.shiftKey) {\n      switch (event.keyCode) {\n        // plus sign\n        case 187:\n          selectOperator(event.key);\n          break;\n        // multiplication sign\n\n        case 56:\n          selectOperator(event.key);\n          break;\n        // percentage\n\n        case 53:\n          convertToPercent();\n      }\n    } else {\n      if (event.keyCode >= 48 && event.keyCode <= 57) {\n        selectNumber(event.key);\n      } else {\n        switch (event.keyCode) {\n          // minus sign\n          case 189:\n            selectOperator(event.key);\n            break;\n          // division sign\n\n          case 191:\n            selectOperator(event.key);\n            break;\n          // equal sign\n\n          case 187:\n            solveEquation();\n            break;\n          // option/alt\n\n          case 18:\n            togglePosNeg();\n            break;\n          // delete/backspace\n\n          case 8:\n            clearEntry();\n            break;\n          // escape\n\n          case 27:\n            clearAll();\n            break;\n          // decimal/period\n\n          case 190:\n            selectDecimal();\n            break;\n        }\n      }\n    }\n  }\n\n  return {\n    renderCalculator: renderCalculator,\n    selectNumber: selectNumber,\n    selectOperator: selectOperator,\n    togglePosNeg: togglePosNeg,\n    convertToPercent: convertToPercent,\n    clearEntry: clearEntry,\n    clearAll: clearAll,\n    selectDecimal: selectDecimal,\n    solveEquation: solveEquation,\n    setKeys: setKeys\n  };\n}();\n\n\n;// CONCATENATED MODULE: ./src/modules/app.js\n\n\nvar App = function () {\n  function renderApp() {\n    document.getElementById('app').innerHTML = \"\\n    <header>\\n      <h1>Calculator</h1>\\n    </header>\\n    <main>\\n      <div class=\\\"calculator\\\"></div>\\n    </main>\\n    <footer>Created by <a href=\\\"https://autumnchris.github.io/portfolio\\\" target=\\\"_blank\\\">Autumn Bullard</a> &copy; \".concat(new Date().getFullYear(), \"</footer>\");\n    Calculator.renderCalculator();\n    document.addEventListener('click', function (event) {\n      var element = event.target;\n      element.matches('.number') ? Calculator.selectNumber(element.id) : null;\n      element.matches('.operator') ? Calculator.selectOperator(element.id) : null;\n      element.matches('#pos-neg') ? Calculator.togglePosNeg() : null;\n      element.matches('#percentage') ? Calculator.convertToPercent() : null;\n      element.matches('#clear-entry') ? Calculator.clearEntry() : null;\n      element.matches('#clear-all') ? Calculator.clearAll() : null;\n      element.matches('#decimal') ? Calculator.selectDecimal() : null;\n      element.matches('#equals') ? Calculator.solveEquation() : null;\n    });\n    document.addEventListener('keydown', function (event) {\n      Calculator.setKeys(event);\n    });\n  }\n\n  return {\n    renderApp: renderApp\n  };\n}();\n\n\n;// CONCATENATED MODULE: ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/index.html\n/* harmony default export */ const cjsname_name_ext_src = (__webpack_require__.p + \"index.html\");\n;// CONCATENATED MODULE: ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/favicon.ico\n/* harmony default export */ const favicon = (__webpack_require__.p + \"favicon.ico\");\n;// CONCATENATED MODULE: ./src/index.js\n\n\n\n\n\nApp.renderApp();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDUyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FsY3VsYXRvci12YW5pbGxhLWpzLy4vc3JjL21vZHVsZXMvY2FsY3VsYXRvci5qcz82OTBiIiwid2VicGFjazovL2NhbGN1bGF0b3ItdmFuaWxsYS1qcy8uL3NyYy9tb2R1bGVzL2FwcC5qcz85M2FiIiwid2VicGFjazovL2NhbGN1bGF0b3ItdmFuaWxsYS1qcy8uL3NyYy9pbmRleC5odG1sPzczY2YiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci12YW5pbGxhLWpzLy4vc3JjL2Zhdmljb24uaWNvP2FlNzAiLCJ3ZWJwYWNrOi8vY2FsY3VsYXRvci12YW5pbGxhLWpzLy4vc3JjL2luZGV4LmpzP2Q5YmUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIENhbGN1bGF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjYWxjQnV0dG9ucyA9IFt7XG4gICAgdmFsdWU6ICcrLy0nLFxuICAgIGlkOiAncG9zLW5lZydcbiAgfSwge1xuICAgIHZhbHVlOiAnJScsXG4gICAgaWQ6ICdwZXJjZW50YWdlJ1xuICB9LCB7XG4gICAgdmFsdWU6ICdDRScsXG4gICAgY2xhc3NOYW1lOiAnY2xlYXInLFxuICAgIGlkOiAnY2xlYXItZW50cnknXG4gIH0sIHtcbiAgICB2YWx1ZTogJ0FDJyxcbiAgICBjbGFzc05hbWU6ICdjbGVhcicsXG4gICAgaWQ6ICdjbGVhci1hbGwnXG4gIH0sIHtcbiAgICB2YWx1ZTogJzcnLFxuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgaWQ6ICc3J1xuICB9LCB7XG4gICAgdmFsdWU6ICc4JyxcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIGlkOiAnOCdcbiAgfSwge1xuICAgIHZhbHVlOiAnOScsXG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICBpZDogJzknXG4gIH0sIHtcbiAgICB2YWx1ZTogJyZkaXZpZGU7JyxcbiAgICBjbGFzc05hbWU6ICdvcGVyYXRvcicsXG4gICAgaWQ6ICcvJ1xuICB9LCB7XG4gICAgdmFsdWU6ICc0JyxcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIGlkOiAnNCdcbiAgfSwge1xuICAgIHZhbHVlOiAnNScsXG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICBpZDogJzUnXG4gIH0sIHtcbiAgICB2YWx1ZTogJzYnLFxuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgaWQ6ICc2J1xuICB9LCB7XG4gICAgdmFsdWU6ICcmdGltZXM7JyxcbiAgICBjbGFzc05hbWU6ICdvcGVyYXRvcicsXG4gICAgaWQ6ICcqJ1xuICB9LCB7XG4gICAgdmFsdWU6ICcxJyxcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIGlkOiAnMSdcbiAgfSwge1xuICAgIHZhbHVlOiAnMicsXG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICBpZDogJzInXG4gIH0sIHtcbiAgICB2YWx1ZTogJzMnLFxuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgaWQ6ICczJ1xuICB9LCB7XG4gICAgdmFsdWU6ICctJyxcbiAgICBjbGFzc05hbWU6ICdvcGVyYXRvcicsXG4gICAgaWQ6ICctJ1xuICB9LCB7XG4gICAgdmFsdWU6ICcwJyxcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIGlkOiAnMCdcbiAgfSwge1xuICAgIHZhbHVlOiAnLicsXG4gICAgaWQ6ICdkZWNpbWFsJ1xuICB9LCB7XG4gICAgdmFsdWU6ICc9JyxcbiAgICBpZDogJ2VxdWFscydcbiAgfSwge1xuICAgIHZhbHVlOiAnKycsXG4gICAgY2xhc3NOYW1lOiAnb3BlcmF0b3InLFxuICAgIGlkOiAnKydcbiAgfV07XG4gIHZhciByZXN1bHQgPSAnMCc7XG4gIHZhciBlbmRzV2l0aE9wZXJhdG9yID0gcmVzdWx0LmNoYXJBdChyZXN1bHQubGVuZ3RoIC0gMSkubWF0Y2goL1xccy8pO1xuXG4gIGZ1bmN0aW9uIHJlbmRlckNhbGNCdXR0b25zKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjLWJ1dHRvbnMtY29udGFpbmVyJykuaW5uZXJIVE1MID0gY2FsY0J1dHRvbnMubWFwKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgIHJldHVybiBcIjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnV0dG9uIGNhbGMtYnV0dG9uXCIuY29uY2F0KHR5cGVvZiBidXR0b24uY2xhc3NOYW1lICE9PSAndW5kZWZpbmVkJyA/ICcgJyArIGJ1dHRvbi5jbGFzc05hbWUgOiAnJywgXCJcXFwiIGlkPVxcXCJcIikuY29uY2F0KGJ1dHRvbi5pZCwgXCJcXFwiPlwiKS5jb25jYXQoYnV0dG9uLnZhbHVlLCBcIjwvYnV0dG9uPlwiKTtcbiAgICB9KS5qb2luKCcnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckNhbGN1bGF0b3IoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0b3InKS5pbm5lckhUTUwgPSBcIlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzY3JlZW5cXFwiPlwiLmNvbmNhdChyZXN1bHQsIFwiPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNhbGMtYnV0dG9ucy1jb250YWluZXJcXFwiPjwvZGl2PlwiKTtcbiAgICByZW5kZXJDYWxjQnV0dG9ucygpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0TnVtYmVyKG51bWJlcikge1xuICAgIHJlc3VsdCA9IHJlc3VsdC5zcGxpdCgnICcpO1xuXG4gICAgaWYgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICcwJykge1xuICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0uc3Vic3RyKDEpO1xuICAgIH1cblxuICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gKz0gbnVtYmVyO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JlZW4nKS5pbm5lckhUTUwgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdO1xuICAgIHJlc3VsdCA9IHJlc3VsdC5qb2luKCcgJyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZWxlY3RPcGVyYXRvcihvcGVyYXRvcikge1xuICAgIHNvbHZlRXF1YXRpb24oKTtcblxuICAgIGlmIChlbmRzV2l0aE9wZXJhdG9yKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyKDAsIHJlc3VsdC5sZW5ndGggLSAzKTtcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gXCIgXCIuY29uY2F0KG9wZXJhdG9yLCBcIiBcIik7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVQb3NOZWcoKSB7XG4gICAgaWYgKCFlbmRzV2l0aE9wZXJhdG9yKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQuc3BsaXQoJyAnKTtcblxuICAgICAgaWYgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPCAwKSB7XG4gICAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPSBNYXRoLmFicyhyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA+IDApIHtcbiAgICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9IC1yZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JlZW4nKS5pbm5lckhUTUwgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LmpvaW4oJyAnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0VG9QZXJjZW50KCkge1xuICAgIGlmICghZW5kc1dpdGhPcGVyYXRvcikge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LnNwbGl0KCcgJyk7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdIC89IDEwMDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JlZW4nKS5pbm5lckhUTUwgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LmpvaW4oJyAnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckVudHJ5KCkge1xuICAgIGlmICghZW5kc1dpdGhPcGVyYXRvcikge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LnNwbGl0KCcgJyk7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdID0gJzAnO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcmVlbicpLmlubmVySFRNTCA9IHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV07XG4gICAgICByZXN1bHQgPSByZXN1bHQuam9pbignICcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyKDAsIHJlc3VsdC5sZW5ndGggLSAzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckFsbCgpIHtcbiAgICByZXN1bHQgPSAnMCc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcmVlbicpLmlubmVySFRNTCA9IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGVjdERlY2ltYWwoKSB7XG4gICAgaWYgKCFlbmRzV2l0aE9wZXJhdG9yKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQuc3BsaXQoJyAnKTtcblxuICAgICAgaWYgKCFyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdLmluY2x1ZGVzKCcuJykpIHtcbiAgICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSArPSAnLic7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JlZW4nKS5pbm5lckhUTUwgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQgPSByZXN1bHQuam9pbignICcpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNvbHZlRXF1YXRpb24oKSB7XG4gICAgdmFyIGE7XG4gICAgdmFyIGI7XG5cbiAgICBpZiAocmVzdWx0LmluY2x1ZGVzKCcgJykgJiYgIWVuZHNXaXRoT3BlcmF0b3IpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5zcGxpdCgnICcpO1xuICAgICAgYSA9IE51bWJlcihyZXN1bHRbMF0pO1xuICAgICAgYiA9IE51bWJlcihyZXN1bHRbMl0pO1xuXG4gICAgICBzd2l0Y2ggKHJlc3VsdFsxXSkge1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICByZXN1bHQgPSBhICsgYjtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICByZXN1bHQgPSBhIC0gYjtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICByZXN1bHQgPSBhICogYjtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICByZXN1bHQgPSBhIC8gYjtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0ID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NyZWVuJykuaW5uZXJIVE1MID0gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEtleXMoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgLy8gcGx1cyBzaWduXG4gICAgICAgIGNhc2UgMTg3OlxuICAgICAgICAgIHNlbGVjdE9wZXJhdG9yKGV2ZW50LmtleSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIG11bHRpcGxpY2F0aW9uIHNpZ25cblxuICAgICAgICBjYXNlIDU2OlxuICAgICAgICAgIHNlbGVjdE9wZXJhdG9yKGV2ZW50LmtleSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIHBlcmNlbnRhZ2VcblxuICAgICAgICBjYXNlIDUzOlxuICAgICAgICAgIGNvbnZlcnRUb1BlcmNlbnQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPj0gNDggJiYgZXZlbnQua2V5Q29kZSA8PSA1Nykge1xuICAgICAgICBzZWxlY3ROdW1iZXIoZXZlbnQua2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgIC8vIG1pbnVzIHNpZ25cbiAgICAgICAgICBjYXNlIDE4OTpcbiAgICAgICAgICAgIHNlbGVjdE9wZXJhdG9yKGV2ZW50LmtleSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBkaXZpc2lvbiBzaWduXG5cbiAgICAgICAgICBjYXNlIDE5MTpcbiAgICAgICAgICAgIHNlbGVjdE9wZXJhdG9yKGV2ZW50LmtleSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBlcXVhbCBzaWduXG5cbiAgICAgICAgICBjYXNlIDE4NzpcbiAgICAgICAgICAgIHNvbHZlRXF1YXRpb24oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIG9wdGlvbi9hbHRcblxuICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICB0b2dnbGVQb3NOZWcoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIGRlbGV0ZS9iYWNrc3BhY2VcblxuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIGNsZWFyRW50cnkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIC8vIGVzY2FwZVxuXG4gICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgIGNsZWFyQWxsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBkZWNpbWFsL3BlcmlvZFxuXG4gICAgICAgICAgY2FzZSAxOTA6XG4gICAgICAgICAgICBzZWxlY3REZWNpbWFsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyQ2FsY3VsYXRvcjogcmVuZGVyQ2FsY3VsYXRvcixcbiAgICBzZWxlY3ROdW1iZXI6IHNlbGVjdE51bWJlcixcbiAgICBzZWxlY3RPcGVyYXRvcjogc2VsZWN0T3BlcmF0b3IsXG4gICAgdG9nZ2xlUG9zTmVnOiB0b2dnbGVQb3NOZWcsXG4gICAgY29udmVydFRvUGVyY2VudDogY29udmVydFRvUGVyY2VudCxcbiAgICBjbGVhckVudHJ5OiBjbGVhckVudHJ5LFxuICAgIGNsZWFyQWxsOiBjbGVhckFsbCxcbiAgICBzZWxlY3REZWNpbWFsOiBzZWxlY3REZWNpbWFsLFxuICAgIHNvbHZlRXF1YXRpb246IHNvbHZlRXF1YXRpb24sXG4gICAgc2V0S2V5czogc2V0S2V5c1xuICB9O1xufSgpO1xuXG5leHBvcnQgeyBDYWxjdWxhdG9yIH07IiwiaW1wb3J0IHsgQ2FsY3VsYXRvciB9IGZyb20gJy4vY2FsY3VsYXRvcic7XG5cbnZhciBBcHAgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHJlbmRlckFwcCgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykuaW5uZXJIVE1MID0gXCJcXG4gICAgPGhlYWRlcj5cXG4gICAgICA8aDE+Q2FsY3VsYXRvcjwvaDE+XFxuICAgIDwvaGVhZGVyPlxcbiAgICA8bWFpbj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYWxjdWxhdG9yXFxcIj48L2Rpdj5cXG4gICAgPC9tYWluPlxcbiAgICA8Zm9vdGVyPkNyZWF0ZWQgYnkgPGEgaHJlZj1cXFwiaHR0cHM6Ly9hdXR1bW5jaHJpcy5naXRodWIuaW8vcG9ydGZvbGlvXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+QXV0dW1uIEJ1bGxhcmQ8L2E+ICZjb3B5OyBcIi5jb25jYXQobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCBcIjwvZm9vdGVyPlwiKTtcbiAgICBDYWxjdWxhdG9yLnJlbmRlckNhbGN1bGF0b3IoKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgICBlbGVtZW50Lm1hdGNoZXMoJy5udW1iZXInKSA/IENhbGN1bGF0b3Iuc2VsZWN0TnVtYmVyKGVsZW1lbnQuaWQpIDogbnVsbDtcbiAgICAgIGVsZW1lbnQubWF0Y2hlcygnLm9wZXJhdG9yJykgPyBDYWxjdWxhdG9yLnNlbGVjdE9wZXJhdG9yKGVsZW1lbnQuaWQpIDogbnVsbDtcbiAgICAgIGVsZW1lbnQubWF0Y2hlcygnI3Bvcy1uZWcnKSA/IENhbGN1bGF0b3IudG9nZ2xlUG9zTmVnKCkgOiBudWxsO1xuICAgICAgZWxlbWVudC5tYXRjaGVzKCcjcGVyY2VudGFnZScpID8gQ2FsY3VsYXRvci5jb252ZXJ0VG9QZXJjZW50KCkgOiBudWxsO1xuICAgICAgZWxlbWVudC5tYXRjaGVzKCcjY2xlYXItZW50cnknKSA/IENhbGN1bGF0b3IuY2xlYXJFbnRyeSgpIDogbnVsbDtcbiAgICAgIGVsZW1lbnQubWF0Y2hlcygnI2NsZWFyLWFsbCcpID8gQ2FsY3VsYXRvci5jbGVhckFsbCgpIDogbnVsbDtcbiAgICAgIGVsZW1lbnQubWF0Y2hlcygnI2RlY2ltYWwnKSA/IENhbGN1bGF0b3Iuc2VsZWN0RGVjaW1hbCgpIDogbnVsbDtcbiAgICAgIGVsZW1lbnQubWF0Y2hlcygnI2VxdWFscycpID8gQ2FsY3VsYXRvci5zb2x2ZUVxdWF0aW9uKCkgOiBudWxsO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIENhbGN1bGF0b3Iuc2V0S2V5cyhldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbmRlckFwcDogcmVuZGVyQXBwXG4gIH07XG59KCk7XG5cbmV4cG9ydCB7IEFwcCB9OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbmRleC5odG1sXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZhdmljb24uaWNvXCI7IiwiaW1wb3J0IHsgQXBwIH0gZnJvbSAnLi9tb2R1bGVzL2FwcCc7XG5pbXBvcnQgJ2ZpbGUtbG9hZGVyP25hbWU9W25hbWVdLltleHRdIS4vaW5kZXguaHRtbCc7XG5pbXBvcnQgJ2ZpbGUtbG9hZGVyP25hbWU9W25hbWVdLltleHRdIS4vZmF2aWNvbi5pY28nO1xuaW1wb3J0ICdub3JtYWxpemUuY3NzJztcbmltcG9ydCAnLi9zdHlsZXNoZWV0cy9zdHlsZS5zY3NzJztcbkFwcC5yZW5kZXJBcHAoKTsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3BSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzFCQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///452\n")}},__webpack_require__={};__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),(()=>{var n;__webpack_require__.g.importScripts&&(n=__webpack_require__.g.location+"");var c=__webpack_require__.g.document;if(!n&&c&&(c.currentScript&&(n=c.currentScript.src),!n)){var g=c.getElementsByTagName("script");g.length&&(n=g[g.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=n})();var __webpack_exports__={};__webpack_modules__[452](0,__webpack_exports__,__webpack_require__)})();