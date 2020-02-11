import { BreakpointObserver } from "@angular/cdk/layout";
import { Component } from "@angular/core";

@Component({
  selector: "twitter-component",
  styleUrls: ["./twitter.component.css"],
  templateUrl: "./twitter.component.html"
})
export class TwitterComponent {
  tweeters: string[] = ["jisna", "linto_cheeran"];
  value: string = "";
  width: string = "480px";

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(["(min-width: 480px)"])
      .subscribe(breakpoint => {
        this.width = breakpoint.matches ? "480px" : "100%";
      });
  }
}
