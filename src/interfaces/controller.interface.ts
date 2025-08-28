import { HttpRequest } from "./http-request.interface";
import { HttpResponse } from "./http-response.interface";

export interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>;
}
