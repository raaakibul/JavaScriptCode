// JavaScript Engine

function jsengine(code){
    return code.split(/\s+/)
}

result = jsengine('var a = 55')
console.log(result);