import blog from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "Swarit's Wall",
  author: "Swarit Choudhari",
  avatar: "./avatar.svg",
  description: "I mainly post about chess, coding, and my life!",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:swaritchoudhari.p.s.y@gmail.com" },
    { title: "GitHub", url: "https://github.com/SwiftyProgrammer690" },
  ],
  background: "#fff",
  favicon: "favicon.ico"
});