(function (w, d, s, i) {
  var script = d.createElement(s);
  script.async = true;
  script.src = "//widget.simplybook.it/v2/widget/widget.js";
  script.onload = function () {
    new SimplybookWidget({
      widget_type: "iframe",
      url: "https://lydiahairstylist.simplybook.it",
      theme: "bookingtroll",
      theme_settings: {
        timeline_hide_unavailable: "1",
        hide_past_days: "0",
        timeline_show_end_time: "0",
        timeline_modern_display: "as_table",
        sb_base_color: "#6f5253",
        display_item_mode: "list",
        body_bg_color: "#e4dada",
        sb_review_image: "1",
        sb_review_image_preview:
          "/uploads/lydiahairstylist/image_files/preview/d861d398c4087b18a08b98199c5ee06d.png",
        dark_font_color: "#474747",
        light_font_color: "#ffffff",
        btn_color_1: "#6f5253",
        sb_company_label_color: "#ffffff",
        hide_img_mode: "1",
        sb_busy: "#e4dada",
        sb_available: "#fffad0",
      },
      timeline: "modern",
      datepicker: "top_calendar",
      is_rtl: false,
      app_config: {
        clear_session: 0,
        allow_switch_to_ada: 0,
        predefined: { provider: "2" },
      },
      container_id: "sbw_45sh9i",
    });
  };
  d.head.appendChild(script);
})(window, document, "script", "sbw_45sh9i");
