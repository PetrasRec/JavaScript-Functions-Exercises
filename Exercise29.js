function functionNameNamy() {
    console.log( arguments.callee.name );
}
functionNameNamy();