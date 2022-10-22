import blog from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "Simple Blog",
  author: "Deno",
  avatar: "./avatar.svg",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:andy@deno.com" },
    { title: "GitHub", url: "https://github.com/lambtron" },
  ],
  background: "#fff"
});