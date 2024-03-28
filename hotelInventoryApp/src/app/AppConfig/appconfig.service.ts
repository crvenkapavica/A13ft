import {InjectionToken} from "@angular/core";
import {AppConfig} from "./appconfig.interface";
import {environment} from "../../environments/environment";

export const APP_SERVICE_CONFIG: InjectionToken<AppConfig> = new InjectionToken('app.config');

export const APP_CONFIG: AppConfig = {
  apiEndpoint: environment.apiEndpoint
}
