// javascript
var dataset = [284
294.79
319.88
314.74
297.86
298.77
294.71
291.23
302.56
305.64
307.88
303.77
308.17
311.81
312.84
305.8
307.51
317.22
321.35
312.89
312.21
307.02
308.77
297.46
296.38
297.04
291.51
287.59
298.92
302.26
347.31
346.05
344.43
334.4
347.26
344.97
338.53
335.35
334.96
317.69
300.36
310.12
332.8
333.87
316.13
326.09
295.39
319.77
315.38
332.97
337.03
348.42
365.71
376.79
366.6
366.76
365.15
357.965
363.06
359.7
358.49];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);


var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
         return svgHeight - d
    })
    .attr("height", function(d) {
        return d;
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0];
        return "translate("+ translate +")";
    });
