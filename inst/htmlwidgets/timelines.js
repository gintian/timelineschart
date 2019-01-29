HTMLWidgets.widget({

  name: 'timelines',

  type: 'output',

  factory: function(el, width, height) {

    return {

      renderValue: function(x) {

        const timelinesWidget = TimelinesChart();

        timelinesWidget
          .data(x.data)
          .width(width)
          .maxHeight(height)
          .maxLineHeight(x.options.maxLineHeight)
          .leftMargin(x.options.margins.left)
          .rightMargin(x.options.margins.right)
          .bottomMargin(x.options.margins.bottom)
          .topMargin(x.options.margins.top)
          .zQualitative(x.options.scale.qualitative)
          .zDataLabel(x.options.scale.data_label)
          .zScaleLabel(x.options.scale.label)
          (document.getElementById(el.id));

      },

      resize: function(width, height) {

      }

    };
  }
});
