let responsecodes: number[] = [200, 201, 404, 500, 302, 403];

function getfailedcodes(codes: number[]): number[] {
    return codes.filter(function (code: number): boolean{
            return code>=400;
    });
}

console.log("Response Codes - ", responsecodes);
console.log("Failed Codes - ", getfailedcodes(responsecodes));