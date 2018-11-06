<template>
    <div class="markdown-body"
         v-html="md"></div>
</template>

<script>
const marked = require("marked");
const highlight = require("highlight.js");
import "styles/markdown/highlight.css";
import "styles/markdown/github-markdown-css.css";

export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    md() {
      return this.compilerMarkdown(this.value);
    }
  },
  methods: {
    compilerMarkdown(markdown) {
      return marked(markdown, {
        renderer: new marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: true,
        smartLists: true,
        smartypants: true,
        highlight: function(code) {
          return highlight.highlightAuto(code).value;
        }
      });
    }
  }
};
</script>
