import { Injectable } from "@angular/core";
import { RouterStateSnapshot } from "@angular/router";
import { RouterStateSerializer } from "@ngrx/router-store";

import { RouterState } from "./router.state.interface";

@Injectable()
export class Serializer implements RouterStateSerializer<RouterState> {
  serialize(routerState: RouterStateSnapshot): RouterState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const { params } = route;
    const {
      root: { queryParams },
      url
    } = routerState;

    return { url, params, queryParams };
  }
}
