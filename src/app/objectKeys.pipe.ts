import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "objectKeys", pure: false })
export class ObjectKeys implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value || {});
  }
}
