enum Severity{
    low,
    medium,
    high,
    critical,
    blocker
}

console.log(Severity.critical);

function needsimmediateAttention(severity:Severity):boolean{
    return severity >= Severity.high;
}

console.log(needsimmediateAttention(Severity.low));
console.log(needsimmediateAttention(Severity.critical));
console.log(Severity[2]);

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}

console.log(Environment.QA);