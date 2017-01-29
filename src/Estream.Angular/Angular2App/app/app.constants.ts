import { Injectable } from "@angular/core";

@Injectable()
export class Configuration {
    public Auth: string = "http://localhost:5000/";
    public Server: string = "http://localhost:5004";
    public FileServer: string = "https://localhost:44378/";
}