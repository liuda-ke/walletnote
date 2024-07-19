import { defineConfig } from "@umijs/max";

export default defineConfig({
  define: {
    "process.env": {
        REACT_APP_ENV: "prod",
    },
    REACT_APP_API_URL:'http://localhost:50451'
  },
})