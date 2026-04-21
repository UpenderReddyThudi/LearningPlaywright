class APIClient{
    public baseURL: string;
    private apikey: string;
    protected timeout: number;

    constructor (baseURL: string, apikey: string, timeout:number){
        this.baseURL = baseURL;
        this.apikey = apikey;
        this.timeout = timeout;
    }

    private getauthheader():string{
        return "Bearear " + this.apikey;
    }

    public sendrequest(path: string): void{
        console.log("GET: " + this.baseURL + path);
        console.log("Auth: " + this.getauthheader());
        console.log("Timeout: " + this.timeout + "ms");
    }

}

class UserAPIClient extends APIClient {
    getUsers(): void {
        console.log("Fetching users (timeout: " + this.timeout + "ms)");
        console.log("URL: " + this.baseURL + "/users");
    }
}

let client = new APIClient("https://api.staging.com", "key_secret_123", 5000);
console.log("Base URL:", client.baseURL);
client.sendrequest("/health");

let client1 = new UserAPIClient("https://api.QA.com", "key_secret_112", 2000);
client1.getUsers();